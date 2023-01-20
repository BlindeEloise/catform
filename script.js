// let petName = document.querySelector('#petName').value;

let name = document.querySelector('#petName').value;
// let yourName = document.querySelector('#yourName').value;
// let email = document.querySelector('#email').value;
// let phone = document.querySelector('#phone').value;

class Cat {
    constructor(name) {
        this.name = name;
    }
}

function classCreate() {
    let newCat = new Cat(this.name);
    console.log(newCat);
}
