const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradientBtn = document.getElementById('gradientBtn');
const body = document.querySelector('body');

gradientBtn.addEventListener('click', generateGradient);

function generateGradient() {
    const color1Value = color1.value;
    const color2Value = color2.value;
    body.style.background = `linear-gradient(to right, ${color1Value}, ${color2Value})`;
}
