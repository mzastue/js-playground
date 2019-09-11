var makeNoise = () => console.log('prrrt');

const dragon = {
  noise: 'arrrrggh',

  makeNoise() {
    console.log(this.noise);
  }
}

const handleClick = function(...args) {
  this.makeNoise();
  console.log(...args);
}
document.getElementById('bind').addEventListener('click', handleClick.call(dragon, [1, 2, 3]));


