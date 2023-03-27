function preload(){
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
   image(video,90,80,325,260);

   stroke("blue");
   fill("blue");

   circle(50,60,75);
   circle(50,350,75);
   circle(460,60,75);
   circle(460,355,75);

   stroke("yellow");
   fill("yellow");

   rect(35,95,25,220);
   rect(450,98,25,220);
   rect(85,40,350,25);
   rect(80,353,350,25);
}

function take_snapshot(){
    save("my_image_with_frame.jpg")
}