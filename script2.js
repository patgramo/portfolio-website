const myButton = document.getElementById("my-button");
const profilePic= document.getElementById("profile-pic");
const header = document.getElementById("header");
const smallNav = document.getElementById("small-nav");
const links = document.getElementsByTagName("a");
const logo = document.getElementById("logo");
const myNav = document.getElementById("nav");
const icons= document.getElementsByClassName("icon");
const highlight = document.getElementById("highlight");
const h4s = document.getElementsByClassName("h4");
const h2s= document.getElementsByClassName("h2");
const skills= document.getElementsByClassName("skill");
const allSkills = document.getElementById("all-skills");
const cards= document.getElementsByClassName("project-card");
const cardBodies= document.getElementsByClassName("project-card-body");
const inputs= document.getElementsByClassName("form-input");
const contactButton = document.getElementById("contact-submit");

toggleMenu = () => {
        if (smallNav.classList.contains("hide")) {
            smallNav.classList.remove("hide")
            smallNav.classList.add("show")
            myButton.innerHTML= "<i class='fa-solid fa-x'></i>"
           } else if (smallNav.classList.contains("show")) {
            smallNav.classList.remove("show")
            smallNav.classList.add("hide")
            myButton.innerHTML= "<i class='fa-sharp fa-solid fa-bars text-light'></i>"
           }
}
clickLink = () => {
    if (smallNav.classList.contains("show")) {
        smallNav.classList.remove("show")
        smallNav.classList.add("hide")
        myButton.innerHTML= "<i class='fa-sharp fa-solid fa-bars text-light'></i>"
    }
}

colorChange1 = () => {
    document.getElementById("home").classList.remove("home-container");
    document.getElementById("home").classList.add("hide-all");
    document.getElementById("main-page").classList.remove("hide-all");

    profilePic.src="images/theme-1-outline.jpg";

    document.body.classList.add("website-background-1");

    header.classList.add("header-background-1");

    myButton.classList.add("hamburger-1");

    smallNav.classList.add("small-nav-1");
    
    for (const link of links) {
        link.classList.add("a-1");
    };

    logo.classList.add("mylogo-1");

    myNav.classList.add("mynav-1");

    for (const icon of icons) {
        icon.classList.add("icon-1");
    };

    highlight.classList.add("highlighter-1");

    for (const h4 of h4s) {
        h4.classList.add("h4-1");
    };

    for (const h2 of h2s) {
        h2.classList.add("h2-1");
    };

    for (const skill of skills) {
        skill.classList.add("skill-1");
    };

    allSkills.classList.add("skill-section-1");

    for (const card of cards) {
        card.classList.add("project-card-1");
    };

    for (const cardBody of cardBodies) {
        cardBody.classList.add("project-card-body-1");
    };
    
    for (const input of inputs) {
        input.classList.add("form-input-1");
    };

    contactButton.classList.add("contact-button-1");
}

removeColorChange1 = () => {

    document.body.classList.remove("website-background-1");

    header.classList.remove("header-background-1");

    myButton.classList.remove("hamburger-1");

    smallNav.classList.remove("small-nav-1");
    
    for (const link of links) {
        link.classList.remove("a-1");
    };

    logo.classList.remove("mylogo-1");

    myNav.classList.remove("mynav-1");

    for (const icon of icons) {
        icon.classList.remove("icon-1");
    };

    highlight.classList.remove("highlighter-1");

    for (const h4 of h4s) {
        h4.classList.remove("h4-1");
    };

    for (const h2 of h2s) {
        h2.classList.remove("h2-1");
    };

    for (const skill of skills) {
        skill.classList.remove("skill-1");
    };

    allSkills.classList.remove("skill-section-1");

    for (const card of cards) {
        card.classList.remove("project-card-1");
    };

    for (const cardBody of cardBodies) {
        cardBody.classList.remove("project-card-body-1");
    };
    
    for (const input of inputs) {
        input.classList.remove("form-input-1");
    };

    contactButton.classList.remove("contact-button-1");
}

colorChange2 = () => {
    document.getElementById("home").classList.remove("home-container");
    document.getElementById("home").classList.add("hide-all");
    document.getElementById("main-page").classList.remove("hide-all");

    profilePic.src="images/theme-2-outline.jpg";

    document.body.classList.add("website-background-2");

    header.classList.add("header-background-2");

    myButton.classList.add("hamburger-2");

    smallNav.classList.add("small-nav-2");
    
    for (const link of links) {
        link.classList.add("a-2");
    };
    
    logo.classList.add("mylogo-2");

    myNav.classList.add("mynav-2");

    for (const icon of icons) {
        icon.classList.add("icon-2");
    };

    highlight.classList.add("highlighter-2");
    
    for (const h4 of h4s) {
        h4.classList.add("h4-2");
    };

    for (const h2 of h2s) {
        h2.classList.add("h2-2");
    };
    
    for (const skill of skills) {
        skill.classList.add("skill-2");
    }
    
    allSkills.classList.add("skill-section-2");

    for (const card of cards) {
        card.classList.add("project-card-2");
    };

    for (const cardBody of cardBodies) {
        cardBody.classList.add("project-card-body-2");
    };
    
    for(const input of inputs) {
        input.classList.add("form-input-2");
    };

    contactButton.classList.add("contact-button-2");
}

