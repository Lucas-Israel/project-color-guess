const bolasColoridas = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const adivinhe = document.querySelector('#rgb-color');
const reset = document.querySelector('#reset-game');
const score = document.querySelector('#score');

function corNaBox(corN) {
  const corX = corN;
  const n = Math.round(Math.random() * 256);
  const m = Math.round(Math.random() * 256);
  const o = Math.round(Math.random() * 256);
  corX.style.backgroundColor = `rgb(${n}, ${m}, ${o})`;
  return corX;
}

function colorindo() {
  for (let index = 0; index < bolasColoridas.length; index += 1) {
    bolasColoridas[index].style.backgroundColor = corNaBox(bolasColoridas[index]);
  }
}
colorindo();

// function rngIndex() {
//   const n = Math.round(Math.random() * 5);
//   return n;
// }

// bolasColoridas[rngIndex()].id = 'correto'
adivinhe.innerHTML = `${bolasColoridas[0].style.backgroundColor}`;

// if (bolasColoridas[rngIndex()].id === 'correto') {
//   adivinhe.innerHTML = `${bolasColoridas[0].style.backgroundColor}`;
// }

let scooby = 0;
function shashisha() {
  scooby += 3;
  score.innerHTML = scooby;
}

for (let index = 0; index < bolasColoridas.length; index += 1) {
  bolasColoridas[index].addEventListener('click', () => {
    if (bolasColoridas[index].id === 'correto') {
      answer.innerHTML = 'Acertou!';
      shashisha();
    } else if (bolasColoridas[index].id === 'incorreta') {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}

reset.addEventListener('click', () => {
  colorindo();
  adivinhe.innerHTML = `${bolasColoridas[0].style.backgroundColor}`;
  answer.innerHTML = 'Escolha uma cor';
});
