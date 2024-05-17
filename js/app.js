
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-it');

toggleBtn.addEventListener('click', () =>{
    sidebar.classList.toggle('active');
});