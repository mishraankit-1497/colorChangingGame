var numSquares =6;
var colors=generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1= document.querySelector("h1");
var reset=document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var pickedColor = pickColor();


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors = generateRandomColors(numSquares);
	pickedColor =pickColor();
	colorDisplay.textContent =pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor =colors[i];
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none"
		}
	}
	

});


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor =pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display ="block"
		
	}
})

colorDisplay.textContent =pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add inital colors
	squares[i].style.backgroundColor = colors[i];
	
	//add click event to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedcolor
		if(clickedColor === pickedColor){
			// alert('Correct');
			messageDisplay.textContent = "Correct!";
			reset.textContent ="Play Again?"
			//Make all squares as the same color
			changeColors(clickedColor);
			h1.style.backgroundColor =clickedColor;
		}
		else{
			//alert('Wrong');
			this.style.backgroundColor ="#232323";
			messageDisplay.textContent = "Try Again!";
		}
	})
}






function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	
	//loop num times
	for (var i = 0; i < num; i++) {	
	//select random color and push into array
	arr.push(randomColor());
	}

	//return arr
	return arr;

}

function randomColor(){
	//for red
	var r =Math.floor(Math.random() * 256);
	//for green
	var g =Math.floor(Math.random() * 256);
	//for blue
	var b =Math.floor(Math.random() * 256);
	//return as "rgb(r, g, b)"
	return "rgb("+r+", "+g+", "+b+")";
}


reset.addEventListener("click",function(){
	//Again,generate random colors
	colors = generateRandomColors(numSquares);
	//Then,pick new color
	pickedColor = pickColor();
	//Then,set colorDisplay with the new picked color
	colorDisplay.textContent = pickedColor;
	reset.textContent="New Colors";
	//Finally,reflect colors on all the squares
	for(var i=0 ; i< squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})