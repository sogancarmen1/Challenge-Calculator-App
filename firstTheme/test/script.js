QUnit.test("le chiffre 0 doit s'ajouter", assert => {
    onclickZeroKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0');
});

QUnit.test("Le chiffre 1 doit s'ajouter", assert => {
    onclickOneKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '01');
});

QUnit.test("Le chiffre 2 doit s'ajouter", assert => {
    onclickTwoKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '012');
});

QUnit.test("Le chiffre 3 doit s'ajouter", assert => {
    onclickThreeKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0123');
});

QUnit.test("Le chiffre 4 doit s'ajouter", assert => {
    onclickFourKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '01234');
});

QUnit.test("Le chiffre 5 doit s'ajouter", assert => {
    onclickFiveKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '012345');
});

QUnit.test("Le chiffre 6 doit s'ajouter", assert => {
    onclickSixKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0123456');
});

QUnit.test("Le chiffre 7 doit s'ajouter", assert => {
    onclickSevenKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '01234567');
});

QUnit.test("Le chiffre 8 doit s'ajouter", assert => {
    onclickEightKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '012345678');
});

QUnit.test("Le chiffre 9 doit s'ajouter", assert => {
    onclickNineKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0123456789');
});

QUnit.test("Le caractère - doit s'ajouter", assert => {
    onclickMinusKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0123456789-');
});

QUnit.test("Le caractère + doit s'ajouter", assert => {
    onclickPlusKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0123456789-+');
});

QUnit.test("Le caractère . doit s'ajouter", assert => {
    onclickPointKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0123456789-+.');
});

QUnit.test("Le caractère / doit s'ajouter", assert => {
    onclickDivisionKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0123456789-+./');
});

QUnit.test("Le caractère * doit s'ajouter", assert => {
    onclickMultiplicationKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0123456789-+./*');
});

QUnit.test("l'écran ne contient uniquement que le chiffre 0", assert => {
    onclickResetKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0');
});

QUnit.test("la somme des chiffres entrées par l'utilisateur", assert => {
    onclickOneKey();
    onclickPlusKey();
    onclickTwoKey();
    onclickEqualKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, 3);
});

QUnit.test("remettre l'écran à 0 s'il s'agit d'un seul chiffre ou autre", assert => {
    onclickResetKey();
    onclickEightKey();
    onclickDelKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0');
});

QUnit.test("maintenir l'ecran a 0 meme s'il y avait 0", assert => {
    onclickResetKey();
    onclickDelKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '0');
});

QUnit.test("effacé les chiffres ou autre au fur et à mesure qu'on appuie del", assert => {
    onclickResetKey();
    onclickSevenKey();
    onclickFourKey();
    onclickPlusKey();
    onclickDelKey();
    onclickDelKey();
    let screenCalculator = document.getElementById('screen').innerHTML;
    assert.equal(screenCalculator, '07');
});