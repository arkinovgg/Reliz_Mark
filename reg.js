let buttonConfirm = document.getElementById('buttonConfirm');
let inpEmail = document.getElementById('inpEmail');
let inpPass = document.getElementById('inpPass');

buttonConfirm.addEventListener('click', function () {
    if (inpEmail.value !== '' && inpPass.value !== '') {
        window.location.assign('index.html');
    } else {
        alert('Заполните все поля!');
    }
});