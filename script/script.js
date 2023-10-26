
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in');

    function addFadeInClass(element) {
        element.style.opacity = 1;
    }

    // Apply the fade-in animation to the elements with a slight delay
    elements.forEach(function (element, index) {
        setTimeout(function () {
            addFadeInClass(element);
        }, 500 * index); // Adjust the delay as needed
    });
});



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

