import { getProgressBar } from "./src/util/getProgressBar"

console.log("I ran")

const progressBar = getProgressBar()
console.log(progressBar)

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  )
  console.log(request)
  if (request.operation === "getCurrentTimestamp") {
    const progressBar = getProgressBar()
    console.log(progressBar)
    const timeStamp = progressBar?.getAttribute("aria-valuenow")
    console.log(timeStamp)
    sendResponse({ timeStamp })
    return true
  }
})
