// JavaScript to toggle the menu

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.navigation');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtn2 = document.querySelector('.menu-btn-2');
    const navElements = document.querySelectorAll('.nav-link');

    // when nav element is clicked hide menu box
    navElements.forEach(navLink => {
        navLink.addEventListener("click", function () {
            menu.classList.toggle('active');
            menuBtn2.classList.add('hidden'); // Hide close button
            menuBtn.classList.remove('hidden'); // Show menu button
        })
    });

    // Menu open button click
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.classList.add('hidden'); // Hide menu button
        menuBtn2.classList.remove('hidden'); // Show close button
    });

    // Menu close button click
    menuBtn2.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn2.classList.add('hidden'); // Hide close button
        menuBtn.classList.remove('hidden'); // Show menu button
    });
});

// js logic for package boxes

document.querySelectorAll('.details-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        let contentWrap = this.closest('.package-content-wrap');
        let packageBox = contentWrap.querySelector('.package-box');
        let packageDetails = contentWrap.querySelector('.package-details');

        packageBox.classList.toggle('hidden');
        packageDetails.classList.toggle('hidden');
    });
});