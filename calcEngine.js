const inputScreen = document.getElementById('screen');
const btnPanel = document.getElementById('btn-panel');
// TODO 3 PANELS

class Screen {
    constructor(value = 0) {
        this.value = value;
    }

    getValue() {
        return inputScreen.value ;
    }

    setValue(value) {
        inputScreen.value = value;
    }

    showValue(btnValue) {

        if (inputScreen.value.length > 18) 
            return;   
        
        inputScreen.value += btnValue;
        this.value += btnValue.toString();

        // HOMEWORK
        if (inputScreen.value.length > 16) {
            inputScreen.style.fontSize = "28px"
        } else {
            inputScreen.style.fontSize = "32px"
        }     
    }
}

const MAIN_SCREEN = new Screen();

class Buttons {
    constructor(value, type, cssClass) {
        this.value = value;
        this.type = type;
        this.cssClass = cssClass;
    }

    click() {
        

        if (this.type === "digit")
            MAIN_SCREEN.showValue(this.value);

        if (this.type === "operator") {
            new CalcBrain().pendingOperands(
                MAIN_SCREEN.getValue(),
                null,
                this.value
                );

            MAIN_SCREEN.setValue(0);

            let firstLocalOperand = MAIN_SCREEN.getValue();
            // new CalcBrain(firstLocalOperand,)

        } 

       
    }

    drawButton() {
        let elem = document.createElement("button");
        elem.className = this.cssClass;
        elem.innerHTML = this.value;
        // arrow functions SHO TAKE?
        elem.onclick = this.click.bind(this);
        return elem;
     }
}

class CalcBrain {
    constructor(firstOperand = null, secondOperand = null, operator = null, step = false, result) {
        this.firstOperand = firstOperand;
        this.secondOperand = secondOperand;
        this.operator = operator;
        this.step = step;
        this.result = result;
    }

    pendingOperands(f, s, o) {

        if (!this.firstOperand && !this.step) {
            this.firstOperand = f;
            this.operator = o;
            this.step = true;
            return;
        }

        if (!this.secondOperand && this.step) {
            this.secondOperand = s;
            this.step = false;

            this.makeCalc(
                this.firstOperand,
                this.secondOperand,
                this.operator
                )

            this.firstOperand = null
            this.secondOperand = null;
            this.operator = null;
        }   

    }
        }


        
        return this.result;
    }
}

class RenderButtons {
    renderDefaultUI(ab) {
        for (let i = 0; i < ab.length; i++) {
            btnPanel.appendChild(ab[i].drawButton());
        }
    }
}

const arrayOfButton = [
    new Buttons(0, "digit", "btn"),
    new Buttons(1, "digit", "btn"),
    new Buttons(2, "digit", "btn"),
    new Buttons(3, "digit", "btn"),
    new Buttons(4, "digit", "btn"),
    new Buttons(5, "digit", "btn"),
    new Buttons(6, "digit", "btn"),
    new Buttons("+", "operator", "btn"),
    new Buttons("-", "operator", "btn"),
    new Buttons("*", "operator", "btn"),
    new Buttons("/", "operator", "btn")
]

var runCalc = new RenderButtons();

runCalc.renderDefaultUI(arrayOfButton);

// class
// constructor
// Math.floor
// Math.random
// value
// innerHTML
// createElement div input 

// document.getElementById('game').apeendCHild()




// class Computer AI

// class UserUI

// class GAME_BRAIN

// class renderUI




length // return string length
toArray // STRING > ARRAY
MY_JOIN(); Array > String
MASALC(); // to lowerCase
MASAUP(); 

// [22, 44 , 66]  [4, 8, 343543]
// NADO DVA counberA counterB
// LENGTH
// ONE SORTED ARRAY []
















