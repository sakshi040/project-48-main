var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var road1, road2, road3, road4, road5, road6, road7, road8

var collider1,collider2, collider3,collider4, collider5,collider6,collider7,collider8,collider9,collider10,collider11,collider12,collider13,collider14,collider15,collider16,collider17,collider18,collider19,collider20,collider21,collider22,collider23,collider24,collider25,collider26,collider27,collider28,collider29,collider30,collider31,collider32,collider33,collider34,collider35;

var treasure1, treasure2,treasure3,treasure4,treasure5,treasure6,treasure7,treasure8,treasure9,treasure10,treasure11,treasure12,treasure13,treasure14,treasure15,treasure16,treasure17,treasure18,treasure19,treasure20,treasure21,treasure22,treasure23,treasure24,treasure25

var treasuresGroup;

var medical_kit;

var life=3;

function preload(){
    treasure1_image = loadImage("chest 1.png")
    treasure2_image = loadImage("chest 2.png")
    treasure3_image = loadImage("gold pot.png")
    treasure4_image = loadImage("treasure coins.png")
    treasure5_image = loadImage("chest 1.png")
    treasure6_image = loadImage("chest 2.png")
    treasure7_image = loadImage("gold pot.png")
    treasure8_image = loadImage("treasure coins.png")
    treasure9_image = loadImage("chest 1.png")
    // treasure10_image = loadImage("chest 2.png")
    treasure11_image = loadImage("gold pot.png")
    treasure12_image = loadImage("treasure coins.png")
    treasure13_image = loadImage("chest 1.png")
    treasure14_image = loadImage("chest 2.png")
    treasure15_image = loadImage("gold pot.png")
    treasure16_image = loadImage("treasure coins.png")
    treasure17_image = loadImage("chest 1.png")
    treasure18_image = loadImage("chest 2.png")
    treasure19_image = loadImage("gold pot.png")
    treasure20_image = loadImage("treasure coins.png")
    treasure21_image = loadImage("chest 1.png")
    treasure22_image = loadImage("chest 2.png")
    treasure23_image = loadImage("gold pot.png")
    treasure24_image = loadImage("chest 1.png")
    treasure25_image = loadImage("chest 2.png")
    treasure26_image = loadImage("gold pot.png")
    treasure27_image = loadImage("treasure coins.png")
    // treasure28_image = loadImage("treasure coins.png")
    treasure29_image = loadImage("gold pot.png")
    treasure30_image = loadImage("treasure coins.png")
    treasure31_image = loadImage("treasure coins.png")
    medical_kit_image=loadImage("medical kit.png")
}

