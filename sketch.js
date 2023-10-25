let botdis = 215
let wingL = 225
let wingR = 375
let xpos = 0
let ypos = 0
let speed = -0.7
let earL = 255
let earR = 0
let eaR = 0
let sped = -0.4
let wingV = 0.5
let fly = 0
let Vfly = 0.4
let kolor = 0
let Vcol = 1
let mrec1 = 0
let mrec2 = 0
let mrec3 = 0
let mrec4 = 0
let mrecspeed = 1
let rsped = 0.5
let obrot = 0
let moon= 10
let Vmoon = 0.22
function setup() {
  createCanvas(650, 500);
}

function draw() {
  background(35, 76, 120);
  //back
  fill(176, 171, 171)
  rect(0, 330, 650, 330)
  fill(255)
  rect(290, 342 + mrec1, 20, 35)
  rect (290, 389 + mrec2, 20, 35) 
  rect (290, 439 + mrec3, 20, 35)
  rect (290, 486 + mrec4, 20, 35)
  mrec1 = mrec1 - mrecspeed
  if (mrec1 < -20)
    {
      mrec1= 180;
    }
  mrec2= mrec2- mrecspeed
  if (mrec2 < -67)
    {
      mrec2= 133
    }
  mrec3 = mrec3 - mrecspeed
  if (mrec3 < -117)
    {
      mrec3 = 83
    }
  mrec4 = mrec4- mrecspeed
  if (mrec4 < - 164)
    {
      mrec4 = 36
    }
  fill (35, 76, 120)
  rect(0, 0, 650, 330)
  //moon
  push()
  translate(325, 300)
  fill ( 255, 255, 255)
  rotate(radians(moon))
  circle(-275, 25, 100)
  moon = moon + Vmoon
  if (moon > 180)
    {
    Vmoon = - Vmoon
    }
  if ( moon < 10)
    {
      Vmoon = - Vmoon
    }
  pop()
  fill (214, 212, 206)
  rect(0, 20, 100, 310)
  fill (255, 240, 0, 150)
  rect ( 5, 35, 20, 30)
  rect ( 5, 85, 20, 30)
  rect ( 5, 135, 20, 30)
  rect ( 5, 185, 20, 30)
  rect ( 5, 235, 20, 30)
  rect ( 5, 285, 20, 30)
  rect ( 40, 35, 20, 30)
  rect ( 40, 85, 20, 30)
  rect ( 40, 135, 20, 30)
  rect ( 40, 185, 20, 30)
  rect ( 40, 235, 20, 30)
  rect ( 40, 285, 20, 30)
  rect ( 75, 35, 20, 30)
  rect ( 75, 85, 20, 30)
  rect ( 75, 135, 20, 30)
  rect ( 75, 185, 20, 30)
  rect ( 75, 235, 20, 30)
  rect ( 75, 285, 20, 30)
  fill (225, 225, 225)
  rect(500, 100, 100, 230)
  fill(200, 150, 20)
  triangle (500, 100, 600, 100, 550, 50)
  fill (0,0,0, 200)
  rect( 510, 120, 80, 80)
  stroke (255)
  line ( 525, 130, 525, 140)
  line (525, 130, 530, 135)
  line (530, 135, 535, 130 )
  line ( 535, 130, 535, 140)
  noFill()
  ellipse (542, 135, 5, 10)
  line( 550, 130, 550, 140)
  line (550, 130, 555, 130)
  line (550, 140, 555, 140)
  line (557, 133, 557, 137)
  line(562, 130, 562, 140)
  line (562, 130, 567, 130)
  line (562, 140, 567, 140)
  line (569, 133, 569, 137)
  line (572, 130, 577, 135)
  line (577, 135, 582, 130 )
  line (577, 135, 577, 140)
  line (515, 150, 515, 175)
  line(515, 150, 530, 150)
  line(515, 175, 530, 175)
  line (540, 150, 540, 175)
  line( 550, 150, 565, 150)
  line (557, 150, 557, 175)
  line (577, 160, 577, 175)
  line(570, 150, 577, 160)
  line(577, 160, 585, 150)
  stroke (0)
  strokeWeight (5)
  line( 550, 50, 550, 20)
  strokeWeight(2)
  fill(92, 89, 80)
  rect( 575, 170, 80, 160 )
  fill (255, 240, 0, 150)
  rect ( 585, 200, 15, 20)
  rect ( 605, 200, 15, 20)
  rect ( 625, 200, 15, 20)
  rect ( 585, 230, 15, 20)
  rect ( 605, 230, 15, 20)
  rect ( 625, 230, 15, 20)
  rect ( 585, 260, 15, 20)
  rect ( 605, 260, 15, 20)
  rect ( 625, 260, 15, 20)
  //legs
  
  fill(127, 135, 135)
  rect(310, fly + 280 , 20, 60, 30)
  rect(270, fly + 280, 20, 60, 30)
  //wings
  fill(252, 246, 245, 200)
  triangle(320, fly + 250, wingR - 25, fly + 120, wingR, fly + 350)
  triangle(280, fly + 250, wingL + 25, fly + 120, wingL, fly + 350)
  wingR= wingR + wingV
  wingL= wingL - wingV
  if (wingR > 400)
    {
      wingV= -wingV
    }
  if (wingR < 375)
    {
      wingV=-wingV
    }
  //arms
  fill(232, 226, 197)
  rect(300, fly + 220, 105, 10, 20)
  rect(195, fly + 220, 105, 10, 20)
  //flower
  strokeWeight (5)
  line(400, fly + 190, 400, fly + 240)
  strokeWeight (2)
  fill(122 + kolor , 13  + kolor,115 + kolor)
  circle (407, fly + 178, 12)
  circle (407, fly + 192, 12)
  circle (393, fly + 178, 12)
  circle (393, fly + 192, 12)
  fill(228 - kolor,252 - kolor,43 + kolor)
  circle(400, fly + 185, 10)
  fill(247 - kolor, 77 + kolor,134 + kolor)
  circle (410, fly + 185, 10)
  circle (390, fly + 185, 10)
  circle (400, fly + 175, 10)
  circle (400, fly + 195, 10)
 kolor = kolor + Vcol
  if (kolor > 150)
    {
      Vcol = -Vcol
    }
  if (kolor <-50)
    {
      Vcol = -Vcol
    }
  //hand
  noStroke()
  fill(227,217,170)
  circle(400, fly + 225, 20)
  //body
  fill(232, 226, 197)
  ellipse (300, fly + 250, 50, 100)
  stroke(1)
  strokeWeight(15)
  line(300, fly + 200, 300, fly + 295)
  //head
  stroke (1)
  strokeWeight (2)
  circle(300,fly + 185,50)
  line(285, fly + 195, 315, fly + 198)
  fill(87, 72, 23)
  triangle(265, fly + 175, 335, fly + 175, 300, fly + 155)
  fill(72, 144, 217)
  circle(290, fly + 185, 7)
  circle(310, fly + 185, 7)
  stroke (2)
  strokeWeight (2)
  fly= fly - Vfly
  if (fly < -85)
    {
      Vfly = -Vfly
    }
  if (fly > 0)
    {
      Vfly= -Vfly
    }
  //pig
  fill(253, 157, 230)
  ellipse(525, 300, 140, 90)
  ellipse(480, 270, 85, 70)
  fill (209, 128, 190)
  ellipse(485, 285, 30, 20)
  fill(0)
  ellipse
  circle (470, 265, 15)
  circle (500, 265, 15)
  fill(209, 128, 190)
  triangle(465, 235, 435, 240, 450, earL)
  triangle(490, 230, 515, 245, eaR + 493, earR + 250)
  stroke (0)
  strokeWeight(4)
   earL = earL + sped
  if (earL > 255)
    {
      sped= - sped
    }
          
  if (earL < 220)
    {
      sped = - sped
    }
    eaR = eaR - sped
    earR = earR + sped
  //legpig
  push()
  translate(465, 330)
  rotate(radians(obrot))
  line(10, 0, 0, 30)
  obrot = obrot + rsped
  if (obrot > 20)
    {
      rsped = -rsped
    }
  if (obrot < -20)
    {
      rsped= - rsped
    }
  pop()
  line(495, 340, 495, 370)
  line(535, 345, 540, 370)
  line(560, 340, 565, 370)
 
  //robot
  noStroke()
  fill(97, 245, 250, botdis)
  ellipse(xpos + 100, ypos + 130, 80, 70)
  ellipse(xpos + 65, ypos + 100, 20, 70)
  ellipse(xpos + 70, ypos + 150, 30, 50)
  ellipse(xpos + 130, ypos + 150, 30, 50)
  rect(xpos + 80, 55, ypos + 50, 50, 15)
  fill(238, 165, 242, botdis - 30)
  circle (xpos + 105, ypos + 80, 40)
  fill(239, 87, 247, botdis - 20)
  circle (xpos + 105, ypos + 80, 30)
  fill (237, 45, 247, botdis - 10)
  circle (xpos + 105, ypos + 80, 20)
  fill (204, 15, 242, botdis)
  circle (xpos + 105, ypos + 80, 15)
  botdis = botdis + speed
if (botdis <= -20)
    {
      speed= -speed;
    }
  if (botdis > 220)
    {
      speed = -speed
    }
  if (xpos === 0 && botdis <-20)
    {
      xpos= 400
    } else if (xpos === 400 && botdis < -20)
      {
        xpos = 0
      }
  
  stroke (2)
  strokeWeight (2)

}