function validate(){
	const input = document.getElementById("inputbin")

	const regex = /[^0-1|" "]/g

	if(regex.test(input.value)){
		window.alert("Escreva somente 0's, 1's e espaços!")
	}

	input.value = input.value.split(regex).join('');

	input.value = input.value.replace(/ +/g," ");

	convert();

}

function convert(){

	const input = document.getElementById("inputbin")

	let withoutSpace = input.value.split(' ').join('');

	let reversed = withoutSpace.split('').reverse().join('');

	let decimal = 0;

	for(let i = 0; i < reversed.length; i++){

		let actualChar = parseInt(reversed[i]);

		if(actualChar === 0 || actualChar === 1){
			decimal += Math.pow(2, i) * actualChar;
		}
		else {
			decimal += 0;
		}

	}

	const output = document.getElementById("outputdec")
	output.value = decimal
}