function setup(){
    canvas =createCanvas(displayWidth,displayHeight);
    road1 = createSprite(displayWidth/2,displayHeight-100,1000,1000) 

    road2 = createSprite(displayWidth+480,displayHeight-800,3000,500)
    road2.shapeColor = "yellow"

    road3 = createSprite(displayWidth+800,displayHeight-480,500,3000)
    road3.shapeColor = "yellow"

    road4 = createSprite(displayWidth-700,displayHeight-2100,500,3000)
    road4.shapeColor = "yellow"

    road5 = createSprite(displayWidth-1500,displayHeight-2000,2000,400)
    road5.shapeColor = "yellow"  

    road6 = createSprite(displayWidth+50,displayHeight-3000,2000,400)
    road6.shapeColor = "yellow"

    road7 = createSprite(displayWidth-1,displayHeight-2500,500,1000)
    road7.shapeColor = "yellow"

    road8 = createSprite(displayWidth+800,displayHeight-3500,500,1000)
    road8.shapeColor = "yellow"

    collider1 = createSprite(30,displayHeight-325,30,1450)
    collider1.shapeColor = "white" 

    collider2 = createSprite(60,displayHeight-1055,85,30)
    collider2.shapeColor = "white"

    collider3 = createSprite(90,displayHeight-1435,30,730)
    collider3.shapeColor = "white"

    collider4 = createSprite(-688,displayHeight-1785,1530,30)
    collider4.shapeColor = "white"

    collider5 = createSprite(-675,displayHeight-2210,1550,30)
    collider5.shapeColor = "white"

    collider6 = createSprite(-1450,displayHeight-1997,30,455)
    collider6.shapeColor = "white"

    collider7 = createSprite(90,displayHeight-2910,30,1380)
    collider7.shapeColor = "white"

    collider8 = createSprite(90,displayHeight-2910,30,1380)
    collider8.shapeColor = "white"

    collider9 = createSprite(340,displayHeight-3600,530,30)
    collider9.shapeColor = "white"

    collider10 = createSprite(600,displayHeight-3410,30,420)
    collider10.shapeColor = "white"

    collider11 = createSprite(600,displayHeight-1925,30,1750)
    collider11.shapeColor = "white"

    collider12 = createSprite(1110,displayHeight-1060,990,30)
    collider12.shapeColor = "white"

    collider13 = createSprite(1600,displayHeight-1520,30,930)
    collider13.shapeColor = "white"
    
    collider14 = createSprite(1100,displayHeight-3203,1000,30)
    collider14.shapeColor = "white"

    collider15 = createSprite(90,displayHeight-2910,30,1380)
    collider15.shapeColor = "white"

    collider16 = createSprite(700,displayHeight-2800,200,30)
    collider16.shapeColor = "white"

    collider17 = createSprite(800,displayHeight-2400,30,800)
    collider17.shapeColor = "white"

    collider18 = createSprite(1050,displayHeight-2000,500,30)
    collider18.shapeColor = "white"

    collider19 = createSprite(1300,displayHeight-2400,30,800)
    collider19.shapeColor = "white"

    collider20 = createSprite(1700,displayHeight-2800,800,30)
    collider20.shapeColor = "white"

    collider21 = createSprite(2100,displayHeight-3390,30,1210)
    collider21.shapeColor = "white"

    collider22 = createSprite(1850,displayHeight-4000,500,30)
    collider22.shapeColor = "white"

    collider23 = createSprite(1600,displayHeight-3600,30,800)
    collider23.shapeColor = "white"

    collider24 = createSprite(1020,displayHeight-75,30,950)
   
    collider25 = createSprite(1320,displayHeight-550,560,30)
    collider25.shapeColor = "white"

    collider26 = createSprite(1600,displayHeight+240,30,1550)
    collider26.shapeColor = "white"

    collider27 = createSprite(525,displayHeight+400,1000,30)
    collider27.shapeColor = "white"

    collider28 = createSprite(1850,displayHeight+1010,500,30)
    collider28.shapeColor = "white"

    collider29 = createSprite(2100,displayHeight+240,30,1550)
    collider29.shapeColor = "white"

    collider30 = createSprite(2560,displayHeight-550,950,30)
    collider30.shapeColor = "white"

    // collider31 = createSprite(2100,displayHeight+240,30,1550)
    // collider31.shapeColor = "white"

    collider32 = createSprite(3020,displayHeight-800,30,500)
    collider32.shapeColor = "white"

    collider33 = createSprite(2560,displayHeight-1050,950,30)
    collider33.shapeColor = "white"

    collider34 = createSprite(2100,displayHeight-1510,30,945)
    collider34.shapeColor = "white"

    collider35 = createSprite(1850,displayHeight-1990,500,30)
    collider35.shapeColor = "white"

   treasure1 = createSprite(1010,displayHeight-560,40,40)
   treasure1.shapeColor = "orange"
   treasure1.addImage(treasure1_image)
   treasure1.scale=0.5

   treasure2 = createSprite(60,displayHeight-560,40,40)
   treasure2.shapeColor = "orange"
   treasure2.addImage(treasure2_image)
   treasure2.scale=0.5

   treasure3 = createSprite(1600,displayHeight-560,40,40)
   treasure3.shapeColor = "orange"
   treasure3.addImage(treasure3_image)
   treasure3.scale=0.5

    treasure4 = createSprite(2100,displayHeight-560,40,40)
    treasure4.shapeColor = "orange"
    treasure4.addImage(treasure4_image)
    treasure4.scale=0.5

  treasure5 = createSprite(3000,displayHeight-1020,40,40)
  treasure5.shapeColor = "orange"
  treasure5.addImage(treasure5_image)
  treasure5.scale=0.5

  treasure6 = createSprite(2100,displayHeight-1020,40,40)
  treasure6.shapeColor = "orange"
  treasure6.addImage(treasure6_image)
  treasure6.scale=0.5

  treasure7 = createSprite(2090,displayHeight-1980,40,40)
  treasure7.shapeColor = "orange"
  treasure7.addImage(treasure7_image)
  treasure7.scale=0.5

    treasure8 = createSprite(1610,displayHeight-1980,40,40)
    treasure8.shapeColor = "orange"
    treasure8.addImage(treasure8_image)
    treasure8.scale=0.5

  treasure9 = createSprite(1610,displayHeight-1050,40,40)
  treasure9.shapeColor = "orange"
  treasure9.addImage(treasure9_image)
  treasure9.scale=0.5

   treasure11 = createSprite(600,displayHeight-2800,40,40)
  treasure11.shapeColor = "orange"
  treasure11.addImage(treasure11_image)
  treasure11.scale=0.5

  treasure12 = createSprite(600,displayHeight-3200,40,40)
  treasure12.shapeColor = "orange"
  treasure12.addImage(treasure12_image)
  treasure12.scale=0.5

  treasure13 = createSprite(590,displayHeight-3600,40,40)
  treasure13.shapeColor = "orange"
  treasure13.addImage(treasure13_image)
  treasure13.scale=0.5

    treasure14 = createSprite(100,displayHeight-3600,40,40)
    treasure14.shapeColor = "orange"
    treasure14.addImage(treasure14_image)
    treasure14.scale=0.5

  treasure15 = createSprite(100,displayHeight-2200,40,40)
  treasure15.shapeColor = "orange"
  treasure15.addImage(treasure15_image)
  treasure15.scale=0.5

  treasure16 = createSprite(-1400,displayHeight-2200,40,40)
  treasure16.shapeColor = "orange"
  treasure16.addImage(treasure16_image)
  treasure16.scale=0.5

  treasure17 = createSprite(-1400,displayHeight-1800,40,40)
  treasure17.shapeColor = "orange"
  treasure17.addImage(treasure17_image)
  treasure17.scale=0.5

  treasure18 = createSprite(100,displayHeight-1800,40,40)
  treasure18.shapeColor = "orange"
  treasure18.addImage(treasure18_image)
  treasure18.scale=0.5

    treasure19 = createSprite(100,displayHeight-1100,40,40)
    treasure19.shapeColor = "orange"
    treasure19.addImage(treasure19_image)
    treasure19.scale=0.5

    treasure20 = createSprite(600,displayHeight-1100,40,40)
    treasure20.shapeColor = "orange"
    treasure20.addImage(treasure20_image)
    treasure20.scale=0.5

    treasure21 = createSprite(1600,displayHeight+1000,40,40)
    treasure21.shapeColor = "orange"
    treasure21.addImage(treasure21_image)
    treasure21.scale=0.5

    treasure22 = createSprite(2100,displayHeight+1000,40,40)
    treasure22.shapeColor = "orange"
    treasure22.addImage(treasure22_image)
    treasure22.scale=0.5111

 treasure23 = createSprite(1290,displayHeight-2010,40,40)
  treasure23.shapeColor = "orange"
  treasure23.addImage(treasure23_image)
  treasure23.scale=0.5

  treasure24 = createSprite(810,displayHeight-2010,40,40)
  treasure24.shapeColor = "orange"
  treasure24.addImage(treasure24_image)
  treasure24.scale=0.5

  treasure25 = createSprite(810,displayHeight-2800,40,40)
  treasure25.shapeColor = "orange"
  treasure25.addImage(treasure25_image)
  treasure25.scale=0.5

    treasure26 = createSprite(2050,displayHeight-2800,40,40)
    treasure26.shapeColor = "orange"
    treasure26.addImage(treasure26_image)
    treasure26.scale=0.5

  treasure27 = createSprite(1300,displayHeight-2800,40,40)
  treasure27.shapeColor = "orange"
  treasure27.addImage(treasure27_image)
  treasure27.scale=0.5

  treasure29 = createSprite(2090,displayHeight-3990,40,40)
  treasure29.shapeColor = "orange"
  treasure29.addImage(treasure29_image)
  treasure29.scale=0.5

  treasure30 = createSprite(1610,displayHeight-3990,40,40)
  treasure30.shapeColor = "orange"
  treasure30.addImage(treasure30_image)
  treasure30.scale=0.5

  treasure31 = createSprite(3000,displayHeight-560,40,40)
  treasure31.shapeColor = "orange"
  treasure31.addImage(treasure31_image)
  treasure31.scale=0.5

  medical_kit = createSprite(1610,displayHeight-3200,40,40)
  medical_kit.shapeColor = "blue"
  medical_kit.addImage(medical_kit_image)
  medical_kit.scale=0.5

 score=0;
  life=3;
 
 car1 = createSprite(displayWidth/2,displayHeight-300,50,50)
 car1.shapeColor = "red"


}

