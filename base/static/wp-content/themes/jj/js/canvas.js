function focusGradient (){

  var c = document.getElementById("focus");
  var ctx = c.getContext("2d");

  var cw = c.width = 1010;
  var ch = c.height = 510;
  var R = 200;
  var colorsLength = 6;
  var A = 360 / colorsLength;
  var angleIncrement = 0;

  var grd, ap, af, xp, yp, xf, yf;
  var rad = (Math.PI / 240);
  ctx.lineWidth = 25;

  function draw() {

      if (angleIncrement >= 360) {
        angleIncrement = 0;
      } else {
        angleIncrement++;
      }

      for (var i = 0; i < colorsLength; i++) {

        ap = A * i;
        af = A * (i + 1) + .5;

        apRad = rad * ap;
        afRad = rad * af;

        ctx.beginPath();
        // ctx.arc(cw / 2, ch / 2, R, apRad, afRad);
        ctx.font = "300px Montserrat";
      ctx.moveTo(50,0);
      ctx.lineTo(70,0);
      ctx.lineTo(70,50);
      ctx.lineTo(120,50);
      ctx.lineTo(120,70);
      ctx.lineTo(70,70);
      ctx.lineTo(70,120);
      ctx.lineTo(50,120);
      ctx.lineTo(50,70);
      ctx.lineTo(0,70);
      ctx.lineTo(0,50);
      ctx.lineTo(50,50);
      
      ctx.moveTo(940,390);
      ctx.lineTo(960,390);
      ctx.lineTo(960,440);
      ctx.lineTo(1010,440);
      ctx.lineTo(1010,460);
      ctx.lineTo(960,460);
      ctx.lineTo(960,510);
      ctx.lineTo(940,510);
      ctx.lineTo(940,460);
      ctx.lineTo(890,460);
      ctx.lineTo(890,440);
      ctx.lineTo(940,440);



        ctx.fillStyle = grd;

        xp = cw / 2 + R * Math.cos(apRad);
        yp = ch / 2 + R * Math.sin(apRad);
        xf = cw / 2 + R * Math.cos(afRad);
        yf = ch / 2 + R * Math.sin(afRad);



        grd = ctx.createLinearGradient(xp, yp, xf, yf);
        grd.addColorStop(0, "hsl(" + (ap + angleIncrement ) + ",100%,90%)");
        grd.addColorStop(1, "hsl(" + (af + angleIncrement ) + ",100%,90%)");


      ctx.fill();
        
      }
      requestId = window.requestAnimationFrame(draw);
    }

  function start() {
    requestId = window.requestAnimationFrame(draw);
    stopped = false;
  }

  function stopAnim() {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
    }
    stopped = true;
  }

  window.addEventListener("load", start(), false);
  c.addEventListener("click", function() {
    (stopped == true) ? start(): stopAnim();
  }, false);
}


function plusLoader (){

  var c = document.getElementById("plus-loader");
  var ctx = c.getContext("2d");

  var cw = c.width = 120;
  var ch = c.height = 120;
  var R = 200;
  var colorsLength = 6;
  var A = 360 / colorsLength;
  var angleIncrement = 0;

  var grd, ap, af, xp, yp, xf, yf;
  var rad = (Math.PI / 240);
  ctx.lineWidth = 25;

  function draw() {

      if (angleIncrement >= 360) {
        angleIncrement = 0;
      } else {
        angleIncrement++;
      }

      for (var i = 0; i < colorsLength; i++) {

        ap = A * i;
        af = A * (i + 1) + .5;

        apRad = rad * ap;
        afRad = rad * af;

        ctx.beginPath();
        // ctx.arc(cw / 2, ch / 2, R, apRad, afRad);
        ctx.font = "300px Montserrat";
      ctx.moveTo(50,0);
      ctx.lineTo(70,0);
      ctx.lineTo(70,50);
      ctx.lineTo(120,50);
      ctx.lineTo(120,70);
      ctx.lineTo(70,70);
      ctx.lineTo(70,120);
      ctx.lineTo(50,120);
      ctx.lineTo(50,70);
      ctx.lineTo(0,70);
      ctx.lineTo(0,50);
      ctx.lineTo(50,50);



        ctx.fillStyle = grd;

        xp = cw / 2 + R * Math.cos(apRad);
        yp = ch / 2 + R * Math.sin(apRad);
        xf = cw / 2 + R * Math.cos(afRad);
        yf = ch / 2 + R * Math.sin(afRad);



        grd = ctx.createLinearGradient(xp, yp, xf, yf);
        grd.addColorStop(0, "hsl(" + (ap + angleIncrement ) + ",100%,90%)");
        grd.addColorStop(1, "hsl(" + (af + angleIncrement ) + ",100%,90%)");


      ctx.fill();
        
      }
      requestId = window.requestAnimationFrame(draw);
    }

  function start() {
    requestId = window.requestAnimationFrame(draw);
    stopped = false;
  }

  function stopAnim() {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
    }
    stopped = true;
  }

  window.addEventListener("load", start(), false);
  c.addEventListener("click", function() {
    (stopped == true) ? start(): stopAnim();
  }, false);
}





