// Toggle the .pa-fixed-header class when the user 
// scroll 100px 


var slide = document.getElementById("slide");
var right = document.getElementById("right");
var left = document.getElementById("left");

document.getElementById("img1");
document.getElementById("img2");
document.getElementById("img3");

window.onscroll = () => { scrollNavbar() };

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");
    const logoImage = document.querySelector('#logo-image');

    if (document.documentElement.scrollTop > 100) {
        navBar.classList.add("pa-fixed-header");
        logoImage.setAttribute('src', 'logo-black.png');


        // Change the color of links on scroll
        for (let i = 0; i < links.length; i++) {
            const element = links[i];
            element.classList.add('text-black');
        }

    } else {
        navBar.classList.remove("pa-fixed-header");
        logoImage.setAttribute('src', 'logo.png');

        // Change the color of links back to default
        for (let i = 0; i < links.length; i++) {
            const element = links[i];
            element.classList.remove('text-black');
        }
    }
}



let x = 0;
img1.style.transform = "scale(1.3)";
img2.style.transform = "scale(1)";
img3.style.transform = "scale(1)";
console.log(x);
right.onclick = function () {

    if (x > "-800") {
        x = x - 250;
        // x = -250
        // x = -500
        slide.style.top = x + "px";
        console.log("Forward: " + x);

        if (x == -750) {
            x = 0;
            slide.style.top = x + "px";
        }
    }

    if (x == 0) {
        img1.style.transform = "scale(1.3)";
        img2.style.transform = "scale(1)";
        img3.style.transform = "scale(1)";
        img1.style.transition = "0.4s";
        // console.log('0')
    }
    else if (x == -250) {
        img1.style.transform = "scale(1)";
        img2.style.transform = "scale(1.3)";
        img3.style.transform = "scale(1)";
        img2.style.transition = "0.4s";
        // console.log('-250')

    }
    else if (x == -500) {
        img1.style.transform = "scale(1)";
        img2.style.transform = "scale(1)";
        img3.style.transform = "scale(1.3)";
        img3.style.transition = "0.4s";
        // console.log('-500')

    }
}

left.onclick = function () {
    if (x < "300") {
        x = x + 250;
        slide.style.top = x + "px";
        console.log("Backward: " + x);

        if (x == 250) {
            x = -500;
            slide.style.top = x + "px";
        }
    }

    if (x == 0) {
        img1.style.transform = "scale(1.3)";
        img2.style.transform = "scale(1)";
        img3.style.transform = "scale(1)";
        img1.style.transition = "0.4s";
        // console.log('0')
    }
    else if (x == -250) {
        img1.style.transform = "scale(1)";
        img2.style.transform = "scale(1.3)";
        img3.style.transform = "scale(1)";
        img2.style.transition = "0.4s";
        // console.log('-250')

    }
    else if (x == -500) {
        img1.style.transform = "scale(1)";
        img2.style.transform = "scale(1)";
        img3.style.transform = "scale(1.3)";
        img3.style.transition = "0.4s";
        // console.log('-500')

    }
}





img1.onclick = function () {
    slide.style.top = 0 + "px";
    img1.style.transform = "scale(1.3)";
    img2.style.transform = "scale(1)";
    img3.style.transform = "scale(1)";
    img1.style.transition = "0.4s";     

}

img2.onclick = function () {
    slide.style.top = -250 + "px";
    img1.style.transform = "scale(1)";
    img2.style.transform = "scale(1.3)";
    img3.style.transform = "scale(1)";
    img2.style.transition = "0.4s";
}

img3.onclick = function () {
    slide.style.top = -500 + "px";
    img1.style.transform = "scale(1)";
    img2.style.transform = "scale(1)";
    img3.style.transform = "scale(1.3)";
    img3.style.transition = "0.4s";
}

