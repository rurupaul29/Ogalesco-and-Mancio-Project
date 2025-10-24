function toggleMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList.style.display === "flex") {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "flex";
    }
  }
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = menu.classList.contains('active')? '0' : '-250px';
  }
  
  function closeMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = menu.classList.contains('close')? '0' : '-250px';
  }