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

const aufgabe1_2 = () => {};

unterricht();
