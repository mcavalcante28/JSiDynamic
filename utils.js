function drawArrow(base, vec, myColor, weight) {
  push();
  stroke(myColor);
  strokeWeight(weight);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}


function drawLine(x1, y1, z1, x2, y2, z2){
  beginShape();
  vertex(x1,y1,z1);
  vertex(x2,y2,z2);  
  endShape();
}

function drawSpiral(center1X, center2X, height, radius, angle1, angle2, NSegments, weight = 1) {

  var dx = (center2X - center1X)/NSegments;
  var dang = (angle2 - angle1)/NSegments;

  var angle = angle1;

  var p1x = center1X;
  var p1y = height + radius*cos(angle);
  var p1z =  radius*sin(angle);


  fill(255,0);
  beginShape();
  for (var i = 0; i < NSegments; i++) {

    angle += dang;

    p1x += dx;
    p1y = height + radius*cos(angle);
    p1z =  radius*sin(angle);

    strokeWeight(weight);
    vertex(p1x, p1y, p1z);

  }
  endShape();

}


function drawDumper(cartPosition, block1Position, cartWidth, blockWidth, y0 = 0) {
    var _t1 =  cartPosition - cartWidth/2 + cartWidth/20;
    var _t2 = block1Position - blockWidth/2;
    var t1 = Math.min(_t1,_t2);
    var t2 = Math.max(_t1,_t2);

    var range = t2-t1;

    rect(t1+range/2, y0-5, 10, 10);

    line(t1, y0, t1+range/2, y0);

    line(t1+range/2+15, y0, t2, y0);

    line(t1+range/2+15, y0-10, t1+range/2+15, y0);
    line(t1+range/2+15, y0+10, t1+range/2+15, y0);
    line(t1+range/2+15, y0-10, t1+range/2-5, y0-10);
    line(t1+range/2+15, y0+10, t1+range/2-5, y0+10);

}




function drawSpring(cartPosition, block1Position, cartWidth, blockWidth, y0 = 0, N = 200) {
    var _t1 =  cartPosition - cartWidth/2 + cartWidth/20;
    var _t2 = block1Position - blockWidth/2;
    var t1 = Math.min(_t1,_t2);
    var t2 = Math.max(_t1,_t2);

    var range = t2-t1;
    var angle = 0;
    var dAngle = 10*2*Math.PI/N;
    fill(255,0);
    beginShape();
    for (var i = 0; i < N; i++) {
      var t = t1+i*(t2-t1)/N;
      angle += dAngle;
      var x1 = t + 6*sin(angle);
      var y1 = 6*cos(angle);
      vertex(x1,  y1+y0);
    }
    endShape();

}



function drawAperture(x, y, Ro, percent, color) {

  stroke(0);
  strokeWeight(2);
  fill(color);

  circle(x, y, Ro);

  stroke(color);
  fill('white');
  
  circle(x, y, Ro*percent);

}


function drawGround(xi, xo, y, color, weigth, N, hair) {

  strokeWeight(weigth);
  stroke(color);

  line(xi,y,xo,y);

  var dx = (xo-xi)/N;
  var x = xi;
  for (var i = 0; i < N; i++) {
    line(x,y, x+hair, y+hair);
    x += dx;
  }

}



function arrowText(str, x1, y1, x2, y2, myColor, weight, size) {

  let sWidth = textWidth(str);

  noStroke();
  fill(myColor);
  textSize(size);
  text(str, x1, y1-2);

  stroke(myColor);

  if (x1>x2)
    drawArrow(createVector(x1,y1), createVector(x2-x1,y2-y1), myColor, weight);
  else
    drawArrow(createVector(x1+sWidth,y1), createVector(x2-x1-sWidth,y2-y1), myColor, weight);

  strokeWeight(weight)    ;
  line(x1,y1,x1+sWidth,y1);

}



function rollArray(someArray) {
  for (var i = 0; i<someArray.length - 1; i++) {
    someArray[i] = someArray[i+1];
  }
}
