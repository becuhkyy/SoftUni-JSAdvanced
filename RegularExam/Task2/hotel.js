class Hotel {
  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {};
  }

  restockSupplies(supplies) {
    let returnMessage = "";

    for (const supply of supplies) {
      const [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(" ");

      if (Number(supplyTotalPrice) > this.initialBudget) {
        returnMessage += `There was not enough money to restock ${supplyQuantity} ${supplyName}\n`;
        continue;
      }

      if (this.supplyStock[supplyName] === undefined) {
        this.supplyStock[supplyName] = 0;
      }

      this.supplyStock[supplyName] += Number(supplyQuantity);
      this.initialBudget -= Number(supplyTotalPrice);

      returnMessage += `Successfully stocked ${supplyQuantity} ${supplyName}\n`;
    }

    return returnMessage.trim();
  }

  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (this.roomAvailability[roomType] !== undefined) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    }

    this.roomAvailability[roomType] = {
      neededSupplies,
      pricePerNight,
    };

    return `Great idea! Now with the ${roomType}, we have ${
      Object.keys(this.roomAvailability).length
    } types of rooms available, any other ideas?`;
  }

  showAvailableRooms() {
    const rooms = Object.entries(this.roomAvailability);

    if (rooms.length === 0) {
      return "Our rooms are not ready yet, please come back later...";
    }

    return rooms
      .map(([roomType, details]) => `${roomType} - $ ${details.pricePerNight}`)
      .join("\n");
  }

  bookRoom(roomType) {
    const room = this.roomAvailability[roomType];

    if (room === undefined) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }

    for (const supply of room.neededSupplies) {
      const [supplyName, supplyQuantity] = supply.split(" ");

      if (
        this.supplyStock[supplyName] === undefined ||
        this.supplyStock[supplyName] < supplyQuantity
      ) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
      }
    }

    return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`;
  }
}

let hotel = new Hotel(500);

console.log(
  hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"])
);

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));
