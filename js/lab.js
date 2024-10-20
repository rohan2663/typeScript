"use strict";
// TASK 1
let items = [];
// Function to add an item to the array
function addItem(id, title, status) {
    const newItem = { id, title, status };
    items.push(newItem);
    console.log(`Item added: ${JSON.stringify(newItem)}`);
}
// Function to delete an item from the array by index
function deleteItem(index) {
    if (index >= 0 && index < items.length) {
        const deletedItem = items.splice(index, 1);
        console.log(`Item deleted: ${JSON.stringify(deletedItem[0])}`);
    }
    else {
        console.error("Index not found. Please provide a valid index.");
    }
}
// Function to edit an item in the array by index
function editItem(index, newTitle) {
    if (index >= 0 && index < items.length) {
        items[index].title = newTitle;
        console.log(`Item edited: ${JSON.stringify(items[index])}`);
    }
    else {
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
