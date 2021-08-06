console.log("hello world");

const compliment = () => {
	for(let i = Math.floor(Math.random() * 3); i <= complimentArr.length; i++){
		alert(complimentArr[i].textContent);
		return
}
}

function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form Submitted!');
	console.log('form submit');
}


let form = document.querySelector('form#contact');
let catImage = document.querySelector('#cat');
let complimentArr = document.querySelectorAll('.compliment')
catImage.addEventListener('mouseover', compliment);
form.addEventListener('submit', handleSubmit);
