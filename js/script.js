var totalCosts = [];

function order(size, crust, meatyTopping, veggyTopping) {
  this.size = size;
  this.crust = crust;
  this.meatyTopping = meatyTopping;
  this.veggyTopping = veggyTopping;
  this.price = 0;
}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaMeatyTopping = ["Peperonni", "Sausage", "Chicken"];
var pizzaveggyTopping = ["Onion", "Pineapple", "Spinach"];

order.prototype.cost = function() {
  if (this.size === pizzaSize[0]) {
    this.price += 300;
  } else if (this.size === pizzaSize[1]) {
    this.price += 500;
  } else if (this.size === pizzaSize[2]) {
    this.price += 600;
  }

  if (this.crust === pizzaCrust[0]) {
    this.price += 100;
  } else if (this.crust === pizzaCrust[1]) {
    this.price += 130;
  } else if (this.crust === pizzaCrust[2]) {
    this.price += 150;
  }

  if (this.meatyTopping === pizzaMeatyTopping[0]) {
    this.price += 100;
  } else if (this.meatyTopping === pizzaMeatyTopping[1]) {
    this.price += 100;
  } else if (this.meatyTopping === pizzaMeatyTopping[2]) {
    this.price += 100;
  }

  if (this.veggyTopping === pizzaveggyTopping[0]) {
    this.price += 100;
  } else if (this.veggyTopping === pizzaveggyTopping[1]) {
    this.price += 100;
  } else if (this.veggyTopping === pizzaveggyTopping[2]) {
    this.price += 100;
  }

  return this.price;
};
order.prototype.totalCost = function() {
  var orderTotal = 0;
  for (var order = 0; order < totalCosts.length; order++) {
    orderTotal += totalCosts[order];
  }
  return orderTotal;
};

$(document).ready(function() {
  $("input#totalCost").click(function(event) {
    event.preventDefault();
    var sizes = $("select#size").val();
    var crusts = $("select#crust").val();
    var meatyToppings = $("select#meaty").val();
    var veggyToppings = $("select#veggy").val();

    var newPizzaOrder = new order(sizes, crusts, meatyToppings, veggyToppings);
    newPizzaOrder.cost();
    totalCosts.push(newPizzaOrder.price);

    $("#pz").text(sizes);
    $("#cr").text(crusts);
    $("#mt").text(meatyToppings);
    $("#vt").text(veggyToppings);
    $("#tc").text(newPizzaOrder.totalCost());
  });
});

$(document).ready(function() {
  $("#delivery").click(function() {
    alert("Your charges for delivery is ksh150");
    alert(
      "Thank you for Your Purchase!Your order will be delivered to your location"
    );
  });
});
