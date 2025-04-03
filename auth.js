// auth.js
function checkAuth() {
    const authKey = localStorage.getItem('authKey');
    if (!authKey || authKey !== 'md2025') {
        window.location.href = '../index.html';
    }
}
/*
<script>
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const authKey = document.getElementById('authKey').value;
    if (username === 'Yeaman' && password === '2025' && authKey === 'md2025') {
        localStorage.setItem('authKey', authKey); // Store the key
        window.location.href = 'main.html';
    } else {
        alert('Incorrect credentials or key.');
    }
});
</script>
*/