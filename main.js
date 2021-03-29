const startBtn = document.querySelector('#start');
const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const purple = document.querySelector('#purple');
const green = document.querySelector('#green');

class Game {
	constructor() {
		this.level = 1;
		this.lastLevel = 10;
		this.colors = {
			blue,
			red,
			purple,
			green,
		};
		this.sequence = [];
		this.generateSequence();
	}

	generateSequence() {
		this.sequence = new Array(this.lastLevel)
			.fill(0)
			.map(n => Math.floor(Math.random() * (5 - 1) + 1));

		this.iluminateSequence();
	}

	iluminateSequence() {
		for (let i = 0; i < this.sequence.length; i++) {
			const color = this.sequenceToColors(this.sequence[i]);
			setTimeout(() => this.iluminate(color), 1000 * i);
		}
	}

	iluminate(color) {
		color.classList.add('light');
		setTimeout(() => color.classList.remove('light'), 650);
	}

	sequenceToColors(sequence) {
		switch (sequence) {
			case 1:
				return this.colors.red;
				break;
			case 2:
				return this.colors.blue;
				break;
			case 3:
				return this.colors.purple;
				break;
			case 4:
				return this.colors.green;
				break;
		}
	}
}

startBtn.addEventListener('click', () => {
	startBtn.style.display = 'none';
	new Game();
});
