// Récupération des Tags HTML
let enterAmount = document.getElementById("amount");
let enterTerm = document.getElementById("term");
let enterRate = document.getElementById("rate");

let amountSpan = document.querySelector(".calculator__left-zone__form__amount__input span")
let termSpan = document.querySelector(".calculator__left-zone__form__parameter__term__input span")
let rateSpan = document.querySelector(".calculator__left-zone__form__parameter__rate__input span")
let radioSpan = document.querySelector(".calculator__left-zone__form__type span")

let btnCalculate = document.getElementById("calculate");

let monthlyRepayment = document.querySelector(".calculator__results__zone__display strong")
let totalRepayment = document.querySelector(".calculator__results__zone__total p")
let sectionDisplayResults = document.querySelector(".calculator__results")
let sectionDisplayEmpty = document.querySelector(".calculator__empty")
