let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let horario = document.getElementById("horario");

let myForm = document.getElementById("my-form");
let userList = document.getElementById("users");

myForm.addEventListener("submit", clicar);

function clicar(e) {
    e.preventDefault();
    let itemLi = document.createElement("li");

    itemLi.appendChild(

        document.createTextNode(
            `${nameInput.value} : ${emailInput.value} : ${horario.value}`
        )
    );

    userList.appendChild(itemLi);
}