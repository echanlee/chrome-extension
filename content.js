var content_id = -1;
var str1 = "\(";
console.log('Here we are!');

chrome.input.ime.onFocus.addListener(function(context) {
  context_id = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(
  function(engineID, keyData) {
    if (keyData.type == "keydown" && content_id === -1) {
      chrome.input.ime.commitText({"contextID": context_id,
      "text": str1.concat(keyData.key())});
      content_id=1;
      return true;
    } else {
      return false;
    }
});
