let btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  //get current active tab
  var i = 0;
  var links = document.getElementsByClassName("links");
  console.log(links);

  const interval = setInterval(async () => {
    var profileURL = links[i].innerHTML;
    console.log(profileURL);

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.update(tab.id, { url: profileURL });

    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        files: ["script.js"],
      })
      .then(() => console.log("script injected"));

    i++;
    console.log(i);
    if(i >= links.length){
      return;
    }
  }, 10000);

  if (i >= links.length) {
    return;
    console.log("closed");
    clearInterval(interval);
  }
  //Execute script to get and post data
});
