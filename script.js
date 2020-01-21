let getInputValue = () => {
    let thing = document.querySelector("#thing").value;
    let place = document.querySelector("#place").value;
    return [thing, place];
};

let writeText = (textArray) => `I can purchase ${textArray[0]} at ${textArray[1]}`;

let renderText = (text) => {
    let listContainer = document.querySelector(".list-container");
    let item = document.createElement("div");
    item.textContent = text;
    listContainer.appendChild(item);
};

let clearTextBox = () => {
    // let textInput = document.getElementByName("favoriteForm");
    document.forms.favoriteForm.reset();
};

let wishButton = document.querySelector("#saveItem");

wishButton.addEventListener("click", (e) => {

    let thing = document.getElementById("thing");
    let place = document.getElementById("place");

    if (!(/\S/.test(thing.value)) || !(/\S/.test(place.value))) {
        // clearTextBox();
        alert("Please enter in all information")
        e.preventDefault();
    } else if ((thing.value !== "") || (place.value !== "")) {
        let textArray = getInputValue();
        let domText = writeText(textArray);
        renderText(domText);
        clearTextBox();
        thing.focus();
        e.preventDefault();
    }
});



