// console.log('hello worls');
// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const htmlparser2 = require('htmlparser2');
// const cheerio = require('cheerio');
// // (async () => {
// //   try {
// //     // Чтение текста из файла
// //     const textToTranslate = fs.readFileSync('input.txt', 'utf-8');

// //     // Разделение текста на части по 1500 символов
// //     const chunkSize = 1500;
// //     const textChunks = [];
// //     for (let i = 0; i < textToTranslate.length; i += chunkSize) {
// //       textChunks.push(textToTranslate.substr(i, chunkSize));
// //     }

// //     // Запуск браузера
// //     const browser = await puppeteer.launch({ headless: 'new' });
// //     console.log('browser', browser);
// //     const page = await browser.newPage();

// //     // Переход на страницу DeepL Translator
// //     await page.goto('https://www.deepl.com/en/translator');
// //     console.log('page', page);
// //     // Ожидание загрузки страницы
// //     await page.waitForTimeout(5000);

// //     // Нахождение формы ввода текста и вставка текста
// //     const inputBox = await page.$('.lmt__textarea');

// //     // Вставка частей текста поочередно
// //     for (const chunk of textChunks) {
// //       await inputBox.type(chunk);
// //       await page.waitForTimeout(1000); // Дополнительное ожидание между вставками
// //     }

// //     // Дополнительные действия или ожидания могут быть добавлены здесь

// //     // Закрытие браузера
// //     await browser.close();
// //   } catch (error) {
// //     console.error('Произошла ошибка:', error);
// //   }
// // })();

// // .lmt__side_container--source > .lmt__textarea_container > .lmt__inner_textarea_container > .lmt__textarea
// // console.log('hello ', $('.lmt__side_container--source'))
// // console.log($('.lmt__inner_textarea_container'))
// //
// // (async () => {
// //     // Launch the browser and open a new blank page
// //     const browser = await puppeteer.launch({ headless: false });
// //     const page = await browser.newPage();
  
// //     // Page to DeepL Translator
// //     await page.goto('https://www.deepl.com/en/translator');
  
// //     // Set screen size
// //     await page.screenshot({path: 'example.png'});
  
// //     // Type into search box
// //     // await page.type('.search-box__input', 'automate beyond recorder');
  
// //     // // Wait and click on first result
// //     // const searchResultSelector = '.search-box__link';
// //     // await page.waitForSelector('.search-box__link', { timeout: 60000 });
// //     // await page.click(searchResultSelector);
  
// //     // // Locate the full title with a unique string
// //     // const textSelector = await page.waitForSelector(
// //     //   'text/Customize and automate'
// //     // );
// //     const fullTitle = await textSelector?.evaluate(el => el.textContent);
  
// //     // Print the full title
// //     console.log('The title of this blog post is "%s".', fullTitle);
  
// //     await browser.close();
// //   })();



// // (async () => {
// //     try {
// //       // Чтение текста из файла
// //       const textToTranslate = fs.readFileSync('input.txt', 'utf-8');
  
// //       const browser = await puppeteer.launch({ headless: false });
// //       const page = await browser.newPage();
  
// //       await page.goto('https://www.deepl.com/en/translator');
  
// //       // Ожидание загрузки страницы
// //       await page.waitForTimeout(5000);
  
// //       // Находим первую форму и вставляем текст
// //       const inputBox = await page.$('.lmt__inner_textarea_container d-textarea');
// //       await inputBox.type(textToTranslate);
  
// //       // Ожидание загрузки преобразованного текста
// //       await page.waitForSelector('.lmt__inner_textarea_container d-textarea');
  
// //       // Получаем преобразованный текст
// //       const translatedText = await page.$eval('.lmt__side_container--target .lmt__textarea_container .lmt__inner_textarea_container d-textarea', textarea => {
// //         console.log('textarea.value', textarea.value)
// //       });

// //     console.log('Преобразованный текст:', translatedText);
  
// //         // Закрытие браузера
// //         //   await browser.close();
// //     } catch (error) {
// //       console.error('Произошла ошибка:', error);
// //     }
// //   })();


// (async () => {
//     try {
//       // Чтение текста из файла
//       const textToTranslate = fs.readFileSync('input.txt', 'utf-8');
    
//       const browser = await puppeteer.launch({ headless: false });
//       const page = await browser.newPage();
    
//       await page.goto('https://www.deepl.com/en/translator');
    
