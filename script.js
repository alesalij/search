let b = document.getElementsByClassName('button-item');
let isClicked = [];

for (let i = 0; i < b.length; i++) {
  isClicked[i] = false;
};
console.log(b);
console.log(isClicked);


for (i = 0; i < b.length; i++) {
  console.log(b[i]);
  let x = b[i];

  b[i].onclick = function () {
    if (isClicked[i]) {

      b[i].classList = 'button-item';
      isClicked[i] = false;
    } else {
      console.log(b[i]);
      console.log(i);
      b[i].classList = 'clicked-item';
      isClicked[i] = true;
    };
  };
};