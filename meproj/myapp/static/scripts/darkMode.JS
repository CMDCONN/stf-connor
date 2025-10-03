function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");

    var navElement = document.getElementById("nav");
    navElement.classList.toggle("dark-mode");

    var middleBoxes0 = document.getElementsByClassName("boxes")[0];
    middleBoxes0.classList.toggle("dark-mode");
    var middleBoxes1 = document.getElementsByClassName("boxes")[1];
    middleBoxes1.classList.toggle("dark-mode");
    var middleBoxes2 = document.getElementsByClassName("boxes")[2];
    middleBoxes2.classList.toggle("dark-mode");
    var middleBoxes3 = document.getElementsByClassName("boxes")[3];
    middleBoxes3.classList.toggle("dark-mode");

    var textIndicator = document.getElementById("lightDark");
    if (textIndicator.innerHTML == "Light mode") {
        textIndicator.innerHTML = "Dark mode";
    } else {
        textIndicator.innerHTML = "Light mode";
    }
}