/*
    Lektion 1
*/

const aufgabe1_1 = () => {
  a = 10;
  b = "Javascript"; //string
  c = true; //boolean
  d = 2.345;
  a = b; //string
  d = c; //boolean

  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
  console.log(typeof d);
};

const aufgabe1_3 = () => {
  const fach = [
    ["Max", 3.5, 4.5, 5],
    ["Anna", 5, 5.9],
    ["Sonja", 4.2, 4.4, 4.5],
    ["Peter", 6, 5, 4.5],
  ];

  for (let outer = 0; outer < fach.length; outer++) {
    const innerArray = fach[outer];

    for (let inner = 0; inner < innerArray.length; inner++) {
      console.log(innerArray[inner]);
    }
  }
};

const aufgabe1_4 = () => {
  const fruits = ["Apfel", "Birne", "Orange", "Zitrone", "Pflaume"];
  fruits.push("Erdbeer");
  fruits.push("Himbeere");
  fruits.push("Heidelbeere");

  fruits.pop();
  fruits.pop();

  fruits.forEach((fruit) => console.log(fruit));
};

const aufgabe1_5 = () => {
  let a = 1;
  let b = 1 + "12";
  let c = "1";
  let d = "";

  console.log(a == true); // true
  console.log(a === false); // false
  console.log(b == 112); // true
  console.log(b === 112); // false
  console.log(b === "112"); // true
  console.log(c == true); //true
  console.log(c === true); // false
  console.log(d == true); //false
};

const aufgabe1_6 = () => {
  const products = [
    ["Apfel", 1.1, 244],
    ["Birne", 0.89, 103],
    ["Zitrone", 1.15, 12],
    ["Mango", 2.05, 1201],
  ];

  let sliced = products.slice(1, 3);

  for (let i = 0; i < sliced.length; i++) {
    const arr = sliced[i];
    let row = "";

    for (let j = 0; j < arr.length; j++) {
      row += " " + arr[j];
    }
    console.log(row);
  }
};

const aufgabe1_7 = () => {
  const data = ["Apfel", "Birne", "Orange", "Zitrone", "Pflaume"];
  data.shift();
  data.shift();
  data.shift();
  console.log(data.toString()); //Zitrone,Pflaume
};

const aufgabe1_8 = () => {
  const data = ["Apfel", "Birne", "Orange", "Zitrone", "Pflaume"];
  delete data[2];
  delete data[3];
  delete data[1];
  console.log(data.toString()); //Apfel,Pflaume
};

const aufgabe1_9 = () => {
  const data = ["Apfel", "Birne", "Orange", "Zitrone", "Pflaume"];
  console.log(data.join("und"));
};

const aufgabe1_10 = () => {
  const zahlenAusgeben = (start, end, ...numbers) => {};
  // hä
};

const aufgabe1_12 = () => {
  const dataLogger = (...args) => {
    if (args.length > 0) {
      args.forEach((args) => console.log(args));
    } else {
      console.log("Keine Argumente vorhanden");
    }
  };

  dataLogger(1, 2, 3);
  dataLogger();
  dataLogger(1, "222", "asdv");
};

const aufgabe1_13 = () => {
  const div = (value1, value2) => (value2 != 0 ? value1 / value2 : null);
  const add = (value1, value2) => value1 + value2;
  const multix10 = (value) => 10 * value;
};

const aufgabe1_14 = () => {
  const sum = (...numbers) =>
    numbers.reduce((acc, number) => (acc += number), 0);

  console.log(sum(1, 2, 3));
};

const aufgabe2_1 = () => {
  const data = ["Manfred", "Jochen", "Amanda", "Sybille", "Tom", "Joana"];
  data.forEach((name) => console.log(name.toUpperCase()));
};

const aufgabe2_2 = () => {
  const transformLower = (name) => name.toLowerCase();

  const data = ["Manfred", "Jochen", "Amanda", "Sybille", "Tom", "Joana"];
  const lowerData = [];
  data.forEach((name, i, arr) => lowerData.push(transformLower(name)));
  console.log(lowerData.join(","));
};

const aufgabe2_3 = () => {
  const data = ["Manfred", "Jochen", "Amanda", "Sybille", "Tom", "Joana"];

  console.log(data.map((name) => name.toUpperCase()).join(","));
};

const aufgabe2_4 = () => {
  const data = [128, 7, 45, 56, 34, 23, 89, 2, 56, 35];
  console.log(data.filter((number) => number % 2 == 0).join(","));
};

const aufgabe2_5 = () => {
  const data = [128, 7, 45, 56, 34, 23, 89, 2, 56, 35];
  console.log(
    data.reduce((acc, value) => (value % 2 == 0 ? acc + value : acc), 0)
  );
};

const aufgabe2_6 = () => {
  const average = (...numbers) =>
    numbers.reduce((acc, number) => acc + number, 0) / numbers.length;

  console.log(average(1, 2, 3, 4, 5, 6, 7));
  console.log(average(23, 45, 67, 34));
  console.log(average(12, 57));
};

const aufgabe2_7 = () => {
  const data = ["Anna", "Micha", "Johan", "Doris", "Martin", "Rolf", "Anna"];

  console.log(data.find((name) => name === "Micha"));
};

const aufgabe3_1 = () => {
  const greet = (name) => console.log(`Welcome ${name}!`);

  greet("Alexandra");
};

const aufgabe3_2 = () => {
  const sum = (numbers) => numbers.reduce((acc, number) => acc + number, 0);

  console.log(sum([1, 2, 3, 4]));
};

const aufgabe3_3 = () => {
  let a = 5;
  let b = 1;

  function task(b) {
    b = 6;
  }

  task(a);

  console.log(a, b); //5,1
};

const aufgabe3_4 = () => {
  let a = 5;
  let c = 1;
  function task(b) {
    c = b;
  }

  task(a);

  console.log(a, c); //5,5
};

const aufgabe3_5 = () => {
  let fruits = [
    ["Bananas", 4],
    ["Kiwis", 2],
    ["Apples", 6],
  ];

  const printRow = (arr) => {
    console.log(`There are ${arr[1]} ${arr[0]} in the fruit basket.`);
  };
  const printArray = (arr) => {
    arr.forEach((fruit) => printRow(fruit));
  };

  printArray(fruits);
};

aufgabe3_5();

/*
    Lektion 2
*/
