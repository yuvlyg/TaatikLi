document.body.style.border = "5px solid blue";

browser.menus.create({
  id: "log-selection",
  title: "Taatik li",
  contexts: ["selection"]
});

browser.menus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      navigator.clipboard.writeText(taatik(info.selectionText));
      break;
  }
})

var dict = {
	"و": "ו",
	"ا": "א",
	"ح": "ח",
	"د": "ד",
	"ق": "ק",
	"ر": "ר",
	"ي": "י",
	"ت": "ת",
	"ز": "ז",
	"ج": "ג'",
	"ع": "ע",
	"ل": "ל",
	"ى": "א",
	"م": "מ",
	"ه": "ה",
    "ف": "פ",
	"س": "ס",
	"أ": "א",
	"ب": "ב",
	"ة": "ה'",
	"ك": "כ",
	"ن": "נ",
}

function taatik(src_arabic) {
	for (var i=0; i<src_arabic.length; i++){
		for (var src_letter of Object.keys(dict)) {
			console.log(src_letter + '->' + dict[src_letter]);
			src_arabic = src_arabic.replace(src_letter, dict[src_letter]);
		}
	}
	return src_arabic;
}