//       // Ожидание загрузки страницы
//       await page.waitForTimeout(5000);
    
//       // Находим первую форму и вставляем текст
//       const inputBox = await page.$('.lmt__inner_textarea_container d-textarea');
//       await inputBox.type(textToTranslate);
    
//       // Ожидание загрузки преобразованного текста
//       // await page.waitForSelector('.lmt__translated_textarea_container textarea');
//       await page.waitForFunction(() => {
//         // const textarea = document.querySelector('.lmt__side_container--target .lmt__textarea_container .lmt__inner_textarea_container d-textarea div').innerHTML;
//         // console.log('textareatextarea', textarea);
//         const textareaHtml = document.querySelector('.lmt__side_container--target .lmt__textarea_container .lmt__inner_textarea_container d-textarea').innerHTML;

//         const $ = cheerio.load(textareaHtml);
//         const extractedText = $('.lmt__inner_textarea_container').text();
  
//         console.log('Извлеченный текст:', extractedText);
  
//         return textareaHtml.includes('aria-disabled="false"');
//         // const parser = new htmlparser2.Parser({
//         //   ontext(text) {
//         //     extractedText += text;
//         //   }
//         // });
        
//         // parser.write(textarea);
//         // parser.end();
//         // console.log(extractedText); // Выводит: "Текст"
       
//         // return textarea && textarea.getAttribute('aria-disabled') === 'false';
//       });
    
//       // Закрытие браузера
//     //   await browser.close();
//     } catch (error) {
//       console.error('Произошла ошибка:', error);
//     }
//   })();
  /**
   */


// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const cheerio = require('cheerio'); 
   
//    (async () => {
//      try {
//        // Reading text from a file
//        const textToTranslate = fs.readFileSync('input.txt', 'utf-8');
        
//        // Browser opening
//        const browser = await puppeteer.launch({ headless: false });
//        const page = await browser.newPage();
     
//        await page.goto('https://www.deepl.com/en/translator');
     
//        // Waiting for page load
//        await page.waitForTimeout(5000);
     
//         // Find the first form and insert the text
//         const inputBox = await page.$('.lmt__inner_textarea_container d-textarea');
//         await inputBox.type(textToTranslate);
    
//         // await page.waitForFunction(() => {
//         //     const textarea = document.querySelector('.lmt__side_container--target .lmt__textarea_container .lmt__inner_textarea_container d-textarea div');
//         //     // console.log('textarea', textarea);
//         //     // console.log('textarea.attribute', textarea.getAttribute('aria-disabled'));
//         //     // console.log("textarea.getAttribute('aria-disabled') === 'false'", textarea.getAttribute('aria-disabled') === 'false');
//         //     return textarea && textarea.getAttribute('aria-disabled') === 'false';
//         // });  
          
//         // It's a bone, but it doesn't work any other way yet.
//         await page.waitForTimeout(10000);

//         // Retrieve the HTML content from the browser
//         const extractedHtml = await page.evaluate(() => {
//             return document.querySelector('.lmt__side_container--target .lmt__textarea_container .lmt__inner_textarea_container d-textarea').innerHTML;
//         });
     
//         // Recursively loop through the house tree to find the text
//         function extractTextFromHtml(html) {
//             const $ = cheerio.load(html);
//             let extractedText = '';

//             function getTextFromElement(element) {
//                 element.contents().each((_, node) => {
//                 if (node.type === 'text') {
//                     extractedText += node.data.trim() + ' ';
//                 } else if (node.type === 'tag') {
//                     getTextFromElement($(node));
//                 }
//                 });
//             }

//         getTextFromElement($.root());

//         return extractedText.trim();
//         }
       
//         const extractedText = extractTextFromHtml(extractedHtml);
//         console.log('Extracted text:', extractedText);

//        // Closing the browser
//        // await browser.close();
//      } catch (error) {
//        console.error('Error:', error);
//      }
//    })();

/////////////////////////////////////////////////////////////

// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const cheerio = require('cheerio');

// (async () => {
//     try {
//         // Reading text from a file
//         const textToTranslate = fs.readFileSync('input.txt', 'utf-8');
//         const lines = textToTranslate.split('\n'); // Split text into an array of lines

//         const browser = await puppeteer.launch({ headless: false });
//         const page = await browser.newPage();

//         await page.goto('https://www.deepl.com/en/translator');
//         await page.waitForTimeout(5000);

