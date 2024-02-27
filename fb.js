var signUpBtn = document.querySelector ('.signup-btn');
var signpop = document.querySelector('.signup-pop');
var closeform = document.getElementById('close');


signUpBtn.addEventListener('click', ()=>{
    signpop.classList.add('show');
})

closeform.addEventListener('click', ()=>{
    signpop.classList.remove('show');
})