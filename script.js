const button = document.querySelector('.submit-button');

class Cat {
    constructor(petName, yourName, email, phone) {
        this.petName = petName;
        this.yourName = yourName;
        this.email = email;
        this.phone = phone;
    }
}

function classCreate(event) {
    let petName = document.querySelector('#petName').value;
    let yourName = document.querySelector('#yourName').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let newCat = new Cat(petName, yourName, email, phone);
    console.log(newCat);
    event.preventDefault();
}

button.addEventListener('click', classCreate);



