const pdfButton = document.getElementById("pdf-button");
const txtButton = document.getElementById("txt-button");
const jpgButton = document.getElementById("jpg-button");

jpgButton.addEventListener("click",() => {
  chrome.tabs.query({active: true}, async function(tabs) {
    try {
      jpgButton.disabled = true;
      var tab = tabs[0];
      if (tab) {
          await execScript(tab);
      } else {
          alert("There are no active tabs");
      }
    } catch (error) {
      console.log("error: ", error);
    } finally {
      jpgButton.disabled = false;
    }
  })
})

async function execScript(tab) {
  await chrome.scripting.executeScript(
      {
          target:{tabId: tab.id, allFrames: true},
          func:grapDOMElement
      }
  )
}
async function grapDOMElement() {
  const div = document.getElementsByClassName("flex flex-col items-center text-sm dark:bg-gray-800")[0];
  div.style.backgroundColor = getColorTheme();
  await downloadImage(div);
  div.style.backgroundColor = "";
}
