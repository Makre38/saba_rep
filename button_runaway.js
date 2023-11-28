button = document.querySelector("#id_btn")
const div  = document.querySelector("#id_div")
const caption = document.querySelector("#id_cap")

var pos = button.getBoundingClientRect();

var x = pos.left;
var y = pos.top;

document.addEventListener("mousemove", runaway);
button.addEventListener("mousedown", () =>{
	alert("(^^)");
});



function rand() {
	var rand = Math.random();
	var rand2;
	if(rand<0.5){
		rand2 = -1*rand*100-10;
	}
	else{
		rand2 = (rand-0.5)*100+10;
	}
	return rand2;
}
            
function runaway(event){
	if (x-5 < event.clientX && event.clientX < x + 85 && y-5 < event.clientY && event.clientY < y + 45){
		//button.style.top = event.clientY + "px";
		//button.style.left = event.clientX + "px";
		button.style.top = event.clientY +rand()+ "px";
		button.style.left = event.clientX + rand() + "px";
		button.style.backgroundColor = "red"
		console.log(button.style.backgroundColor)
		pos = button.getBoundingClientRect();
		x = pos.left;
		y = pos.top;
	}
}

