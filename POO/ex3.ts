//////// POLYMORPHISME ////////////

// Créer une classe Forme avec une Methode aire() et implémenter Cercle et Rectangle

class Forme {
    x : number;
    y : number;

    constructor (x: number, y: number) {
        this.x = x;
        this .y = y;
    }

    aire() : void {
        console.log("aire")
    }
}

class Cercle extends Forme {
    constructor(x: number, y: number) {
        super (x, y);
    }

    aire(): void {
        console.log(3,14*this.x*2);
    }
}

class Rectangle extends Forme {
    constructor(x: number, y: number) {
        super(x,y);
    }

    aire(): void {
        console.log(2*this.x+2*this.y);
    }
}