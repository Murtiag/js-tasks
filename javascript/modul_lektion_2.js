const unterricht = () => {
  let num = parseInt("12");

  // Array Methods
  const brands = ["Mercedes", "BMW", "Audi", "Mazda", "Mitsubishi", "Maserati"];
  console.log(brands.find((brand) => brand.startsWith("M")));
  console.log(brands.filter((brand) => brand.startsWith("M")));
  console.log(brands.map((brand) => brand.toUpperCase()));
  console.log(brands.slice(1, 3));
  console.log(brands.join(", "));

  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(numbers.reduce((acc, number) => acc + number, 0));
};

const aufgabe1_1 = () => {
  // Objekte in Literalschreibweise
  const hotelA = {
    name: "true",
    roomAmount: 45,
    bookedRooms: 12,
    getFreeRooms() {
      return parseInt(this.roomAmount) - parseInt(this.bookedRooms);
    },
  };

  const hotelB = {
    name: "Park",
    roomAmount: 77,
    bookedRooms: 13,
    getFreeRooms() {
      return parseInt(this.roomAmount) - parseInt(this.bookedRooms);
    },
  };

  const printDetails = (hotel) => {
    console.log(
      `Name des Hotels: ${hotel.name} Anzahl Zimmer: ${
        hotel.roomAmount
      } Gebuchte Zimmer: ${
        hotel.bookedRooms
      } Freie Zimmer: ${hotel.getFreeRooms()}`
    );
  };

  printDetails(hotelA);
  printDetails(hotelB);
};

const aufgabe1_2 = () => {
  // Prototype mit Konstruktorsyntax
  function Hotel(name, roomAmount, bookedRooms) {
    this.name = name;
    this.roomAmount = roomAmount;
    this.bookedRooms = bookedRooms;

    this.getFreeRooms = () =>
      parseInt(this.roomAmount) - parseInt(this.bookedRooms);

    this.printDetails = () =>
      console.log(
        `Name des Hotels: ${this.name} Anzahl Zimmer: ${
          this.roomAmount
        } Gebuchte Zimmer: ${
          this.bookedRooms
        } Freie Zimmer: ${this.getFreeRooms()}`
      );
  }

  const hotelA = new Hotel("Park", 10, 3);

  hotelA.printDetails();
};
const aufgabe1_3 = () => {
  // Klassensyntax
  class Hotel {
    constructor(name, roomAmount, bookedRooms) {
      this.name = name;
      this.roomAmount = roomAmount;
      this.bookedRooms = bookedRooms;
    }

    getFreeRooms = () => parseInt(this.roomAmount) - parseInt(this.bookedRooms);

    printDetails = () =>
      console.log(
        `Name des Hotels: ${this.name} Anzahl Zimmer: ${
          this.roomAmount
        } Gebuchte Zimmer: ${
          this.bookedRooms
        } Freie Zimmer: ${this.getFreeRooms()}`
      );
  }
  const hotelA = new Hotel("Park", 10, 3);

  hotelA.printDetails();
};
const aufgabe1_4 = () => {
  // Klassensyntax
  class Hotel {
    constructor(name, roomAmount, bookedRooms) {
      this.name = name;
      this.roomAmount = roomAmount;
      this.bookedRooms = bookedRooms;
    }

    getFreeRooms = () => parseInt(this.roomAmount) - parseInt(this.bookedRooms);

    printDetails = () =>
      console.log(
        `Name des Hotels: ${this.name} Anzahl Zimmer: ${
          this.roomAmount
        } Gebuchte Zimmer: ${
          this.bookedRooms
        } Freie Zimmer: ${this.getFreeRooms()}`
      );
  }

  class Hotelchain {
    constructor() {
      this.hotels = [];
    }

    addHotel(hotel) {
      this.hotels.push(hotel);
    }

    printHotels() {
      this.hotels.forEach((hotel) => hotel.printDetails());
    }
  }

  const chains = new Hotelchain();
  chains.addHotel(new Hotel("Park", 10, 2));
  chains.addHotel(new Hotel("Quay", 7, 1));

  chains.printHotels();
};

const aufgabe2_1 = () => {
  const outerWidth = window.outerWidth;
  const outerHeight = window.outerHeight;

  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  // whole browsertab container
  console.log("outer H/W:", outerHeight, outerWidth);

  // visible part, container - devtools
  console.log("inner H/W:", innerHeight, innerWidth);
};

const aufgabe2_2 = () => {
  const maxWidth = window.screen.width;
  const maxHeight = window.screen.height;

  const availWidth = window.screen.availWidth;
  const availHeight = window.screen.availHeight;

  const colorDepth = window.screen.colorDepth;
  const maxColors = Math.pow(2, colorDepth);

  console.log("Screen H/W:", maxHeight, maxWidth);
  console.log("Avaiable H/W;", availHeight, availWidth);
  console.log("Depth: " + colorDepth + "-bit, Possible Colors: ", maxColors);
};

const aufgabe2_3 = () => {
  const obj = {
    hosts: [
      {
        hostname: location.hostname,
        port: location.port,
        protocol: location.protocol,
        path: location.pathname,
      },
    ],
  };

  const printHost = () => {
    const host = obj.hosts[0];

    console.log("host: ", host.hostname);
    console.log("port: ", host.port);
    console.log("protocol: ", host.protocol);
    console.log("path: ", host.path);
  };

  printHost();
};

const aufgabe2_4 = () => {
  const printNumbers = (from, to) => {
    let counter = from;
    setTimeout(() => {
      const timerId = setInterval(() => {
        if (counter <= to) {
          console.log(counter);
          counter += 1;
        } else {
          clearInterval(timerId);
        }
      }, 1000);
    }, 4000);
  };

  printNumbers(1, 10);
};

const aufgabe2_5 = () => {
  setInterval(() => {
    const el = document.getElementById("timer");

    el.innerText = new Date().toLocaleTimeString();
  }, 1000);
};

aufgabe2_5();
