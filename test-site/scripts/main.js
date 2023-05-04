const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Translation-Localization.jpg") {
    myImage.setAttribute("src", "images/essentials-of-localization-1.jpg");
  } else {
    myImage.setAttribute("src", "images/Translation-Localization.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Si us plau, entra el teu nom");
    if (!myName) {
        setUserName();
      } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Transcodifica't, ${myName}`;
  }}

  
if (!localStorage.getItem("name")) {
    setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Transcodifica't, ${storedName}`;
};

myButton.onclick = () => {
    setUserName();
};  

  