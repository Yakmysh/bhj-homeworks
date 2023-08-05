const chronometer = document.getElementById("timer");

const countDown = setInterval(() => {
		chronometer.textContent -1;
		let date = new Date();

		let timer = [date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()];
		chronometer.textContent = timer;

		if (chronometer.textContent <= 0) {
			clearInterval(countDown);
			
			setTimeout (() => alert("Вы победили в конкурсе!"), 59000);
		}
		window.location = "https://anatolykulikov.ru/lesson/countdown-timer/";
	
	}, 1000);