import { InputsGamepadComponent } from "./components/InputsGamepadComponent";
import { ControlsGamepadComponent } from "./components/ControlsGamepadComponent";
import "./App.css";

export default function App() {
	return (
		<>
			<div className="bg-image"></div>
			<h2>breakcore gamepad</h2>
			<ControlsGamepadComponent />
			<InputsGamepadComponent />
			<a href="https://github.com/goodfoodtruck/breakcore-gamepad" />
		</>
	)
}