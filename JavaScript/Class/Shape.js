class Shape {
    name;
    sides;
    sideLength;

    constructor(myName, sides, sideLength) {
        this.myName = myName;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        return this.sides * this.sideLength;
    }
}

new Shape("Triangle", 3, 5);

Shape.calcPerimeter();