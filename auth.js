// auth.js
function checkAuth() {
    const authKey = localStorage.getItem('authKey');

    if (!authKey || authKey !== 'md2025') {
        window.location.href = 'index.html';
    }
}