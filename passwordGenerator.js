const BOX_SIZE = 32;
const SPACE_SIZE = 45;
const LENGTH = 20;

function delay() {
  for (let i = 0; i < 400000000; i++) { };
}

function animate(times) {
  if (times === 0) {
    return;
  }

  console.clear();
  createLoadingOne();
  delay();
  console.clear();
  createLoadingTwo();
  delay();
  console.clear();
  createLoadingThree();
  delay();
  console.clear();
  createLoadingFour();
  delay();
  console.clear();
  createLoadingFive();
  delay();
  console.clear();

  return animate(times - 1);
}

function createTopForAll(string) {
  for (let index = 0; index < LENGTH; index++) {
    string += '━';
  }

  return string + '┓';
}

function createMiddleForAll(string, length, symbol) {
  for (let index = 0; index < length; index++) {
    string += symbol;
  }

  return string + '┃';
}

function createBottomForAll(string) {
  for (let index = 0; index < LENGTH; index++) {
    string += '━';
  }

  return string + '┛';
}

function createLoadingOne() {
  console.log('Generating.')
  const loadingOneTop = createTopForAll('┏');
  const loadingOneMiddle = createMiddleForAll('┃▐▐', LENGTH - '▐▐'.length, ' ');
  const loadingOneBottom = createBottomForAll('┗');

  console.log(loadingOneTop);
  console.log(loadingOneMiddle);
  console.log(loadingOneBottom);
}

function createLoadingTwo() {
  console.log('Generating..')
  const loadingOneTop = createTopForAll('┏');
  const loadingOneBottom = createBottomForAll('┗');
  
  let loadingBars = '';
  for (let index = 0; index < LENGTH - 15; index++) {
    loadingBars += '▐';
  }
  
  const loadingOneMiddle = createMiddleForAll('┃' + loadingBars, LENGTH - loadingBars.length, ' ');

  console.log(loadingOneTop);
  console.log(loadingOneMiddle);
  console.log(loadingOneBottom);
}

function createLoadingThree() {
  console.log('Generating...')
  const loadingOneTop = createTopForAll('┏');
  const loadingOneBottom = createBottomForAll('┗');
  
  let loadingBars = '';
  for (let index = 0; index < LENGTH - 10; index++) {
    loadingBars += '▐';
  }
  
  const loadingOneMiddle = createMiddleForAll('┃' + loadingBars, LENGTH - loadingBars.length, ' ');
  
  console.log(loadingOneTop);
  console.log(loadingOneMiddle);
  console.log(loadingOneBottom);
}

function createLoadingFour() {
  console.log('Generating.')
  const loadingOneTop = createTopForAll('┏');
  const loadingOneBottom = createBottomForAll('┗');
  
  let loadingBars = '';
  for (let index = 0; index < LENGTH - 5; index++) {
    loadingBars += '▐';
  }
  
  const loadingOneMiddle = createMiddleForAll('┃' + loadingBars, LENGTH - loadingBars.length, ' ');
  
  console.log(loadingOneTop);
  console.log(loadingOneMiddle);
  console.log(loadingOneBottom);
}

function createLoadingFive() {
  console.log('Generating...')
  const loadingOneTop = createTopForAll('┏');
  const loadingOneMiddle = createMiddleForAll('┃' , LENGTH, '▐');
  const loadingOneBottom = createBottomForAll('┗');
  
  console.log(loadingOneTop);
  console.log(loadingOneMiddle);
  console.log(loadingOneBottom);
}

function createBoxBottom() {
  let boxBottom = '';
  boxBottom += '┗';

  for (let index = 0; index < BOX_SIZE; index++) {
    boxBottom += '━';
  }

  return boxBottom + '┛';
}

function generatePassword(string) {
  let updatedPassword = '';
  
  for (let index = 0; index < string.length; index++) {
    const twoChar = +(string[index] + string[index + 1]);
    const threeChar = +(string[index] + string[index + 1] + string[index + 2]);
    const inRangeOfCaps = twoChar < 91 && twoChar > 64;
    const inRangeOfSmalls = threeChar < 123 && threeChar > 100;

    if (inRangeOfSmalls || inRangeOfCaps) {
      const inLetterCaps = String.fromCharCode(twoChar);
      const inLetterSmall = String.fromCharCode(threeChar);
      updatedPassword += inRangeOfCaps ? inLetterCaps : inLetterSmall;
      continue;
    }

    updatedPassword += string[index];
  }

  return updatedPassword;
}

function createContentBoxBody() {
  while (confirm('\nWant to generate a password?')) {
    const userInput = prompt('\nPassword of how many digits: ');
    const initialPassword = Math.floor(Math.random() * (10 ** userInput));
    const generatedPassword = generatePassword('' + initialPassword);

    animate(4);
    console.log('\nYour generated password is:\n', generatedPassword);
  }

  console.log('\nCome again when your privacy is in danger! 🔐\n');
}

function createBoxHead() {
  let boxHead = '';
  boxHead += '┏';
  for (let index = 0; index < BOX_SIZE; index++) {
    boxHead += '━';
  }

  return boxHead + '┓';
}

function createHeading() {
  let spaceBeforeAndNext = '';

  for (let index = 0; index < SPACE_SIZE; index++) {
    spaceBeforeAndNext += ' ';
  }

  const boxHead = createBoxHead();
  const boxTitle = '┃       PASSWORD GENERATOR       ┃';
  const boxBottom = createBoxBottom();

  console.log(spaceBeforeAndNext + boxHead + spaceBeforeAndNext);
  console.log(spaceBeforeAndNext + boxTitle + spaceBeforeAndNext);
  console.log(spaceBeforeAndNext + boxBottom + spaceBeforeAndNext);
}

function main() {
  createHeading();
  createContentBoxBody();
}

main();