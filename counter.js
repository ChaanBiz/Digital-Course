
let dayBox = document.getElementById("day"),
hrBox = document.getElementById("hour"),
minBox = document.getElementById("minute"),
secBox = document.getElementById("second"),
lh2 = document.getElementById("label_h2"),
lspan = document.getElementById("label_span"),
note = document.getElementById("claim_note"),
dh2 = document.getElementById("discount_h2"),
directions = document.getElementById("directions")

let endDate = new Date(2023, 10, 11, 0, 0)
let endTime = endDate

function countdown() {
  let todayDate = new Date()
  let todayTime = todayDate.getTime()

  let remainingTime = endTime - todayTime

  let oneMin = 60 * 1000
  let oneHr = 60 * oneMin
  let oneDay = 24 * oneHr

  let addZeroes = (num) => (num < 10 ? `0${num}` : num)

  if (endTime < todayDate) {
    clearInterval(i)
  } else {
    let dys = Math.floor(remainingTime / oneDay)
    let hrs = Math.floor((remainingTime % oneDay) / oneHr)
    let mins = Math.floor((remainingTime % oneHr) / oneMin)
    let secs = Math.floor((remainingTime % oneMin) / 1000)

    dayBox.textContent = addZeroes(dys)
    hrBox.textContent = addZeroes(hrs)
    minBox.textContent = addZeroes(mins)
    secBox.textContent = addZeroes(secs)
  }
}

let i = setInterval(countdown, 1000)
countdown()