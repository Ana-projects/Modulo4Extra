
var getRoomType = () => document.getElementById("room-type").value;
var getSPA = () => document.getElementById("spa").checked;
var getRoomOccupation = () => document.getElementById("room-occupation").value;
var getRoomNights = () => parseInt(document.getElementById("hotel-nights").value);
var getParkingNights = () => parseInt(document.getElementById("parking-nights").value);

var getTotal = (roomType, SPA, roomOccupation, roomNights, parkingNights) => {
    var total;
    switch (roomType){
        case "standard": total = 100; break;
        case "junior-suite": total = 120; break;
        case "suite": total = 150; break;
    }

    if (SPA){
        total = total + 20;
    }

    if (roomOccupation === "single") {
        total = total * 0.75;
    } else if (roomOccupation === "triple") {
        total = total * 1.25;
    }

    total = total * roomNights + 20 * parkingNights;
    return total;
}


var showPrice = () => {
    var price = getTotal(getRoomType(), getSPA(), getRoomOccupation(), getRoomNights(), getParkingNights());
    document.getElementById("total-price").innerText = "Total price = " + price;
}

showPrice();
document.getElementById("room-type").addEventListener("change", showPrice);
document.getElementById("spa").addEventListener("change", showPrice);
document.getElementById("room-occupation").addEventListener("change", showPrice);
document.getElementById("hotel-nights").addEventListener("change", showPrice);
document.getElementById("parking-nights").addEventListener("change", showPrice);
