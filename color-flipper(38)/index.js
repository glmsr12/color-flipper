const btn = document.querySelector('.btn');
const hex_color = document.querySelector('.hex-color');

const randomColorCode = [
  '#44318D',
  '#A4B3B6',
  '#8860D0',
  '#5680E9',
  '#84CEEB',
  '#5AB9EA',
  '#C1C8E4',
  '#2E9CCA',
  '#3AAFA9',
  '#374785',
  '#24305E',
  '#65CCB8',
  '#57BA98',
  '#3B945E',
];

btn.addEventListener('click', () => {
  const random =
    randomColorCode[Math.floor(Math.random() * randomColorCode.length)];
  document.body.style.backgroundColor = random;

  hex_color.textContent = random;
});
