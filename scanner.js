// Use Fetch API to load JSON file
function fetchItems() {
    return fetch('items.json')
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Error loading items:', error);
            throw error; // Rethrow the error for better handling
});

        });
}

// Main function to check the scanned item
async function checkItem() {
    try {
        // Fetch the list of items only if it hasn't been fetched before
        if (!checkItem.itemList) {
            checkItem.itemList = await fetchItems();
        }

        // Get the scanned barcode from the input field
        var barcode = document.getElementById('barcode-input').value;

        // Check if the scanned barcode is in the list
        var foundItem = checkItem.itemList.find(item => item.barcode === barcode);

        if (foundItem) {
            document.getElementById('result').innerText = 'Yes, the item is in the list.';
        } else {
            document.getElementById('result').innerText = 'No, the item is not in the list.';
        }
    } catch (error) {
        // Handle errors, e.g., display an error message on the page
        document.getElementById('result').innerText = 'Error checking item. Please try again.';
    }
}

// Trigger fetchItems on page load
document.addEventListener('DOMContentLoaded', function () {
    fetchItems();
    // Optional: If you want to automatically focus on the barcode input field on page load
    document.getElementById('barcode-input').focus();
});
