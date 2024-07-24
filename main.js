function preload()
{

}

function setup()
{
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
  image(video, 0, 0, 640, 480);
  circle(110, 250);
  rect(0, 0, 20, 479);
  rect(620, 0, 20, 479);
  text('Happy Birthday Natasha!!!', 280, 50);
  fill('red');
  stroke('red');
}

function take_snapshot()
{
  save('Natasha Birthday Photo.png');
}