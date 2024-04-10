let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "https://s2.loli.net/2023/10/13/478TwrL1HyYijqW.png") {
        myImage.setAttribute("src", "images/IMG_1531E588DDDB-1.jpeg");
    } else {
        myImage.setAttribute("src", "https://s2.loli.net/2023/10/13/478TwrL1HyYijqW.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please input your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Hello!" + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello!" + storedName;
}

myButton.onclick = () => {
    setUserName();
}