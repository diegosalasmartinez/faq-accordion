const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
    arrow.addEventListener('click', e => {
        e.preventDefault();
        
        const prevQuestion = document.querySelector('.open');
        const prevAnswer = prevQuestion.firstElementChild.nextElementSibling;
        const curQuestion = arrow.parentElement.parentElement; 
        const curAnswer = arrow.parentElement.nextElementSibling;
        
        prevQuestion.classList.remove('open');
        curQuestion.classList.add('open');

        if(prevQuestion !== curQuestion){
            prevAnswer.classList.remove('fade-in');
            prevAnswer.classList.add('fade-out');
            curAnswer.classList.remove('fade-out');
            curAnswer.classList.add('fade-in');
        }
    });
});