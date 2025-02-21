const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.jpg"){
        myImage.setAttribute("src", "images/firefox-icon-2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("please enter your name."); //prompt 提示
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName); //storage 存储
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
if(!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = function() {
    setUserName();
};