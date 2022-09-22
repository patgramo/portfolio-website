function toggleMenu() {
    const smallNav = document.getElementById("small-nav");
        if (smallNav.classList.contains("hide")) {
            smallNav.classList.remove("hide")
            smallNav.classList.add("show")
           } else if (smallNav.classList.contains("show")) {
            smallNav.classList.remove("show")
            smallNav.classList.add("hide")
           }
}

function clickLink() {
    const smallNav = document.getElementById("small-nav");
    if (smallNav.classList.contains("show")) {
        smallNav.classList.remove("show")
        smallNav.classList.add("hide")
    }
}