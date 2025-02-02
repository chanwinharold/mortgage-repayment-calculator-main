
changeBgColorOnFocus(enterAmount, amountSpan)
changeBgColorOnFocus(enterTerm, termSpan)
changeBgColorOnFocus(enterRate, rateSpan)
changeRadioColorOnFocus()

btnCalculate.addEventListener("click", (event) => {
    event.preventDefault()
    let radioValue = null;

    // Récupération des Tags HTML
    let enterAmount = document.getElementById("amount");
    let enterTerm = document.getElementById("term");
    let enterRate = document.getElementById("rate");
    document.querySelectorAll("input[type='radio']").forEach((typeSelected) => { if(typeSelected.checked)
        radioValue = typeSelected.id })
    let amountError = document.querySelector(".calculator__left-zone__form__amount .error")
    let termError = document.querySelector(".calculator__left-zone__form__parameter__term .error")
    let rateError = document.querySelector(".calculator__left-zone__form__parameter__rate .error")

    let amountIsGood = verifyError(enterAmount.value, amountError, enterAmount, amountSpan)
    let termIsGood = verifyError(enterTerm.value, termError, enterTerm, termSpan)
    let rateIsGood = verifyError(enterRate.value, rateError, enterRate, rateSpan)
    let radioIsGood = verifyIfRadioIsChecked(radioSpan)

    if (amountIsGood && termIsGood && rateIsGood && radioIsGood) {
        displayResults()
        let amountValue = parseFloat(enterAmount.value)
        let termValue = parseFloat(enterTerm.value)
        let rateValue = parseFloat(enterRate.value)
        let answer = 0
        let total = 0

        if(radioValue === "interest")
            answer = calculateWithInterestOnly(amountValue, rateValue)
        else
            answer = calculateRepayment(amountValue, rateValue, termValue)
        total = answer * 12 * termValue
        displayAnswer(monthlyRepayment, answer.toFixed(2))
        displayAnswer(totalRepayment, total.toFixed(2))
    } else
        displayEmpty()
})

document.querySelector(".calculator__left-zone__header button").addEventListener("click", (event) => {
    event.preventDefault()
    cleanAll()
})

