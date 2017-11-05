
function toggleDropdown (event) {

    var dropdownMenu = document.getElementById("dropdown-menu__content");

    if (dropdownMenu.classList.contains("show-dropdown")){
        dropdownMenu.classList.remove("show-dropdown");
    }
    else {
        dropdownMenu.classList.add("show-dropdown");
        event.stopPropagation();
    }
}

function closeDropdown (event) {

    var dropdownMenu = document.getElementById("dropdown-menu__content");

        dropdownMenu.classList.remove("show-dropdown");
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