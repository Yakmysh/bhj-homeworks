const clickerStatus = document.getElementById("clicker__counter");

cookie.onclick = function() {
	clickerStatus.textContent++;
	if (cookie.width == 200) {
		cookie.width = 150;
	} else {
		cookie.width = 200;
	}  
}