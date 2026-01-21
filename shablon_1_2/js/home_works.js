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

    if (!parent || !child) {
        console.error('Blocks not found')
        return
    }

    let position = 0

    const moveBlock = () => {
        if (position <= parent.clientWidth - child.clientWidth) {
            child.style.left = position + 'px'
            position++
            requestAnimationFrame(moveBlock) // рекурсия
        }
    }

    moveBlock()
})