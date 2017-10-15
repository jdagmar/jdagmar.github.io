
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
