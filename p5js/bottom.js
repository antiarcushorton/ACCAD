let sel;
let yWidth, zWidth, yText, zText;
let yVal = 0,
  zVal = 0;
let instance3 = function (bottom) {
  bottom.preload = function () {};
  bottom.setup = function () {
    myCanvas = bottom.createCanvas(
      bottom.windowWidth,
      bottom.windowHeight * (1 / 5)
    );
    myCanvas.position(0, (bottom.windowHeight * 4) / 5);
    bottom.textFont(font1);
    bottom.select();

    bottom.textFont(font1);
  };
  bottom.draw = function () {
    bottom.background("black");

    yText = "Select your y-axis: ";
    zText = "Select your z-axis: ";
    //bottom.print(bottom.textWidth(yText));
    bottom.fill("#ffffff");
    bottom.textSize(15);
    bottom.textAlign(bottom.LEFT, bottom.CENTER);
    bottom.text(yText, 10, 58.5);
    bottom.text(zText, 10, 108.5);

    bottom.glossaryInfo();
  };
  bottom.select = function () {
    bottom.textAlign(bottom.CENTER);
    bottom.background(200);
    //change y value
    selY = bottom.createSelect();
    selY.position(130, (bottom.windowHeight * 4) / 5 + 50);
    selY.option("Assists");
    selY.option("Potential Assists");
    selY.option("Points Created");
    selY.selected("Assists");
    selY.changed(bottom.mySelectEventY);
    //change z value
    selZ = bottom.createSelect();
    selZ.position(130, (bottom.windowHeight * 4) / 5 + 100);
    selZ.option("Touches");
    selZ.option("Seconds per Touch");
    selZ.option("Dribbles per Touch");
    selZ.selected("Touches");
    selZ.changed(bottom.mySelectEventZ);
  };
  //menus for changing y and z axis
  bottom.mySelectEventY = function () {
    let item = selY.value();
    if (item == "Assists") {
      yVal = 0;
    } else if (item == "Potential Assists") {
      yVal = 1;
    } else if (item == "Points Created") {
      yVal = 2;
    }
  };
  bottom.mySelectEventZ = function () {
    let item = selZ.value();
    if (item == "Touches") {
      zVal = 0;
    } else if (item == "Seconds per Touch") {
      zVal = 1;
    } else if (item == "Dribbles per Touch") {
      zVal = 2;
    }
  };
  //descriptions of variable meanings
  bottom.glossaryInfo = function () {
    bottom.fill("#ffffff");
    bottom.textSize(15);
    //y-axis
    if (yVal == 0) {
      bottom.text(
        ":   The number of assists -- passes that lead directly to a made basket -- by a player.",
        273,
        58.5
      );
    } else if (yVal == 1) {
      bottom.text(
        ":   The number of a player's passes to a teammate who shoots within 1 dribble.",
        273,
        58.5
      );
    }  else if (yVal == 2) {
      bottom.text(
        ":   Points created by a player through their assists.",
        273,
        58.5
      );
    }
    
    //z-axis
    if (zVal == 0) {
      bottom.text(
        ":   The number of times a player touches and posseses the ball during the game.",
        290,
        108.5
      );
    } else if (zVal == 1) {
      bottom.text(
        ":   The average number of seconds per touch by a player.",
        290,
        108.5
      );
    }  else if (zVal == 2) {
      bottom.text(
        ":   The average number of dribbles a player takes per touch.",
        290,
        108.5
      );
    }
    
    bottom.textSize(13);
    bottom.textAlign(bottom.LEFT, bottom.CENTER);
    bottom.stroke("#ffffff");
    bottom.line(820, 0, 820, 150)
    bottom.noStroke();
    bottom.text(
        "\nUSER NOTES:\n- The x-axis always represents minutes per game.\n- Hover over bar graph to view individual players.\n- To qualify for this visualization, players must have played at least 20 minutes per game in more than 25\n games during the 2021-22 NBA regular season.\n- Right click and hold to zoom in and out of 3D graph, left click and hold to move 3D graph.\n\nINSPIRATION CREDIT: Tyler Parker (The Ringer), Stephanie Wittpenn (ACCAD 5150), Jon Bois (Secret Base)",
        850,
        58.5
      );
    
  };
};

new p5(instance3);
