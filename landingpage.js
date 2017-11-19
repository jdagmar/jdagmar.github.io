
function toggleDropdown (event) {

    var dropdownMenu = document.getElementById("menu__dropdown");

    if (dropdownMenu.classList.contains("menu__dropdown-container--open")){
        dropdownMenu.classList.remove("menu__dropdown-container--open");
    }
    else {
        dropdownMenu.classList.add("menu__dropdown-container--open");
        event.stopPropagation();
    }
}

function closeDropdown (event) {

    var dropdownMenu = document.getElementById("menu__dropdown");

        dropdownMenu.classList.remove("menu__dropdown-container--open");
}

window.addEventListener("click", closeDropdown)

function toggleMobileNav () {
    var hamburgerMenu = document.getElementById("hamburger__nav");

    if (hamburgerMenu.classList.contains("show-hamburger-menu")){
        hamburgerMenu.classList.remove("show-hamburger-menu")
    } else {
        hamburgerMenu.classList.add("show-hamburger-menu");
        event.stopPropagation();
    }
}

function closeMobileNav (event) {
    var hamburgerMenu = document.getElementById("hamburger__nav");

    hamburgerMenu.classList.remove("show-hamburger-menu");
}

window.addEventListener("click", closeMobileNav)