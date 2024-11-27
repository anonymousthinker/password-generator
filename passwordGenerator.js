const BOX_SIZE = 32;
const SPACE_SIZE = 45;
const LENGTH = 20;
const BAR = '▐';

function generateRandom(to, from) {
  return from + Math.floor((Math.random() * (to - from)));
}

function delay() {
  for (let i = 0; i < 400000000; i++) { };
}

function animate() {
  let times = 16;
  let index = 1;
  while (times > 0) {
    console.clear();
    console.log(printLoading(index));
    delay();
    index += 1;
    times -= 1;
    index = index > 4 ? 1 : index;
  }
}

function createTopBorder() {
  let string = '┏';

  for (let index = 0; index < LENGTH; index++) {
    string += '━';
  }

  return string + '┓';
}

function createBody(length, symbol) {
  let string = '┃';

  for (let index = 0; index < LENGTH; index++) {
    string += index < length ? symbol : ' ';
  }

  return string + '┃';
}

function createBottomBorder() {
  let string = '┗';

  for (let index = 0; index < LENGTH; index++) {
    string += '━';
  }

  return string + '┛';
}

function createLoading(length) {
  const topBorder = createTopBorder();
  const bottomBorder = createBottomBorder();
  const middlePart = createBody(length, BAR);

  return topBorder + '\n' + middlePart + '\n' + bottomBorder;
}
 
function printLoading(number) {
  switch (number) {
    case 1:
      return createLoading(2);
    case 2:
      return createLoading(8);
    case 3:
      return createLoading(14);
    case 4:
      return createLoading(20);
  }
}

function createBoxBottom() {
  let boxBottom = '';
  boxBottom += '┗';

  for (let index = 0; index < BOX_SIZE; index++) {
    boxBottom += '━';
  }

  return boxBottom + '┛';
}

function generatePassword(length) {
  let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '123456789';
  let generatedPassword = '';

  for (let index = 0; index < length; index++) {
    if (index === numbers.length) {
      numbers += numbers;
    }

    if (index === char.length) {
      char += char;
    }

    generatedPassword += generateRandom(0, 2) === 0 ? char[index] : numbers[index];
  }

  return generatedPassword;
}

function createContentBoxBody() {
  while (confirm('\nWant to generate a password?')) {
    const length = +prompt('\nPassword of how many digits: ');

    const generatedPassword = generatePassword(length);

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
  let spaceBeforeAndNext = '\n';

  for (let index = 0; index < SPACE_SIZE; index++) {
    spaceBeforeAndNext += ' ';
  }

  const boxHead = createBoxHead();
  const boxTitle = '┃       PASSWORD GENERATOR       ┃';
  const boxBottom = createBoxBottom();

  return (spaceBeforeAndNext + boxHead) + (spaceBeforeAndNext + boxTitle)
  + (spaceBeforeAndNext + boxBottom);
}

function main() {
  console.log(createHeading());
  createContentBoxBody();
}

main();
