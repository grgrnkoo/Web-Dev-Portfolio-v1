const menuButton = document.getElementById("menu-button");
let menuOpened = false;
const windowWidth = window.innerWidth;


if (windowWidth >= 985) {
// opens Menu
const openMenu = () => {
    if (!menuOpened) {
        document.querySelector("nav").style.display = "flex";
        menuOpened = true;
     } else {
        document.querySelector("nav").style.display = "none";
        menuOpened = false;
     }; 
};

// cross/lines
const changeSign = () => {
    const topStick = document.getElementById("s1");
    const midStick = document.getElementById("s2");
    const bottomStick = document.getElementById("s3");
    
    if (menuOpened) {
        topStick.style.transform = "rotateZ(45deg) translateY(7px) scaleX(120%)";
        bottomStick.style.transform = "rotateZ(-45deg) translateY(-7px) scaleX(120%)";
        midStick.style.display = "none";
    } else {
        topStick.style.transform = "rotateZ(0) translateY(0) scaleX(100%)";
        bottomStick.style.transform = "rotateZ(0) translateY(0) scaleX(100%)";
        midStick.style.display = "flex";
    }
};

// listeners
menuButton.addEventListener('click', openMenu);
menuButton.addEventListener('click', changeSign);
};

if (windowWidth >= 1100) {

    const pinkField = document.getElementById("pink");

    const setWidth = () => {
        const headerWidth = getComputedStyle(document.querySelector("header")).width;
        pinkField.style.width = `calc(${headerWidth} + 2rem)`;
        
    };

    const arrow = document.getElementById("arrow");

    window.addEventListener("scroll", () => {
        arrow.style.display = "none";
    });

    setWidth();

    const videoChatApp = document.getElementById("chatapp");
    const videoGuard = document.getElementById("guard");
    const videoDonut = document.getElementById("donut");
    const hover1 = document.getElementById("hover1");
    const hover2 = document.getElementById("hover2");
    const hover3 = document.getElementById("hover3");

    videoChatApp.addEventListener("mouseover", () => {
        videoChatApp.play();
        hover1.style.display = "none";
    });

    videoGuard.addEventListener("mouseover", () => {
        videoGuard.play();
        hover2.style.display = "none";
    });

    videoDonut.addEventListener("mouseover", () => {
        videoDonut.play();
        hover3.style.display = "none";
    });

    videoChatApp.addEventListener("mouseout", () => {
        videoChatApp.pause();
        hover1.style.display = "flex";
    });

    videoGuard.addEventListener("mouseout", () => {
        videoGuard.pause();
        hover2.style.display = "flex";
    });

    videoDonut.addEventListener("mouseout", () => {
        videoDonut.pause();
        hover3.style.display = "flex";
    });
};
