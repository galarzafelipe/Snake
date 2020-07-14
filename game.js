import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood, totalCount } from "./food.js"
import { outsideGrid } from "./grid.js"
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
	if (gameOver) {
		if (confirm("You Lost. Press OK to restart. \n\n Your score is " + totalCount + "\n\n The current highscore is held by Felipe Galarza with a score of 1000." )) {
			window.location = '/'
		}
	return 
	}
	window.requestAnimationFrame(main)

	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
	
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
	
	console.log("It's Linked")
	lastRenderTime = currentTime

	update()
	draw()
}

window.requestAnimationFrame(main)


function update() {
	updateSnake()
	updateFood()
	checkDeath()

}

function draw() {
	gameBoard.innerHTML = ''
	drawSnake(gameBoard) 
	drawFood(gameBoard)

}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}