const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const container = document.getElementById('container')

signUp.addEventListener('click',() => {
    container.classList.add("right-panel-active")
});

signIn.addEventListener('click',() => {
    container.classList.add("right-panel-active")
});