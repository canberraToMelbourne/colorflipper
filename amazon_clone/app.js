const search = () =>{
    const searchbox = document.getElementById("search-box").Value.toUpperCase();
    const storeitems = document.getElementById("product-list"); 
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h1");

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h1')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "none";
            }else{
                product[i].style.display ="none";
            }
        }
    }
}


///////////////////
const searchInput = document.getElementById("searchInput");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("name");

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();
        
        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.style.display = "block";
        } else {
            // no match, don't display name
            nameElement.style.display = "none";
        }
    }
});