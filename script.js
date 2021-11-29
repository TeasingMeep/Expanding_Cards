const panels = document.querySelectorAll('.panel');
const circle = document.querySelector('.outer-circle');

circle.addEventListener('click', () => {
    circle.style.transform = 'rotate(45deg)';

});

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();

        panel.classList.add('active');
    });
});

function removeRotator() {
    circle.classList.remove('rotator');
}
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
