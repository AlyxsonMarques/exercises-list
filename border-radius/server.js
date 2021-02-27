function refreshBorderTopLeft() {
	
	const box = document.getElementById("box")

	const input = document.getElementById("left-up");

	let topLeftValue = input.value

	box.style.borderTopLeftRadius = `${topLeftValue}%`

	//borderBottomLeftRadius: "20%"
	//borderBottomRightRadius: "20%"
}

function refreshBorderBottomLeft() {
	
	const box = document.getElementById("box")

	const input = document.getElementById("left-bottom");

	let bottomLeftValue = input.value

	box.style.borderBottomLeftRadius = `${bottomLeftValue}%`

	//borderBottomLeftRadius: "20%"
	//borderBottomRightRadius: "20%"
}

function refreshBorderTopRight() {
	
	const box = document.getElementById("box")

	const input = document.getElementById("right-up");

	let topRightValue = input.value

	box.style.borderTopRightRadius = `${topRightValue}%`

	//borderBottomLeftRadius: "20%"
	//borderBottomRightRadius: "20%"
}

function refreshBorderBottomRight() {
	
	const box = document.getElementById("box")

	const input = document.getElementById("right-bottom");

	let bottomRightValue = input.value;

	box.style.borderBottomRightRadius = `${bottomRightValue}%`

	//borderBottomLeftRadius: "20%"
	//borderBottomRightRadius: "20%"
}

function getStyle(){

	const box = document.getElementById("box");

	let topLeftValue = box.style.borderTopLeftRadius;
	let bottomLeftValue = box.style.borderBottomLeftRadius;

	let topRightValue = box.style.borderTopRightRadius;
	let bottomRightValue = box.style.borderBottomRightRadius;

	let style =	`box {\n border-top-left-radius: ${topLeftValue} \n border-top-right-radius: ${topRightValue} \n border-bottom-right-radius: ${bottomRightValue} \n border-bottom-left-radius: ${bottomLeftValue} \n}`

	let copyText = document.getElementById("toCopy")

	copyText.value = style

	copyText.select();
	copyText.setSelectionRange(0, 99999);

	document.execCommand("copy");

}