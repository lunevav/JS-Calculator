const inputScreen = document.getElementById('screen');
const btnPanel = document.getElementById('btn-panel');
// TODO 3 PANELS

class Screen {
    constructor(value = 0) {
        this.value = value;
    }

    showValue(btnValue) {
        inputScreen.value = btnValue;
    }
}

class Buttons {
    constructor(value, type, cssClass) {
        this.value = value;
        this.type = type;
        this.cssClass = cssClass;
    }

    click() {
        console.info(this.value + " " + this.type);
        new Screen(this.value).showValue(this.value);
        return this.value;
    }

    drawButton() {
        let elem = document.createElement("button");
        elem.className = this.cssClass;
        elem.innerHTML = this.value;
        // arrow functions SHO TAKE?
        elem.onclick = () => this.click();
        return elem;
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
    new Buttons(6, "digit", "btn")
]

var runCalc = new RenderButtons();

runCalc.renderDefaultUI(arrayOfButton);