/* ---- Don't change anything between here --- */

const shoppingList = ["Tomatoes", "Eggs", "Potatoes", "Ham", "Milk"];

/* --- And here --- */

// Loop through the array to print each item on new line
for (let i = 0; i < shoppingList.length; i++) {
  let li = document.createElement("li");
  let text = document.createTextNode(shoppingList[i]);
  li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
}

// if the number of items is more than 3 alert('Man, how can I carry so much?');
if (shoppingList.length > 3) {
  alert("Man, How can i carry so much");
}

// Remove the last item, Milk, and console.log it to the console
shoppingList.pop();
console.log(shoppingList);
