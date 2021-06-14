document.addEventListener("DOMContentLoaded",function(){
	let check = this.forms[0];
	if (check) {
		let aiw = check.amount_in_words;
		if (aiw) {
			let fillChar = "—";
			aiw.addEventListener("focus",removeLine.bind(aiw,fillChar));
			aiw.addEventListener("blur",addLine.bind(aiw,fillChar));
		}
	}
});
function removeLine(fillChar) {
	let fillCharPos = this.value.indexOf(fillChar);
	if (fillCharPos > 0)
		this.value = this.value.substr(0,fillCharPos);
}
function addLine(fillChar) {
	if (this.value.length > 0) {
		let toFill = +this.maxLength - this.value.length;
		if (toFill > -1) {
			while (--toFill)
				this.value += fillChar;
		}
	}
}