
const puppeteer = require('puppeteer');
const fs = require('fs');
const cheerio = require('cheerio');
const winston = require('winston');

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'translation.log' }) // Log to a file
    ]
});

(async () => {
    try {
        logger.info('Reading text from input file...');
        const textToTranslate = fs.readFileSync('input.txt', 'utf-8');
        const lines = textToTranslate.split('\n'); // Split text into an array of lines

        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        logger.info('Opening DeepL translator...');
        await page.goto('https://www.deepl.com/en/translator');
        await page.waitForTimeout(5000);

        let currentChunk = [];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line === '' || i === lines.length - 1) {
                if (currentChunk.length > 0) {
                    logger.info(`Processing chunk ${i / 4 + 1}...`);
                    await processChunk(page, currentChunk);
                    currentChunk = [];
                }
            } else {
                currentChunk.push(line);
            }
        }

        logger.info('Translation and extraction complete.');
        // Closing the browser
        await browser.close();
    } catch (error) {
        logger.error('Error:', error);
        console.log('Error:', error);
    }
})();

async function processChunk(page, chunkLines) {
    const number = chunkLines[0];
    const time = chunkLines[1];
    const textFormInput= '.rounded-bl-inherit .rounded-bl-inherit d-textarea'; //.lmt__inner_textarea_container d-textarea
    const textFormOutput = '.rounded-bl-inherit .rounded-br-inherit d-textarea'; //????

    // Split a string into separate lines with '\n'
    const chunkLinesArray = chunkLines.slice(2);
        
    // Remove spaces at the beginning and end of each line and join them
    const trimmedLines = chunkLinesArray.map(line => line.trim());
    const text = trimmedLines.join(' ');

    const inputBox = await page.$(textFormInput);
    await page.$eval(textFormInput, input => input.value = '');
    await inputBox.type(text);

    // It's a bone, but it doesn't work any other way yet.
    await page.waitForTimeout(5000);

    const extractedHtml = await page.evaluate(() => {
        return document.querySelector('.rounded-bl-inherit .rounded-br-inherit d-textarea').innerHTML;
    });

    const extractedText = extractTextFromHtml(extractedHtml);
    logger.info('Extracted text:', extractedText);

    // Write extractedText to a new file in the same format
    // fs.appendFileSync('output.txt', number + '\n' + time + '\n' + extractedText + '\n\n', 'utf-8');
    // fs.appendFileSync('output2.txt', number + '\n' + time + '\n'+ text + '\n' + extractedText + '\n\n', 'utf-8');
    fs.appendFileSync('double_file.srt', number + '\n' + time + '\n'+ text + '\n' + '<font color="#fcaf3e">' + extractedText + '</font>' + '\n\n', 'utf-8');

    logger.info(`Chunk ${number} processed.`);
}

// Recursively loop through the house tree to find the text
function extractTextFromHtml(html) {
    const $ = cheerio.load(html);
    let extractedText = '';

    function getTextFromElement(element) {
        element.contents().each((_, node) => {
            if (node.type === 'text') {
                const trimmedText = node.data.trim();
                if (extractedText.length === 0) {
                    extractedText += trimmedText;
                } else {
                    extractedText += ' ' + trimmedText;
                }
            } else if (node.type === 'tag') {
                getTextFromElement($(node));
            }
        });
    }

    getTextFromElement($.root());

    return extractedText.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
                        .replace(/(\s*)([,.!?'"-])/g, '$2') // Remove spaces before punctuation marks
                        .trim();
}