function rectGradient(){

  var c = document.getElementById("wave");
  var ctx = c.getContext("2d");

  var cw = c.width = 800;
  var ch = c.height = 250;
  var R = 200;
  var colorsLength = 6;
  var A = 360 / colorsLength;
  var angleIncrement = 0;

  var grd, ap, af, xp, yp, xf, yf;
  var rad = (Math.PI / 240);
  ctx.lineWidth = 25;

  function draw() {

      if (angleIncrement >= 360) {
        angleIncrement = 0;
      } else {
        angleIncrement++;
      }

      for (var i = 0; i < colorsLength; i++) {

        ap = A * i;
        af = A * (i + 1) + .5;

        apRad = rad * ap;
        afRad = rad * af;

        ctx.beginPath();

        ctx.moveTo(0,50);
        ctx.quadraticCurveTo(50, 0, 100, 50);
        ctx.quadraticCurveTo(150, 100, 200, 50);
        ctx.quadraticCurveTo(250, 0, 300, 50);
        ctx.quadraticCurveTo(350, 100, 400, 50);
        ctx.quadraticCurveTo(450, 0, 500, 50);
        ctx.quadraticCurveTo(550, 100, 600, 50);
        ctx.quadraticCurveTo(650, 0, 700, 50);
        ctx.quadraticCurveTo(750, 100, 800, 50);
        ctx.lineTo(800,200);
        ctx.quadraticCurveTo(750, 250, 700, 200);
        ctx.quadraticCurveTo(650, 150, 600, 200);
        ctx.quadraticCurveTo(550, 250, 500, 200);
        ctx.quadraticCurveTo(450, 150, 400, 200);
        ctx.quadraticCurveTo(350, 250, 300, 200);
        ctx.quadraticCurveTo(250, 150, 200, 200);
        ctx.quadraticCurveTo(150, 250, 100, 200);
        ctx.quadraticCurveTo(50, 150, 0, 200);
        ctx.lineTo(0,50);


        ctx.fillStyle = grd;

        xp = cw / 2 + R * Math.cos(apRad);
        yp = ch / 2 + R * Math.sin(apRad);
        xf = cw / 2 + R * Math.cos(afRad);
        yf = ch / 2 + R * Math.sin(afRad);



        grd = ctx.createLinearGradient(xp, yp, xf, yf);
        grd.addColorStop(0, "hsl(" + (ap + angleIncrement ) + ",100%,90%)");
        grd.addColorStop(1, "hsl(" + (af + angleIncrement ) + ",100%,90%)");


      ctx.fill();
        
      }
      requestId = window.requestAnimationFrame(draw);
    }

  function start() {
    requestId = window.requestAnimationFrame(draw);
    stopped = false;
  }

  function stopAnim() {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
    }
    stopped = true;
  }

  window.addEventListener("load", start(), false);
  c.addEventListener("click", function() {
    (stopped == true) ? start(): stopAnim();
  }, false);
}
