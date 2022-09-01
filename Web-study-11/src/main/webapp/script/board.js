function boardCheck() {
	if(documnet.frm.name.value.length ==0){
		alert("작성자 입력 안하셨어요..")
		return false;
	}
	if(document.frm.pass.value.length==0) {
		alert("비번은 왜 입력안하세요")
		return false;
	}
	if(document.frm.title.value.length==0) {
		alert("제목좀 입력해줄랜")
		return false;
	}
	return true;
}

function open_win(url,name) {
	window.open(url, name, "width=500, height=230");
}

function passCheck() {
	if(document.frm.pass.value.length==0) {
		alert("비번은 왜 입력안하세요")
		return false;
	}
	return true;
}