removeColorChange2 = () => {

    document.body.classList.remove("website-background-2");

    header.classList.remove("header-background-2");

    myButton.classList.remove("hamburger-2");

    smallNav.classList.remove("small-nav-2");
    
    for (const link of links) {
        link.classList.remove("a-2");
    };
    
    logo.classList.remove("mylogo-2");

    myNav.classList.remove("mynav-2");

    for (const icon of icons) {
        icon.classList.remove("icon-2");
    };

    highlight.classList.remove("highlighter-2");
    
    for (const h4 of h4s) {
        h4.classList.remove("h4-2");
    };

    for (const h2 of h2s) {
        h2.classList.remove("h2-2");
    };
    
    for (const skill of skills) {
        skill.classList.remove("skill-2");
    }
    
    allSkills.classList.remove("skill-section-2");

    for (const card of cards) {
        card.classList.remove("project-card-2");
    };

    for (const cardBody of cardBodies) {
        cardBody.classList.remove("project-card-body-2");
    };
    
    for(const input of inputs) {
        input.classList.remove("form-input-2");
    };

    contactButton.classList.remove("contact-button-2");
}

colorChange3 = () => {
    document.getElementById("home").classList.remove("home-container");
    document.getElementById("home").classList.add("hide-all");
    document.getElementById("main-page").classList.remove("hide-all");

    profilePic.src="images/theme-3-outline.jpg";

    document.body.classList.add("website-background-3");

    header.classList.add("header-background-3");

    myButton.classList.add("hamburger-3");

    smallNav.classList.add("small-nav-3");
    
    for (const link of links) {
        link.classList.add("a-3");
    };

    logo.classList.add("mylogo-3");

    myNav.classList.add("mynav-3");

    for (const icon of icons) {
        icon.classList.add("icon-3");
    };

    highlight.classList.add("highlighter-3");
    
    for (const h4 of h4s) {
        h4.classList.add("h4-3");
    };

    for (const h2 of h2s) {
        h2.classList.add("h2-3");
    };

    for (const skill of skills) {
        skill.classList.add("skill-3");
    };
    
    allSkills.classList.add("skill-section-3");

    for (const card of cards) {
        card.classList.add("project-card-3");
    };

    for (const cardBody of cardBodies) {
        cardBody.classList.add("project-card-body-3");
    };

    for(const input of inputs) {
        input.classList.add("form-input-3");
    };

    contactButton.classList.add("contact-button-3");
}

removeColorChange3 = () => {

    document.body.classList.remove("website-background-3");

    header.classList.remove("header-background-3");

    myButton.classList.remove("hamburger-3");

    smallNav.classList.remove("small-nav-3");
    
    for (const link of links) {
        link.classList.remove("a-3");
    };

    logo.classList.remove("mylogo-3");

    myNav.classList.remove("mynav-3");

    for (const icon of icons) {
        icon.classList.remove("icon-3");
    };

    highlight.classList.remove("highlighter-3");
    
    for (const h4 of h4s) {
        h4.classList.remove("h4-3");
    };

    for (const h2 of h2s) {
        h2.classList.remove("h2-3");
    };

    for (const skill of skills) {
        skill.classList.remove("skill-3");
    };
    
    allSkills.classList.remove("skill-section-3");

    for (const card of cards) {
        card.classList.remove("project-card-3");
    };

    for (const cardBody of cardBodies) {
        cardBody.classList.remove("project-card-body-3");
    };

    for(const input of inputs) {
        input.classList.remove("form-input-3");
    };

    contactButton.classList.remove("contact-button-3");
}

colorChange4 = () => {
    document.getElementById("home").classList.remove("home-container");
    document.getElementById("home").classList.add("hide-all");
    document.getElementById("main-page").classList.remove("hide-all");

    profilePic.src="images/theme-4-outline.jpg";

    document.body.classList.add("website-background-4");

    header.classList.add("header-background-4");

    myButton.classList.add("hamburger-4");

    smallNav.classList.add("small-nav-4");
    
    for (const link of links) {
        link.classList.add("a-4");
    };

    logo.classList.add("mylogo-4");

    myNav.classList.add("mynav-4");

    for (const icon of icons) {
        icon.classList.add("icon-4");
    };

    highlight.classList.add("highlighter-4");
    
    for (const h4 of h4s) {
        h4.classList.add("h4-4");
    };

    for (const h2 of h2s) {
        h2.classList.add("h2-4");
    };

    for (const skill of skills) {
        skill.classList.add("skill-4");
    };
    
    allSkills.classList.add("skill-section-4");

    for (const card of cards) {
        card.classList.add("project-card-4");
    };

    for (const cardBody of cardBodies) {
        cardBody.classList.add("project-card-body-4");
    };

    for(const input of inputs) {
        input.classList.add("form-input-4");
    };

    contactButton.classList.add("contact-button-4");
}

removeColorChange4 = () => {

    document.body.classList.remove("website-background-4");

    header.classList.remove("header-background-4");

    myButton.classList.remove("hamburger-4");

    smallNav.classList.remove("small-nav-4");
    
    for (const link of links) {
        link.classList.remove("a-4");
    };

    logo.classList.remove("mylogo-4");

    myNav.classList.remove("mynav-4");

    for (const icon of icons) {
        icon.classList.remove("icon-4");
    };

    highlight.classList.remove("highlighter-4");
    
    for (const h4 of h4s) {
        h4.classList.remove("h4-4");
    };

    for (const h2 of h2s) {
        h2.classList.remove("h2-4");
    };

    for (const skill of skills) {
        skill.classList.remove("skill-4");
    };
    
    allSkills.classList.remove("skill-section-4");

    for (const card of cards) {
        card.classList.remove("project-card-4");
    };

    for (const cardBody of cardBodies) {
        cardBody.classList.remove("project-card-body-4");
    };

    for(const input of inputs) {
        input.classList.remove("form-input-4");
    };

    contactButton.classList.remove("contact-button-4");
}

homepage = () => {
    document.getElementById("main-page").classList.remove("show-all");
    document.getElementById("main-page").classList.add("hide-all");
    document.getElementById("home").classList.add("home-container");
    document.getElementById("home").classList.remove("hide-all");
}