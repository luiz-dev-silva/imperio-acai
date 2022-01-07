//CLASSE NAVBAR PRO MENU MOBILE
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log("hello mano fred"));
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
 
}

//ATRIBUTOS USADO NA CLASS NAVBAR
 const mobileNavbar = new MobileNavbar(
     ".mobile-menu",
     ".nav-list",
     ".nav-list li"
 );
 mobileNavbar.init();
