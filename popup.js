document.querySelector(".btn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   console.log(tab.title);
  document.querySelector(".title").innerHTML = tab.title;
});
