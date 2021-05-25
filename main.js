canvas =canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("Colour").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " Y = " + mouse_y);

}

function rect() {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.rect(150,143,430,200);
    ctx.stroke();
}

function cleararea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


}
