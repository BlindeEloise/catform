const button = document.querySelector('.submit-button');

class Cat {
    constructor(petName, yourName, email, phone, breed, sexType, food, comment, photo) {
        this.petName = petName;
        this.yourName = yourName;
        this.email = email;
        this.phone = phone;
        this.breed = breed;
        this.sexType = sexType;
        this.food = food;
        this.comment = comment;
        this.photo = photo;
    }
}

function classCreate(event) {
    let petName = document.querySelector('#petName').value;
    let yourName = document.querySelector('#yourName').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let breed = document.querySelector('.breed').value;

    let sex = document.querySelectorAll('.sex-type');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sexType = sex[i].value;
            break;
        }
    }

    let food = [];
    let dryFood = document.querySelector('#dry-food');
    if (dryFood.checked) {
        food.push('dry food');
    };
    let wetFood = document.querySelector('#wet-food');
    if (wetFood.checked) {
        food.push('wet food');
    };
    let naturalFood = document.querySelector('#natural-food');
    if (naturalFood.checked) {
        food.push('natural food');
    };

    let comment = document.querySelector('.comment-block').value;
    let photo = document.querySelector('.file-button').value;

    let newCat = new Cat(petName, yourName, email, phone, breed, sexType, food, comment, photo);
    console.log(newCat);
    event.preventDefault();
}

button.addEventListener('click', classCreate);



