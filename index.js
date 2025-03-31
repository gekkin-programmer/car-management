document.addEventListener('DOMContentLoaded', () => {
    const notifBox = document.querySelector('.notif_box');
    const loginBtn = document.getElementById('login_btn');
    const loginContainer = document.querySelector('.container');
    const fullName = document.getElementById('fullName');
    const userName = document.getElementById('userName');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const loading = document.querySelector('.loading');
    const submitBtn = document.querySelector('.button input[type="submit"]');
    const helloToUser = document.querySelector('#hello_user')
    // const inboxBtn = document.getElementById('inbox')
    const confirmMsgBox = document.querySelector('.confirmation_msg')


    loginBtn.addEventListener('click', () => {
        window.location.href = 'home.html';
    });
    
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.filter = 'blur(5px)';
        loading.style.display = 'block';
        helloToUser.innerHTML = `<h3>Hello! ${userName.value}</h3>`
        setTimeout(() => {
            loading.style.display = 'none';
            notifBox.style.display = 'block';
        }, 2000);
    });
});
