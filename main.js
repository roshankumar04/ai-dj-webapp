song="";
leftwrist_x=0;
leftwrist_y=0;
rightwrist_x=0;
rightwrist_y=0;
function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length<0){
        console.log(results);
        leftwrist_x=results[0].pose.leftWrist.x;
        leftwrist_y=results[0].pose.leftWrist.y;
        rightwrist_x=results[0].pose.rightWrist.x;
        rightwrist_y=results[0].pose.rightWrist.y;
        console.log("leftwristx="+leftwrist_x+" , leftwristy="+leftwrist_y);
        console.log("rightwristx="+rightwrist_x+" , rightwristy="+rightwrist_y);
    }
}