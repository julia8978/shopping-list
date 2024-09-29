const input = document.getElementById("input");
const items = document.getElementById("items");

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createItem();
    }
});

function createItem() {
    const item = input.value;

    const newItem = document.createElement('div');
    newItem.textContent = "— " + item;

    newItem.addEventListener('click', function () {
        newItem.classList.toggle('done');
    });

    if (item != '') {
        items.append(newItem);
    }

    input.value = '';
};