// TASK 1

// type operator = "+" | "-" | "*" | "/";

// function calculate(num1?: String | number,num2?: String | number,operator?: operator){
//   let result: number;
//   const n1 = typeof num1 === "string" ? parseFloat(num1) : num1;
//   const n2 = typeof num2 === "string" ? parseFloat(num2) : num2;

//   if (isNaN(n1 as number)){
//     console.log("num1 is invalid. Please provide valid numbers.");
//     return;
//   }

//   if (isNaN(n2 as number)) {
//     console.log("num2 is invalid. Please provide valid numbers.");
//     return;
//   }

//   switch (operator) {
//     case "+":
//       result = (n1 as number) + (n2 as number);
//       break;
//     case "-":
//       result = (n1 as number) - (n2 as number);
//       break;
//     case "*":
//       result = (n1 as number) * (n2 as number);
//       break;
//     case "/":
//       result = (n1 as number) / (n2 as number);
//       break;
//     default:
//       console.log("Invalid operator. Please provide a correct operator.");
//       return;
//   }

//   console.log(`${num1} ${operator} ${num2} = ${result}`);
// }

// calculate(1, 2, "+");
// calculate(2, 1, "-");
// calculate(2, 1, "*");
// calculate(2, 2, "/");
// calculate(2, 2,);
// calculate("a", 2, "+");
// calculate(2, "b", "+");



// TASK 2

interface Item {
    id: number;
    title: string;
    status: string;
}

let items: Item[] = [];

// Function to add an item to the array
function addItem(id: number, title: string, status: string): void {
    const newItem: Item = { id, title, status };
    items.push(newItem);
    console.log(`Item added: ${JSON.stringify(newItem)}`);
}

// Function to delete an item from the array by index
function deleteItem(index: number): void {
    if (index >= 0 && index < items.length) {
        const deletedItem = items.splice(index, 1);
        console.log(`Item deleted: ${JSON.stringify(deletedItem[0])}`);
    } else {
        console.error("Index not found. Please provide a valid index.");
    }
}

// Function to edit an item in the array by index
function editItem(index: number, newTitle: string): void {
    if (index >= 0 && index < items.length) {
        items[index].title = newTitle;
        console.log(`Item edited: ${JSON.stringify(items[index])}`);
    } else {
        console.error("Index not found. Please provide a valid index.");
    }
}

// Example usage
addItem(1, "Item 1", "active");
addItem(2, "Item 2", "inactive");
console.log("Initial items:", items);

deleteItem(1);
console.log("Items after deletion:", items);

editItem(0, "Updated Item 1");
console.log("Items after editing:", items);

deleteItem(5); // This will trigger the index not found error
editItem(5, "Non-existent Item"); // This will trigger the index not found error