const inputBox = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")
const lengthVal = document.getElementById("length-val")
const volumeVal = document.getElementById("volume-val")
const massVal = document.getElementById("mass-val")

convertBtn.addEventListener("click", function () {
    const input = inputBox.value
    if (!input) return
    lengthConversion (input)
    volumeConversion (input)
    massConversion (input)
})

convertBtn.addEventListener("dblclick", function() {
    inputBox.value = ""
    lengthVal.textContent = ""
    volumeVal.textContent = ""
    massVal.textContent = ""
})

function lengthConversion (input) {
    const meterVal = input * 3.28084
    const feetVal =  input / 3.281084
    const lenArr = [meterVal, feetVal]
    lengthVal.textContent = `${input} meters = ${lenArr[0].toFixed(3)} feet | ${input} feet = ${lenArr[1].toFixed(3)} meters`
}

function volumeConversion (input) {
    const literVal = input * 0.2641729
    const gallonVal =  input / 0.2641729
    const volArr = [literVal, gallonVal]
    volumeVal.textContent = `${input} liters = ${volArr[0].toFixed(3)} gallons | ${input} gallons = ${volArr[1].toFixed(3)} liters`
}

function massConversion (input) {
    const kiloVal = input * 2.204623
    const poundVal =  input / 2.204623
    const massArr = [kiloVal, poundVal]
    massVal.textContent = `${input} kilos = ${massArr[0].toFixed(3)} pounds | ${input} pounds = ${massArr[1].toFixed(3)} kilos`
}

