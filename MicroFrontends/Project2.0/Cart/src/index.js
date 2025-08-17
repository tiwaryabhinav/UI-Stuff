import faker from 'faker';

const text = `<div>You have ${faker.random.number()} items in your cart !!!!</div>`;

document.getElementById("cart-test").innerHTML = text;