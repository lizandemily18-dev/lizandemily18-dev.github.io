// 1. Menú desplegable: Alternar visible/oculto
function toggleDropdown() {
    const menu = document.getElementById('dropdown-menu');
    
    // Si está oculto (none), lo muestra (block). Si está visible, lo oculta.
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


// 3. Cierre de seguridad: Si haces clic fuera, se cierra
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdown = document.getElementById('dropdown-menu');
        if (dropdown && dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
};