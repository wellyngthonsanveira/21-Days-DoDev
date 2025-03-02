let Hungry = prompt("Are you hungry");
let Money = prompt("Do you have money");
let OpenRestaurant = prompt("is the restaurant open?");

if (Hungry == "yes" && Money == "no") {
  document.write("Dinner will be at home today!");
} else if (Hungry == "yes" && Money == "yes" && OpenRestaurant == "no") {
  document.write("Order a Delivery");
} else if (Hungry == "yes" && Money == "yes" && OpenRestaurant == "yes") {
  document.write("Today dinner will be at your favorite restaurant");
}
