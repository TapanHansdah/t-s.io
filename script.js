document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".gradient-container");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var opacity = scrollPosition / 100; // Adjust the divisor to control the speed of the change

        container.style.background = `linear-gradient(to right, rgba(255, 255, 255, ${1 - opacity}), rgba(0, 0, 0, ${opacity}))`;
    });
});
