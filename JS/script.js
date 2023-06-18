/*Ocultar y mostrar*/


const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const sidebarAjustes = document.getElementById('ajustes');

openButton.addEventListener('click', () => {
    sidebarAjustes.style.right = '0';
    sidebarAjustes.style.zIndex = '10';
    sidebarAjustes.style.opacity = '1';
});

closeButton.addEventListener('click', () => {
    sidebarAjustes.style.right = '-300px';
    sidebarAjustes.style.zIndex = '-1';
    sidebarAjustes.style.opacity = '0';
});
