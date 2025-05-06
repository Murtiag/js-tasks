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

aufgabe1_4();
