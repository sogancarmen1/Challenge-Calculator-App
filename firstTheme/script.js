let screenCalculator = document.querySelector('#screen');

function onclickZeroKey() {
    screenCalculator.innerHTML += '0';
}

function onclickOneKey() {
    screenCalculator.innerHTML += '1';
}

function onclickTwoKey() {
    screenCalculator.innerHTML += '2';
}

function onclickThreeKey() {
    screenCalculator.innerHTML += '3';
}

function onclickFourKey() {
    screenCalculator.innerHTML += '4';
}

function onclickFiveKey() {
    screenCalculator.innerHTML += '5';
}

function onclickSixKey() {
    screenCalculator.innerHTML += '6';
}

function onclickSevenKey() {
    screenCalculator.innerHTML += '7';
}

function onclickEightKey() {
    screenCalculator.innerHTML += '8';
}

function onclickNineKey() {
    screenCalculator.innerHTML += '9';
}

function onclickMinusKey() {
    screenCalculator.innerHTML += '-';
}

function onclickPlusKey() {
    screenCalculator.innerHTML += '+';
}

function onclickPointKey() {
    screenCalculator.innerHTML += '.';
}

function onclickDivisionKey() {
    screenCalculator.innerHTML += '/';
}

function onclickMultiplicationKey() {
    screenCalculator.innerHTML += '*';
}

function onclickResetKey() {
    screenCalculator.innerHTML = '0';
}

function onclickEqualKey() {
    let textOfScreen = screenCalculator.textContent;
    screenCalculator.innerHTML = eval(textOfScreen);
}

function onclickDelKey() {
    let textOfScreen = screenCalculator.textContent;
    if (textOfScreen == '0') {
        return;
    }
    else if (textOfScreen.length == 1) {
        screenCalculator.innerHTML = '0';
        return;
    }
    screenCalculator.innerHTML = textOfScreen.replace(textOfScreen[textOfScreen.length - 1], "");
}

addEventListener("keydown", (evt) => {
    let codeKey = evt.keyCode;

    switch (codeKey) {
        case 97:
            onclickOneKey();
            break;

        case 98:
            onclickTwoKey();
            break;

        case 99:
            onclickThreeKey();
            break;

        case 100:
            onclickFourKey();
            break;

        case 101:
            onclickFiveKey();
            break;

        case 102:
            onclickSixKey();
            break;

        case 103:
            onclickSevenKey();
            break;

        case 104:
            onclickEightKey();
            break;

        case 105:
            onclickNineKey();
            break;

        case 110:
            onclickPointKey();
            break;

        case 107:
            onclickPlusKey();
            break;

        case 109:
            onclickMinusKey();
            break;

        case 106:
            onclickMultiplicationKey();
            break;

        case 111:
            onclickDivisionKey();
            break;

        case 13:
            onclickEqualKey();
            break;

        case 8:
            onclickDelKey();
            break;

        case 96:
            onclickZeroKey();
            break;

        default:
            break;
    }
});
