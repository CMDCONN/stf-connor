function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");

    var navElement = document.getElementById("nav");
    navElement.classList.toggle("dark-mode");
}