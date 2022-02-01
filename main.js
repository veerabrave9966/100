function setup() {
    canva = createCanvas(340, 480);
    canvas.position(210, 250);
    video = createCapture(VIDEO);
    vedio.hide();
    tint_color = ""
}
function draw() {
    image(0, 0, 340, 480,);
    tint(tint_color);
}
function take_snapshot(){
    save(your_picture.jpg);
}
function filter_tint()
{
    tint_color = document.getElementById("color").value;
}