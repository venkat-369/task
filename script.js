function searchProduct() {
    let query = document.getElementById("searchBox").value;
    if(query) {
        alert("Searching for: " + query);
    } else {
        alert("Please enter a product name!");
    }
}

