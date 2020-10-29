function changepos(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.75s ease-in-out 0s"
    elem.style.transform = 'translateY(calc(-75vh + 100px))';
}

function changeposback(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.75s ease-in-out 0s"
    elem.style.transform = 'translateY(0px)';
}

function changeangle(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.1s ease-in-out 0s"
    elem.style.transform = 'rotateZ(45deg)';
}

function changeangleback(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.1s ease-in-out 0s"
    elem.style.transform = 'rotateZ(0)';
}

function changeloc(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.25s ease-in-out 0s"
    elem.style.top = '31px';
}

function changelocback(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.25s ease-in-out 1s"
    elem.style.top = '27px';
}

function changeangletwo(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.1s ease-in-out 0s"
    elem.style.transform = 'rotateZ(-45deg)';
}

function changeangletwoback(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.1s ease-in-out 0s"
    elem.style.transform = 'rotateZ(0)';
}


function changeloctwo(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.25s ease-in-out 0s"
    elem.style.top = '31px';
}

function changeloctwoback(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.25s ease-in-out 1s"
    elem.style.top = '35px';
}

function changevisiblity(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "visibility 0.25s ease-in-out 0s"
    elem.style.visibility = 'hidden';
}

function changevisiblitytwo(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "visibility 0.25s ease-in-out 0s"
    elem.style.visibility = 'visible';
}

function bringitondown(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "top 0.55s ease-in-out 0s"
    elem.style.top = '70px';
}

function bringitonup(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "top 0.55s ease-in-out 0s"
    elem.style.top = 'calc(-100vh + 70px)';
}

function transformopen(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.75s ease-in-out 0s"
    elem.style.transform = 'rotateZ(900deg)';
}

function transformopenback(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "transform 0.75s ease-in-out 0s"
    elem.style.transform = 'rotateZ(0deg)';
}

function opacityup(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "opacity 0.5s ease-in 0.25s"
    elem.style.opacity = '100%';
}

function opacitydown(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "opacity 0.5s ease-in 0s"
    elem.style.opacity = '0%';
}

function greyedout(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "color 0s ease-in 0s"
    elem.style.color = 'grey';
}

function greyedin(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "color 0s ease-in 0s"
    elem.style.color = 'black';
}

// to auto play //

var vid = document.getElementById("myVideo");

function playVid() {
    vid.play();
}

// lazy //

document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy, video.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});