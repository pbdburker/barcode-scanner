// Remove the checkItem function from the button click, as it will be triggered on input change
// Also, move the fetchItems function outside the checkItem function to avoid unnecessary repeated fetches

// Use Fetch API to load JSON file
function fetchItems() {
    return fetch('items.json')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error loading items:', error));
}

// Main function to check the scanned item
async function checkItem() {
    // Get the scanned barcode from the input field
    var barcode = document.getElementById('barcode-input').value;

    // Fetch the list of items from the JSON file
    var itemList = await fetchItems();

    // Check if the scanned barcode is in the list
    var foundItem = itemList.find(item => item.barcode === barcode);

    if (foundItem) {
        document.getElementById('result').innerText = 'Yes, the item is in the list.';
    } else {
        document.getElementById('result').innerText = 'No, the item is not in the list.';
    }
}

// Trigger fetchItems on page load (optional)
document.addEventListener('DOMContentLoaded', function () {
    fetchItems();
});

// Optional: If you want to automatically focus on the barcode input field on page load
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('barcode-input').focus();
});
