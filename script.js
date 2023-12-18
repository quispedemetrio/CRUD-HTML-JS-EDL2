let currentId = 1;

function addOrUpdateComputer() {
    var id = document.getElementById('computerId').value;
    if (id) {
        updateComputer(id);
    } else {
        addComputer();
    }
    clearForm();
}

function addComputer() {
    var product = document.getElementById('product').value;
    var brand = document.getElementById('brand').value;
    var price = document.getElementById('price').value;

    var computerTableBody = document.getElementById('computerTableBody');
    var row = computerTableBody.insertRow();

    var id = currentId++;
    row.setAttribute('data-id', id); // Asignar el id como atributo data-id

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = product;
    row.insertCell(2).innerHTML = brand;
    row.insertCell(3).innerHTML = `S/ ${price}`;

    var editButton = createButton("Editar", "btn-primary", function() {
        editComputer(id);
    });

    var deleteButton = createButton("Eliminar", "btn-danger", function() {
        removeComputer(id);
    });

    row.insertCell(4).appendChild(editButton);
    row.insertCell(4).appendChild(deleteButton);
}

function createButton(text, className, onclick) {
    var button = document.createElement("button");
    button.className = "btn " + className + " btn-sm";
    button.textContent = text;
    button.onclick = onclick;
    return button;
}

function editComputer(id) {
    var row = document.querySelector(`#computerTableBody tr[data-id="${id}"]`);
    var product = row.cells[1].innerHTML;
    var brand = row.cells[2].innerHTML;
    var price = row.cells[3].innerHTML.replace('S/ ', '');

    document.getElementById('computerId').value = id;
    document.getElementById('product').value = product;
    document.getElementById('brand').value = brand;
    document.getElementById('price').value = price;

    document.getElementById('addOrUpdateButton').textContent = 'Actualizar';
}

function updateComputer(id) {
    var row = document.querySelector(`#computerTableBody tr[data-id="${id}"]`);
    var product = document.getElementById('product').value;
    var brand = document.getElementById('brand').value;
    var price = document.getElementById('price').value;

    row.cells[1].innerHTML = product;
    row.cells[2].innerHTML = brand;
    row.cells[3].innerHTML = `S/ ${price}`;

    document.getElementById('addOrUpdateButton').textContent = 'Agregar';
}

function removeComputer(id) {
    var row = document.querySelector(`#computerTableBody tr[data-id="${id}"]`);
    row.parentNode.removeChild(row);

    clearForm();
}

function clearForm() {
    document.getElementById('computerId').value = '';
    document.getElementById('product').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('price').value = '';
    document.getElementById('addOrUpdateButton').textContent = 'Agregar';
}
