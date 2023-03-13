const innInput = document.getElementById('inn');
const innValiditySpan = document.getElementById('inn-validity');

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