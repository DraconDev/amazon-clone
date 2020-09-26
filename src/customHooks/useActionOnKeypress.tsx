import React, { useEffect } from "react";

function useFunctionOnKeypress(fn: () => void) {
	useEffect(() => {
		const handleKeyUp = (e: any) => {
			if (e.keyCode === 13) {
				////* Do something
				fn();
			}
		};

		window.document.addEventListener("keyup", handleKeyUp);

		return () => {
			window.document.removeEventListener("keyup", handleKeyUp);
		};
	}, [fn]);
}

export default useFunctionOnKeypress;
