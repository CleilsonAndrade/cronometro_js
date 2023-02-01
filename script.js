let seconds = 0
let minutes = 0
let hours = 0
let interval

function start() {
  watch()
  interval = setInterval(watch, 1000)
}

function pause() {
  clearInterval(interval)
}

function stop() {
  clearInterval(interval)
  seconds = 0
  minutes = 0
  hours = 0
  document.getElementById('watch').innerText = "00:00:00"
}

function twoDigits(digit) {
  if (digit < 10) {
    return ('0' + digit)
  }
}

function watch() {
  seconds++

  if (seconds == 60) {
    minutes++
    seconds = 0
    if (min == 60) {
      min = 0
      hours++
    }
  }

  document.getElementById('watch').innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`
}