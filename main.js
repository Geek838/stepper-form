const stepOne = document.querySelectorAll('.step-1');
const stepTwo = document.querySelectorAll('.step-2');
const stepThree = document.querySelectorAll('.step-3');
const buttonOne = stepOne[0].children[1].children[2];
const buttonTwo = stepTwo[0].children[1].children[2];
const buttonThree = stepThree[0].children[1].children[2];
const stepClicker = document.querySelectorAll('.heading-wrapper > h5');



buttonOne.addEventListener('click', (e) => {
    e.preventDefault();
    stepOne[0].children[1].style.display = 'none';
    stepTwo[0].style.display = 'block'
}, true);
buttonTwo.addEventListener('click', (e) => {
    e.preventDefault();
    stepTwo[0].children[1].style.display = 'none';
    stepThree[0].style.display = 'block'
}, true);
buttonThree.addEventListener('click', (e) => {
    e.preventDefault();

    stepThree[0].children[1].style.display = 'none';
    document.querySelector('.submit').style.display = 'inline';
});

stepClicker.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('step1-heading')) {
            stepTwo[0].children[1].style.display = 'none';
            stepThree[0].children[1].style.display = 'none';
            stepOne[0].children[1].style.display = 'flex';
        } else if (e.classList.contains('step2-heading')) {
            stepOne[0].children[1].style.display = 'none';
            stepThree[0].children[1].style.display = 'none';
            stepTwo[0].children[1].style.display = 'flex';
        } else if (e.classList.contains('step3-heading')) {
            stepOne[0].children[1].style.display = 'none';
            stepThree[0].children[1].style.display = 'flex';
            stepTwo[0].children[1].style.display = 'none';
        }
    })
})