function draw(){
    
    background(0);
    camera.position.x=car1.x
    camera.position.y=car1.y
    if(keyDown("Up_Arrow")){
        car1.y-=30
    }
        if(keyDown("Down_Arrow")){
            car1.y+=30
    }
    if(keyDown("left_Arrow")){
        car1.x-=30
    }
        if(keyDown("right_Arrow")){
            car1.x+=30
    }
    drawSprites()
   fill("black")
   textSize(30)
   text("Score : "+score,car1.x-50,car1.y-50)
   text("Lives : "+life,car1.x-50,car1.y+70)


 

    die();
    Touching();;
    
}

function Touching(){
  if(car1.isTouching(treasure1)){
    treasure1.destroy();
    score = score+1 ;
  }
 if(car1.isTouching(treasure2)){
    treasure2.destroy();
    score = score+3 ;
  }

 if(car1.isTouching(treasure3)){
    treasure3.destroy();
    score = score+4 ;
 }
 if(car1.isTouching(treasure4)){
    treasure4.destroy();
    score = score+2 ;
  }
 if(car1.isTouching(treasure5)){
    treasure5.destroy();
    score = score+1 ;
 }
 if(car1.isTouching(treasure6)){
    treasure6.destroy();
    score = score+6 ;
 }
 if(car1.isTouching(treasure7)){
    treasure7.destroy();
    score = score+4 ;
 }
 if(car1.isTouching(treasure8)){
    treasure8.destroy();
    score = score+2 ;
 }
 if(car1.isTouching(treasure9)){
    treasure9.destroy();
    score = score+1 ;
 }

 if(car1.isTouching(treasure11)){
    treasure11.destroy();
    score = score+4 ;
 }
 if(car1.isTouching(treasure12)){
    treasure12.destroy();
    score = score+2 ;
 }
 if(car1.isTouching(treasure13)){
    treasure13.destroy();
    score = score+1 ;
 }
 if(car1.isTouching(treasure14)){
    treasure14.destroy();
    score = score+3 ;
 }
 if(car1.isTouching(treasure15)){
    treasure15.destroy();
    score = score+4 ;
 }
 if(car1.isTouching(treasure16)){
    treasure16.destroy();
    score = score+2 ;
 }
 if(car1.isTouching(treasure17)){
    treasure17.destroy();
    score = score+1 ;
 }
 if(car1.isTouching(treasure18)){
    treasure18.destroy();
    score = score+3 ;
 }
 if(car1.isTouching(treasure19)){
    treasure19.destroy();
    score = score+4 ;
 }
 if(car1.isTouching(treasure20)){
    treasure20.destroy();
    score = score+2 ;
 }
 if(car1.isTouching(treasure21)){
    treasure21.destroy();
    score = score+1 ;
 }
 if(car1.isTouching(treasure22)){
    treasure22.destroy();
    score = score+3 ;
 }

 if(car1.isTouching(treasure23)){
    treasure23.destroy();
    score = score+4 ;
 }
 if(car1.isTouching(treasure24)){
    treasure24.destroy();
    score = score+1 ;
 }
 if(car1.isTouching(treasure25)){
    treasure25.destroy();
    score = score+3 ;
 }
 if(car1.isTouching(treasure26)){
    treasure26.destroy();
    score = score+4 ;
 }
 if(car1.isTouching(treasure27)){
    treasure27.destroy();
    score = score+2 ;
 }

 if(car1.isTouching(treasure29)){
    treasure29.destroy();
    score = score+4 ;
 }
 if(car1.isTouching(treasure30)){
    treasure30.destroy();
    score = score+2 ;
 }
 if(car1.isTouching(treasure31)){
    treasure31.destroy();
    score = score+2 ;
 }


}

