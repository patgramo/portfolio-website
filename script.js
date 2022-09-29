const icon = document.getElementById("my-button")

toggleMenu = () => {
    const smallNav = document.getElementById("small-nav");
        if (smallNav.classList.contains("hide")) {
            smallNav.classList.remove("hide")
            smallNav.classList.add("show")
            icon.innerHTML= "<i class='fa-solid fa-x'></i>"
           } else if (smallNav.classList.contains("show")) {
            smallNav.classList.remove("show")
            smallNav.classList.add("hide")
            icon.innerHTML= "<i class='fa-sharp fa-solid fa-bars text-light'></i>"
           }
}
clickLink = () => {
    const smallNav = document.getElementById("small-nav");
    if (smallNav.classList.contains("show")) {
        smallNav.classList.remove("show")
        smallNav.classList.add("hide")
        icon.innerHTML= "<i class='fa-sharp fa-solid fa-bars text-light'></i>"
    }
}

