const chronometer = document.getElementById("timer");

const countDown = setInterval(() => {
		chronometer.textContent--;
		let date = new Date();

		let timer = [date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()];
		chronometer.textContent = timer;

		if (chronometer.textContent <= 0) {
			clearInterval(countDown);
			alert("Вы победили в конкурсе!");
			window.location = "https://anatolykulikov.ru/lesson/countdown-timer/";
		}
	}

	, 1000);