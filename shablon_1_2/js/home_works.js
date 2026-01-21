alert('home works js loaded')
const emailInput = document.querySelector('#gmail_input')
const emailResult = document.querySelector('#gmail_result')

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

emailInput.addEventListener('input', () => {
    if (gmailRegExp.test(emailInput.value)) {
        emailResult.textContent = 'Valid gmail ✔'
        emailResult.style.color = 'green'
    } else {
        emailResult.textContent = 'Invalid gmail ✖'
        emailResult.style.color = 'red'
    }
})
window.addEventListener('load', () => {
    const parent = document.querySelector('.parent_block')
    const child = document.querySelector('.child_block')

    let x = 0
    let y = 0
    let direction = 'right'

    const moveBlock = () => {
        const maxX = parent.clientWidth - child.clientWidth
        const maxY = parent.clientHeight - child.clientHeight

        if (direction === 'right') {
            x++
            if (x >= maxX) direction = 'down'
        }
        else if (direction === 'down') {
            y++
            if (y >= maxY) direction = 'left'
        }
        else if (direction === 'left') {
            x--
            if (x <= 0) direction = 'up'
        }
        else if (direction === 'up') {
            y--

        }

        child.style.left = x + 'px'
        child.style.top = y + 'px'

        requestAnimationFrame(moveBlock) // рекурсия
    }

    moveBlock()
})
const seconds = document.querySelector('#seconds')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let counter = 0
let interval = null

startBtn.addEventListener('click', () => {
    if (interval !== null) return

    interval = setInterval(() => {
        counter++
        seconds.textContent = counter
    }, 1000)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = null
})

resetBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = null
    counter = 0
    seconds.textContent = counter
})