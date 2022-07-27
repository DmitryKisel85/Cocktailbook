export const testImage = (url, timeout) =>
	new Promise((res) => {
		timeout = timeout || 5000;
		let timedOut = false;
		let timer;
		const img = new Image();

		img.onerror = img.onabort = function () {
			if (!timedOut) {
				clearTimeout(timer);
				res("error");
			}
		};

		img.onload = function () {
			if (!timedOut) {
				clearTimeout(timer);
				res("success");
			}
		};

		if (url === "") {
			url = "https://i.pinimg.com/originals/a3/b9/6f/a3b96f21beb326de113562c5062368e9.png";
		}

		img.src = url;

		timer = setTimeout(function () {
			timedOut = true;
			// reset .src to invalid URL so it stops previous
			// loading, but doesn't trigger new load
			img.src = "//!!!!/test.jpg";
			res("timeout");
		}, timeout);
	});
