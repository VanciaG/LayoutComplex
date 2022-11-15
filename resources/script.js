/* abstractizarea lui getElementById */ 
function getId(numeID) {
	return document.getElementById(numeID);
}

/* instantierea trigger-ului de meniu */
let $menuTriggerButton = document.getElementById('trigger-menu');
let $mainMenuNav = document.getElementById('main-meniu');

$menuTriggerButton.addEventListener('click', () => {
	$mainMenuNav.classList.toggle('Active');
	$menuTriggerButton.classList.toggle('Active');
}, true);


/* instantierea slider-ului */
let $previousSlideLink = document.getElementById('previous-slide');
let $nextSlideLink = document.getElementById('next-slide');
let $sliderPickerList = document.getElementById('slider-picker');
let currentSlide = 1;
let $sliderList = document.getElementById('sliderList');
let allSliders = $sliderList.childElementCount;

function selectSlide(position){
	//console.log('slide-ul curent este', currentSlide, 'slide-ul NOU este', position);
	//console.log($sliderList, $sliderList.childNodes, $sliderList.childNodes[currentSlide - 1]);
	$sliderList.children[currentSlide - 1].classList.remove('active');
	$sliderPickerList.children[currentSlide - 1].classList.remove('active');
	currentSlide = position;
	$sliderList.children[currentSlide - 1].classList.add('active');
	$sliderPickerList.children[currentSlide - 1].classList.add('active');
}

$previousSlideLink.addEventListener('click', () => {
	let position = (currentSlide === 1)? allSliders : (currentSlide - 1);
	//console.log('slide-ul curent este', position);
	selectSlide(position);
}, true);

$nextSlideLink.addEventListener('click', () => {
	let position = (currentSlide === allSliders) ? 1: (currentSlide + 1);
	//console.log('slide-ul curent este', currentSlide);
	selectSlide(position);
}, true);

$sliderPickerList.querySelectorAll('.slider-picker-link').forEach((el, index) => {
	el.addEventListener('click', () => {
		let position = index + 1;
		selectSlide(position);
	}, true)
});