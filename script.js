document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".gradient-container");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var opacity = 1 - scrollPosition / 500; // Adjust the divisor to control the speed of the change

        container.style.background = `linear-gradient(to right, rgba(255, 126, 95, ${opacity}), rgba(254, 180, 123, ${opacity}))`;
    });
});
