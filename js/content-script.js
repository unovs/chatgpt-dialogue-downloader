const htmlToImageScript = document.createElement('script');
htmlToImageScript.src = chrome.extension.getURL('js/html-to-image.min.js');
document.body.appendChild(htmlToImageScript);

const utilsScript = document.createElement('script');
utilsScript.src = chrome.extension.getURL('js/utils.js');
document.body.appendChild(utilsScript);