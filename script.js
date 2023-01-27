const button = document.querySelector('.submit-button');

let name = document.querySelector('#petName').value;

// let yourName = document.querySelector('#yourName').value;
// let email = document.querySelector('#email').value;
// let phone = document.querySelector('#phone').value;

class Cat {
    constructor(name) {
        this.name = name;
    }
}

function classCreate(name) {
    let newCat = new Cat(name);
    console.log(newCat);
}

button.addEventListener('click', classCreate);



