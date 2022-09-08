const body = document.querySelector("body");
const navbar = document.querySelector(".nav");
const icon = document.querySelector(".nav-right > button > #nav-icon");
const faqButton = document.querySelectorAll(".item > .top");
const faqText = document.querySelectorAll(".bottom");
const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-bar");

window.addEventListener("scroll", () =>{
    this.scrollY > 10 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
})

hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active");

    if(menuList.classList.contains("active")){
        hamburger.classList.add("active")
    }else{
        hamburger.classList.remove("active")
    }
})

icon.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.classList = "bx bxs-sun";
    }else{
        icon.classList = "bx bxs-moon"; 
    }
});

for (let i = 0; i < faqButton.length; i++) {
	faqButton[i].addEventListener("click", () => {
		faqButton[i].classList.toggle("active");
        faqText[i].classList.toggle("active-bottom");
	});
}