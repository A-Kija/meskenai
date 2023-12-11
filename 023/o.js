console.log('Say hi to Objects!');

//shortcuts
const arr = [];
const obj = {};

//longcuts
const arr2 = new Array();
const obj2 = new Object({ food: 5 });
const map = new Map();

class Racoon {

    // constructor
    constructor(racoonName, color = 'grey') {
        console.log('New racoon is born');
        this.food = 5;
        this.name = racoonName;
        this.color = color;
    }

    // eat method
    eat() {
        console.log(this.color + ' ' + this.name + ' is eating');
        this.food--;
        console.log('I have ' + this.food + ' food left');
    }

}

const racoon1 = new Racoon('Bobby', 'brown');
const racoon2 = new Racoon('Robby');


racoon1.eat();
racoon1.eat();
racoon2.eat();
racoon1.eat();


class Circle {

    static circles = [];

    constructor(place) {
        this.circleDiv = document.createElement('div');
        this.circleDiv.style.width = '100px';
        this.circleDiv.style.height = '100px';
        this.circleDiv.style.borderRadius = '50%';
        this.circleDiv.style.backgroundColor = this.randomColor();
        this.circleDiv.style.margin = '10px';
        this.circleDiv.style.display = 'inline-block';
        place.appendChild(this.circleDiv);
        this.constructor.circles.push(this);
    }

    randomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
        return '#' + randomColor;
    }

    changeColor() {
        this.circleDiv.style.backgroundColor = this.randomColor();
    }

}

const place = document.querySelector('#circles');
// 5 circles
for (let i = 0; i < 5; i++) {
    new Circle(place);
}

setInterval(() => {
    Circle.circles.forEach(circle => circle.changeColor());
}, 1000);