function die(){
    if(car1.isTouching(collider1)){
        car1.collide(collider1)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }
    if(car1.isTouching(collider2)){
        car1.collide(collider2)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider3)){
        car1.collide(collider3)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider4)){
        car1.collide(collider4)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider5)){
        car1.collide(collider5)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider6)){
        car1.collide(collider6)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider7)){
        car1.collide(collider7)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider8)){
        car1.collide(collider8)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider9)){
        car1.collide(collider9)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider10)){
        car1.collide(collider10)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }
    if(car1.isTouching(collider11)){
        car1.collide(collider11)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider12)){
        car1.collide(collider12)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider13)){
        car1.collide(collider13)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider14)){
        car1.collide(collider14)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider15)){
        car1.collide(collider15)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider16)){
        car1.collide(collider16)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider17)){
        car1.collide(collider17)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider18)){
        car1.collide(collider18)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider19)){
        car1.collide(collider19)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }
    if(car1.isTouching(collider20)){
        car1.collide(collider20)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider21)){
        car1.collide(collider21)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider22)){
        car1.collide(collider22)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider23)){
        car1.collide(collider23)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider24)){
        car1.collide(collider24)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider25)){
        car1.collide(collider25)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider26)){
        car1.collide(collider26)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider27)){
        car1.collide(collider27)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }
    
    if(car1.isTouching(collider28)){
        car1.collide(collider28)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }
    if(car1.isTouching(collider29)){
        car1.collide(collider29)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider30)){
        car1.collide(collider30)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider32)){
        car1.collide(collider32)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider33)){
        car1.collide(collider33)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider34)){
        car1.collide(collider34)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }

    if(car1.isTouching(collider35)){
        car1.collide(collider35)
        life--
        car1.x = displayWidth/2
        car1.y = displayHeight-300
    }



    
}