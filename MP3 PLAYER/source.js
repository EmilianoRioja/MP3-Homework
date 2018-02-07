
var button;
var button2;
var button3;
var button4;
var button5;
var song;
var song2;
var song3;
var slider;
var amp;
var stop;
var Looper;
var sampleIsPlaying = false;
var songs=["Initial D - Running In The 90s.mp3","Blonde Redhead - For the Damaged Coda.mp3","MLG -  MEMEMIX.mp3"];

//--------------------------------------------------------------------------

    function preload(){
soundFormats('mp3');
song=loadSound("Initial D - Running In The 90s.mp3");
song2=loadSound("Blonde Redhead - For the Damaged Coda.mp3");
song3=loadSound("MLG -  MEMEMIX.mp3");
}

function setup() {
  createCanvas(700, 380);

    amp=new p5.Amplitude();



    slider = createSlider(0, 1, 0.5, 0.01)
    slider.position(60,350,)
    background(0);

    button = createButton('Song 1');
    button.position(19, 10);
    button.mousePressed(togglePlaing);

    button2 = createButton('Song 2');
    button2.position(19, 30);
    button2.mousePressed(togglePlaing2);

    button3 = createButton('Song 3');
    button3.position(19, 50);
    button3.mousePressed(togglePlaing3);



    stop = createButton('Stop');
    stop.position(19, 70);
    stop.mousePressed(stoPlay);

    Looper = createButton('Loop');
    Looper.position(19, 90);
    Looper.mousePressed(looop);

        button4 = createButton('forward');
        button4.position(19, 110);
        button4.mousePressed(togglePlaing3);


            button5 = createButton('backwards');
            button5.position(19, 130);
            button5.mousePressed(togglePlaing3);
}
//-------------------------------------------------------------------------------
    function looop(){
song.noloop();
    }

    function stoPlay() {
      if(!song.isPlaying()){
      song.stop();
      song.setVolume();
    button.html("stop");
    } else {
      song.stop();
    button.html("play");
  }
  if(!song2.isPlaying()){
  song2.stop();
  song2.setVolume();
button.html("stop");
} else {
  song2.stop();
button.html("play");
}
if(!song3.isPlaying()){
song3.stop();
song3.setVolume();
button.html("stop");
} else {
song3.stop();
button.html("play");
}}



    function togglePlaing() {
  if(!song.isPlaying()){
  song.play();
  song.setVolume();
button.html("pause");
} else {
  song.pause();
button.html("play");}}

function togglePlaing2() {
if(!song2.isPlaying()){
song2.play();
song2.setVolume();
button.html("pause");
} else {
song2.pause();
button.html("play");}}

function togglePlaing3() {
if(!song3.isPlaying()){
song3.play();
song3.setVolume();
button.html("pause");
} else {
song3.pause();
button.html("play");}}



function draw() {
background(70);
var vol = amp.getLevel();
var diam= map(vol,0,0.5,10, 200)

ellipse(width/2,height/2, diam,diam)
  song.setVolume(slider.value());}
