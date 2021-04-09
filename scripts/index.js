const settingTheDOM = () => {

    const btnRules = document.getElementById("btnRules");
    const btnContact = document.getElementById("btnContact");

    btnRules.addEventListener("click", () => window.location = "./rules.html");
    btnContact.addEventListener("click", () => window.location = "./contact.html");

}; //settingTheDOM()


settingTheDOM();