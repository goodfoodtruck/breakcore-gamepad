import { Fragment } from "react";
import { Gamepad } from "react-gamepad";

export function InputsGamepadComponent () {
    const cymbal = new Audio("/audio/cymbal.wav");
	const kick = new Audio("/audio/kick.wav");
	const kick2 = new Audio("/audio/kick2.wav");
	const snare1 = new Audio("/audio/snare1.wav");
	const snare2 = new Audio("/audio/snare2.wav");
	const glitch = new Audio("/audio/glitch.wav");
	const godmode = new Audio("/audio/godmode.wav");
	const ambient = new Audio("/audio/ambient.wav");

	function controlSound(sound, isDown, index) {
		const buttonElement = document.getElementById(`controller-b${index}`);
		if (isDown) {
			sound.loop = true;
			sound.play();
			if (buttonElement) buttonElement.classList.add("active");
		} else {
			sound.pause();
			sound.currentTime = 0;
			if (buttonElement) buttonElement.classList.remove("active");
		}
	}

	function buttonChangeHandler(buttonName, isDown) {
		switch (buttonName) {
			case "LT": controlSound(cymbal, isDown, 6); break;
			case "RT": controlSound(ambient, isDown, 7); break;
			case "A": controlSound(kick, isDown, 0); break;
			case "B": controlSound(kick2, isDown, 1); break;
			case "DPadLeft": controlSound(snare1, isDown, 14); break;
			case "DPadRight": controlSound(glitch, isDown, 15); break;
			case "DPadDown": controlSound(snare2, isDown, 13); break;
			case "Back": controlSound(godmode, isDown, 8); break;
		}
	}

	return (
        <Gamepad
			onButtonChange={buttonChangeHandler}>
            <Fragment />
        </Gamepad>
	)
}