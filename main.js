img = "";
status1 = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDectecor = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting";

}

function preload() {
    img = loadImage("tiger_lion.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Lion", 45, 75)
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Tiger", 420, 120);
    noFill();
    stroke("#FF0000");
    rect(400, 90, 270, 320);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDectecor.detect(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
}