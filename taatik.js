
chrome.contextMenus.create({
  id: "log-selection",
  title: "Taatik li",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
	  copyTextToClipboard(taatik(info.selectionText));
      break;
  }
})

var dict = {
	"ا": "א",
	"أ": "א",
	"إ": "א",
	"ى": "א",
	"ئ": "א",
	"ؤ": "א",
	"ء": "א",
	"ب": "ב",
	"ت": "ת",
	"ث": "ת'",
	"ج": "ג'",
	"ح": "ח",
	"خ": "ח'",
	"د": "ד",
	"ذ": "ד'",
	"ر": "ר",
	"ز": "ז",
	"س": "ס",
	"ش": "ש",
	"ص": "צ",
	"ض": "צ'",
	"ط": "ט",
	"ظ": "ט'",
	"ع": "ע",
	"غ": "ע'",
    "ف": "פ",
	"ق": "ק",
	"ك": "כ",
	"ل": "ל",
	"م": "מ",
	"ن": "נ",
	"ه": "ה",
	"ة": "ה",
	"و": "ו",
	"ي": "י",
}

function taatik(src_arabic) {
	for (var i=0; i<src_arabic.length; i++){
		for (var src_letter of Object.keys(dict)) {
			//console.log(src_letter + '->' + dict[src_letter]);
			src_arabic = src_arabic.replace(src_letter, dict[src_letter]);
		}
	}
	return src_arabic;
}

function copyTextToClipboard(text) {
  // copied from: https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension
  //Create a textbox field where we can insert text to. 
  var copyFrom = document.createElement("textarea");

  //Set the text content to be the text you wished to copy.
  copyFrom.textContent = text;

  //Append the textbox field into the body as a child. 
  //"execCommand()" only works when there exists selected text, and the text is inside 
  //document.body (meaning the text is part of a valid rendered HTML element).
  document.body.appendChild(copyFrom);

  //Select all the text!
  copyFrom.select();

  //Execute command
  document.execCommand('copy');

  //(Optional) De-select the text using blur(). 
  copyFrom.blur();

  //Remove the textbox field from the document.body, so no other JavaScript nor 
  //other elements can get access to this.
  document.body.removeChild(copyFrom);
}
