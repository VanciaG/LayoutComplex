let $menuTriggerButton = document.getElementById('trigger-menu');
let $mainMenuNav = document.getElementById('main-meniu');

$menuTriggerButton.addEventListener('click', () => {
	$mainMenuNav.classList.toggle('Active');
	$menuTriggerButton.classList.toggle('Active');
}, true);