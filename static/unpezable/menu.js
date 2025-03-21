function toggleMenu(){
    let menuList = document.querySelector("header .menu-container .menu-list")
    let showValue = menuList.getAttribute("show")
    
    menuList.setAttribute("show", showValue === "0" ? "1" : "0")
}