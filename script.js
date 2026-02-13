const board = document.querySelector('#board')
const color_arr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'] 
const SQUARES_NUMBER = 500

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)
    board.append(square)
}
function setColor(enent){
    const element = event.target
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}
function removeColor(enent){
    const element = event.target
    element.style.background = '#555555'
    element.style.boxShadow = `0 0 2px #000` 
}
function getRandomColor(){
    const index = Math.floor(Math.random() * color_arr.length)
    return color_arr[index]
}