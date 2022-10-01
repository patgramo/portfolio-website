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

colorChange1 = () => {
    document.getElementById("home").classList.remove("home-container");
    document.getElementById("home").classList.add("hide-all");
    document.getElementById("main-page").classList.remove("hide-all");

    document.body.classList.add("website-background-1");

    document.getElementById("header").classList.add("header-background-1");

    document.getElementById("my-button").classList.add("hamburger-1");

    document.getElementById("small-nav").classList.add("small-nav-1");
    
    const links = document.getElementsByTagName("a");
    for (const link of links) {
        link.classList.add("a-1");
    }

    const navLinks = document.querySelectorAll(".nav-link, .logo");
    for (const navLink of navLinks) {
        navLink.classList.add("nav-link-1");
    }

    const icons= document.getElementsByClassName("icon");
    for (const icon of icons) {
        icon.classList.add("icon-1");
    }

    const h4s = document.getElementsByClassName("h4");
    for (const h4 of h4s) {
        h4.classList.add("h4-1");
    }

    const h2s= document.getElementsByClassName("h2");
    for (const h2 of h2s) {
        h2.classList.add("h2-1");
    }

    const skills= document.getElementsByClassName("skill");
    for (const skill of skills) {
        skill.classList.add("skill-1");
    }

    const cards= document.getElementsByClassName("project-card");
    for (const card of cards) {
        card.classList.add("project-card-1");
    }

    const cardBodies= document.getElementsByClassName("project-card-body");
    for (const cardBody of cardBodies) {
        cardBody.classList.add("project-card-body-1");
    }
    
    const inputs= document.getElementsByClassName("form-input");
    for(const input of inputs) {
        input.classList.add("form-input-1");
    }

    document.getElementById("contact-submit").classList.add("contact-button-1");
}

colorChange2 = () => {
    document.getElementById("home").classList.remove("home-container");
    document.getElementById("home").classList.add("hide-all");
    document.getElementById("main-page").classList.remove("hide-all");

    document.body.classList.add("website-background-2");

    document.getElementById("header").classList.add("header-background-2");

    document.getElementById("my-button").classList.add("hamburger-2");

    document.getElementById("small-nav").classList.add("small-nav-2");
    
    const links = document.getElementsByTagName("a");
    for (const link of links) {
        link.classList.add("a-2");
    }

    const navLinks = document.querySelectorAll(".nav-link, .logo");
    for (const navLink of navLinks) {
        navLink.classList.add("nav-link-2");
    }

    const icons= document.getElementsByClassName("icon");
    for (const icon of icons) {
        icon.classList.add("icon-2");
    }

    document.getElementById("highlight").classList.add("highlighter");
    
    const h4s = document.getElementsByClassName("h4");
    for (const h4 of h4s) {
        h4.classList.add("h4-2");
    }

    const h2s= document.getElementsByClassName("h2");
    for (const h2 of h2s) {
        h2.classList.add("h2-2");
    }
    
    document.getElementById("all-skills").classList.add("skill-section-2");

    const skills= document.getElementsByClassName("skill");
    for (const skill of skills) {
        skill.classList.add("skill-2");
    }

    const cards= document.getElementsByClassName("project-card");
    for (const card of cards) {
        card.classList.add("project-card-2");
    }

    const cardBodies= document.getElementsByClassName("project-card-body");
    for (const cardBody of cardBodies) {
        cardBody.classList.add("project-card-body-2");
    }
    
    const inputs= document.getElementsByClassName("form-input");
    for(const input of inputs) {
        input.classList.add("form-input-2");
    }

    document.getElementById("contact-submit").classList.add("contact-button-2");
}