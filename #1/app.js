const innInput = document.querySelector('#inn');
const innValiditySpan = document.querySelector('#inn-validity');

innInput.addEventListener('input', () => {
    const inn = innInput.value;

    if (/^[12](0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2]\d{4}\d\d{3}\d)$/.test(inn)) {
        innValiditySpan.textContent = 'OK';
        innValiditySpan.style.color = 'green';
    } else {
        innValiditySpan.textContent = 'Неправильный ИНН';
        innValiditySpan.style.color = 'red';
    }
});


const smallBlock = document.querySelector("#small-block");

function moveRight(position) {
    smallBlock.style.left = `${position}px`;
    if (position === 450){
        return;
    }

    setTimeout(() => {
        moveRight(position + 1);
    }, 50);
}

moveRight(0);