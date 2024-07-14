const menu = document.querySelector('.menu');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));

let cloneMenuItems = () => {
    menuItems.forEach(item => {
        let clone = item.cloneNode(true);
        menu.appendChild(clone);
    });
};

cloneMenuItems();