//         // Process text in chunks of 4 lines
//         const chunkSize = 4;
//         for (let i = 0; i < lines.length; i += chunkSize) {
//             const chunk = lines.slice(i, i + chunkSize).join('\n');
                
//             const inputBox = await page.$('.lmt__inner_textarea_container d-textarea');
//             // Clear form
//             await page.$eval('.lmt__inner_textarea_container d-textarea', input => input.value = ''); 
//             await inputBox.type(chunk);

//             // It's a bone, but it doesn't work any other way yet.
//             await page.waitForTimeout(5000);

//             // Retrieve the HTML content from the browser
//             const extractedHtml = await page.evaluate(() => {
//                 return document.querySelector('.lmt__side_container--target .lmt__textarea_container .lmt__inner_textarea_container d-textarea').innerHTML;
//             });

//             const extractedText = extractTextFromHtml(extractedHtml);
//             console.log('Extracted text:', extractedText);
//             // Write extractedText to a new file
//             fs.appendFileSync('output.txt', extractedText + '\n', 'utf-8');
    
//         }
//             // Closing the browser
//             // await browser.close();
//         } catch (error) {
//             console.error('Error:', error);
//         }
// })();


//     // Recursively loop through the house tree to find the text
//     function extractTextFromHtml(html) {
//         const $ = cheerio.load(html);
//         let extractedText = '';

//         function getTextFromElement(element) {
//             element.contents().each((_, node) => {
//                 if (node.type === 'text') {
//                 extractedText += node.data.trim() + ' ';
//                 } else if (node.type === 'tag') {
//                 getTextFromElement($(node));
//                 }
//             });
//         }

//         getTextFromElement($.root());

//         return extractedText.trim();
//     }


// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const cheerio = require('cheerio');

// (async () => {
//     try {
//         // Reading text from a file
//         const textToTranslate = fs.readFileSync('input.txt', 'utf-8');
//         const lines = textToTranslate.split('\n'); // Split text into an array of lines

//         const browser = await puppeteer.launch({ headless: false });
//         const page = await browser.newPage();

//         await page.goto('https://www.deepl.com/en/translator');
//         await page.waitForTimeout(5000);

//         let currentChunk = [];
//         for (let i = 0; i < lines.length; i++) {
//             const line = lines[i].trim();
//             if (line === '' || i === lines.length - 1) {
//                 if (currentChunk.length > 0) {
//                     await processChunk(page, currentChunk);
//                     currentChunk = [];
//                 }
//             } else {
//                 currentChunk.push(line);
//             }
//         }

//         // Closing the browser
//         // await browser.close();
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();

// async function processChunk(page, chunkLines) {
//     const number = chunkLines[0];
//     const time = chunkLines[1];
//     const text = chunkLines.slice(2).join('\n');

//     const inputBox = await page.$('.lmt__inner_textarea_container d-textarea');
//     await page.$eval('.lmt__inner_textarea_container d-textarea', input => input.value = '');
//     await inputBox.type(text);

//     // It's a bone, but it doesn't work any other way yet.
//     await page.waitForTimeout(5000);

//     const extractedHtml = await page.evaluate(() => {
//         return document.querySelector('.lmt__side_container--target .lmt__textarea_container .lmt__inner_textarea_container d-textarea').innerHTML;
//     });

//     const extractedText = extractTextFromHtml(extractedHtml);
//     console.log('Extracted text:', extractedText);

//     // Write extractedText to a new file in the same format
//     fs.appendFileSync('output.txt', number + '\n' + time  + '\n' + extractedText + '\n\n', 'utf-8');
// }

// // Recursively loop through the house tree to find the text
// // Recursively loop through the house tree to find the text
// function extractTextFromHtml(html) {
//     const $ = cheerio.load(html);
//     let extractedText = '';

//     function getTextFromElement(element) {
//         element.contents().each((_, node) => {
//             if (node.type === 'text') {
//                 const trimmedText = node.data.trim();
//                 if (extractedText.length === 0) {
//                     extractedText += trimmedText;
//                 } else {
//                     extractedText += ' ' + trimmedText;
//                 }
//             } else if (node.type === 'tag') {
//                 getTextFromElement($(node));
//             }
//         });
//     }

//     getTextFromElement($.root());

//     return extractedText.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
//                         .replace(/(\s*)([,.!?'-])/g, '$2') // Remove spaces before punctuation marks
//                         .trim();
// }

/********************************************************************/

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






