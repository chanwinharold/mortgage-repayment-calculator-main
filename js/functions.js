
function calculateWithInterestOnly(amount, rate) {
    return amount * (rate / 1200)
}

function calculateRepayment(amount, rate, term) {
    let a = calculateWithInterestOnly(amount, rate)
    let b = 1 - (1 / Math.pow((1 + (rate / 1200)) , (term * 12)))
    return a / b
}

function displayAnswer(zone, answer) {
    zone.innerHTML = `£ ${answer}`
}

function cleanAll() {
    document.getElementById("amount").value = "";
    document.getElementById("term").value = "";
    document.getElementById("rate").value = "";
    displayEmpty()

}

function verifyIfRadioIsChecked(zoneError) {
    let typeSelected = document.querySelectorAll("input[type='radio']")
    if(typeSelected[0].checked || typeSelected[1].checked) {
        if(zoneError.className === "error") {
            zoneError.classList.add("none")
        }
        return true
    } else {
        if(zoneError.className === "error none") {
            zoneError.classList.remove("none")
        }
        return false
    }
}

function verifyError(value, zone, input, span) {
    let regex = new RegExp("^\\S+$")
    if(regex.test(value)) {
        removeErrorMessage(zone, input, span)
        return true
    } else {
        addErrorMessage(zone, input, span)
        return false
    }
}

function addErrorMessage(zoneError, input, span) {
    if(zoneError.className === "error none") {
        zoneError.classList.remove("none")
    }
    if(input.className === "") {
        input.classList.add("inputError")
    }
    if(span.className === "") {
        span.classList.add("spanError")
    }
}

function removeErrorMessage(zoneError, input, span) {
    if(zoneError.className === "error") {
        zoneError.classList.add("none")
    }
    if(input.className === "inputError") {
        input.classList.remove("inputError")
    }
    if(span.className === "spanError") {
        span.classList.remove("spanError")
    }
}

function changeBgColorOnFocus(zoneInput, zoneSpan) {
    zoneInput.addEventListener("focus", () => {
        zoneInput.style.border = "2px solid hsl(61, 70%, 52%)"
        zoneSpan.style.backgroundColor = "hsl(61, 70%, 52%)"
    })
    zoneInput.addEventListener("blur", () => {
        zoneInput.style.border = "1px solid rgba(0, 0, 0, 0.5)"
        zoneSpan.style.backgroundColor = "hsl(203, 41%, 72%)"
    })
}

function changeRadioColorOnFocus() {
    let radioContainer = document.querySelectorAll(".radio-style");
    let enterType = document.querySelectorAll("input[type='radio']")

    enterType[0].addEventListener("click", () => {
        radioContainer[0].style.backgroundColor = "hsla(61,70%,52%,0.25)"
        radioContainer[0].style.border = "2px solid hsl(61, 70%, 52%)"
        radioContainer[1].style.backgroundColor = "white"
        radioContainer[1].style.border = "1px solid rgba(0, 0, 0, 0.5)"
    })
    enterType[1].addEventListener("click", () => {
        radioContainer[1].style.backgroundColor = "hsla(61,70%,52%,0.25)"
        radioContainer[1].style.border = "2px solid hsl(61, 70%, 52%)"
        radioContainer[0].style.backgroundColor = "white"
        radioContainer[0].style.border = "1px solid rgba(0, 0, 0, 0.5)"
    })
}

function displayResults() {
    if(sectionDisplayResults.className === "calculator__right-zone calculator__results none") {
        sectionDisplayResults.classList.remove("none")
        if(sectionDisplayEmpty.className === "calculator__right-zone calculator__empty") {
            sectionDisplayEmpty.classList.add("none")
        }
    }
}

function displayEmpty() {
    if(sectionDisplayResults.className === "calculator__right-zone calculator__results") {
        sectionDisplayResults.classList.add("none")
        if(sectionDisplayEmpty.className === "calculator__right-zone calculator__empty none") {
            sectionDisplayEmpty.classList.remove("none")
        }
    }
}