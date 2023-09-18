document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.toggle-button');
    const sidebar = document.querySelector('.sidebar');
    const toggleIcon = document.getElementById('toggle-icon'); 

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        toggleButton.classList.toggle('active'); 

        if (sidebar.classList.contains('active')) {
            toggleIcon.classList.remove('fa-bars'); 
            toggleIcon.classList.add('fa-times');  
        } else {
            toggleIcon.classList.remove('fa-times'); 
            toggleIcon.classList.add('fa-bars');     
        }
    });
});
