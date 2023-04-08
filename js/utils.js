function getCurrentStringDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}-${hour}-${minute}-${second}`;
}

async function downloadImage(div) {
  const dataUrl = await htmlToImage.toJpeg(div, { quality: 1 });
  const link = document.createElement("a");
  link.download = `chat-gpt-gialogue-${getCurrentStringDate()}.jpeg`;
  link.href = dataUrl;
  link.click();
}

function getColorTheme() {
  return localStorage.getItem("theme") === "dark" ? "rgb(52,53,65)" : "#ffffff";
}
