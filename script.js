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

    document.getElementById("profile-pic").src="images/theme-1-outline.jpg";

    document.body.classList.add("website-background-1");

    document.getElementById("header").classList.add("header-background-1");

    document.getElementById("my-button").classList.add("hamburger-1");

    document.getElementById("small-nav").classList.add("small-nav-1");
    
    const links = document.getElementsByTagName("a");
    for (const link of links) {
        link.classList.add("a-1");
    }

    document.getElementById("logo").classList.add("mylogo-1");

    document.getElementById("nav").classList.add("mynav-1");

    const icons= document.getElementsByClassName("icon");
    for (const icon of icons) {
        icon.classList.add("icon-1");
    }

    document.getElementById("highlight").classList.add("highlighter-1");

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

    document.getElementById("all-skills").classList.add("skill-section-1");

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

    document.getElementById("profile-pic").src="images/theme-2-outline.jpg";

    document.body.classList.add("website-background-2");

    document.getElementById("header").classList.add("header-background-2");

    document.getElementById("my-button").classList.add("hamburger-2");

    document.getElementById("small-nav").classList.add("small-nav-2");
    
    const links = document.getElementsByTagName("a");
    for (const link of links) {
        link.classList.add("a-2");
    }
    
    document.getElementById("logo").classList.add("mylogo-2");

    document.getElementById("nav").classList.add("mynav-2");

    const icons= document.getElementsByClassName("icon");
    for (const icon of icons) {
        icon.classList.add("icon-2");
    }

    document.getElementById("highlight").classList.add("highlighter-2");
    
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

colorChange3 = () => {
    document.getElementById("home").classList.remove("home-container");
    document.getElementById("home").classList.add("hide-all");
    document.getElementById("main-page").classList.remove("hide-all");

    document.getElementById("profile-pic").src="images/theme-3-outline.jpg";

    document.body.classList.add("website-background-3");

    document.getElementById("header").classList.add("header-background-3");

    document.getElementById("my-button").classList.add("hamburger-3");

    document.getElementById("small-nav").classList.add("small-nav-3");
    
    const links = document.getElementsByTagName("a");
    for (const link of links) {
        link.classList.add("a-3");
    }

    document.getElementById("logo").classList.add("mylogo-3");

    document.getElementById("nav").classList.add("mynav-3");

    const icons= document.getElementsByClassName("icon");
    for (const icon of icons) {
        icon.classList.add("icon-3");
    }

    document.getElementById("highlight").classList.add("highlighter-3");
    
    const h4s = document.getElementsByClassName("h4");
    for (const h4 of h4s) {
        h4.classList.add("h4-3");
    }

    const h2s= document.getElementsByClassName("h2");
    for (const h2 of h2s) {
        h2.classList.add("h2-3");
    }
    
    document.getElementById("all-skills").classList.add("skill-section-3");

    const skills= document.getElementsByClassName("skill");
    for (const skill of skills) {
        skill.classList.add("skill-3");
    }

    const cards= document.getElementsByClassName("project-card");
    for (const card of cards) {
        card.classList.add("project-card-3");
    }

    const cardBodies= document.getElementsByClassName("project-card-body");
    for (const cardBody of cardBodies) {
        cardBody.classList.add("project-card-body-3");
    }
    
    const inputs= document.getElementsByClassName("form-input");
    for(const input of inputs) {
        input.classList.add("form-input-3");
    }

    document.getElementById("contact-submit").classList.add("contact-button-3");
}

colorChange4 = () => {
    document.getElementById("home").classList.remove("home-container");
    document.getElementById("home").classList.add("hide-all");
    document.getElementById("main-page").classList.remove("hide-all");

    document.getElementById("profile-pic").src="images/theme-4-outline.jpg";

    document.body.classList.add("website-background-4");

    document.getElementById("header").classList.add("header-background-4");

    document.getElementById("my-button").classList.add("hamburger-4");

    document.getElementById("small-nav").classList.add("small-nav-4");
    
    const links = document.getElementsByTagName("a");
    for (const link of links) {
        link.classList.add("a-4");
    }

    document.getElementById("logo").classList.add("mylogo-4");

    document.getElementById("nav").classList.add("mynav-4");

    const icons= document.getElementsByClassName("icon");
    for (const icon of icons) {
        icon.classList.add("icon-4");
    }

    document.getElementById("highlight").classList.add("highlighter-4");
    
    const h4s = document.getElementsByClassName("h4");
    for (const h4 of h4s) {
        h4.classList.add("h4-4");
    }

    const h2s= document.getElementsByClassName("h2");
    for (const h2 of h2s) {
        h2.classList.add("h2-4");
    }
    
    document.getElementById("all-skills").classList.add("skill-section-4");

    const skills= document.getElementsByClassName("skill");
    for (const skill of skills) {
        skill.classList.add("skill-4");
    }

    const cards= document.getElementsByClassName("project-card");
    for (const card of cards) {
        card.classList.add("project-card-4");
    }

    const cardBodies= document.getElementsByClassName("project-card-body");
    for (const cardBody of cardBodies) {
        cardBody.classList.add("project-card-body-4");
    }
    
    const inputs= document.getElementsByClassName("form-input");
    for(const input of inputs) {
        input.classList.add("form-input-4");
    }

    document.getElementById("contact-submit").classList.add("contact-button-4");
}