let teamVal = 0;
let gVal = 0;
let dimes, touch, mi;
let c2, c3;
let numRows2, numCols2;
let name2 = [],
  team2 = [],
  apg = [];
let name3 = [],
  team3 = [],
  tpg = [];
let name4 = [],
  team4 = [],
  mpg = [];
let hoverInd;
let hoverName;
let graphText;
let instance2 = function (side) {
  side.preload = function () {
    //need separate data for main NBA graphs
    dimes = side.loadTable("assets/assists.csv", "csv", "header");
    touch = side.loadTable("assets/touches.csv", "csv", "header");
    mi = side.loadTable("assets/minutes.csv", "csv", "header");
  };
  side.setup = function () {
    myCanvas = side.createCanvas(
      side.windowWidth * (2 / 5),
      side.windowHeight * (4 / 5)
    );
    myCanvas.position(0, 0);

    side.textFont(font1);

    //get data info
    numRows2 = dimes.getRowCount();
    numCols2 = dimes.getColumnCount();
    //load data
    for (let i = 0; i < numRows2; i++) {
      name2[i] = dimes.getString(i, 0);
      team2[i] = dimes.getString(i, 1);
      apg[i] = dimes.getNum(i, 2);
    }

    //get data info
    numRows3 = touch.getRowCount();
    numCols3 = touch.getColumnCount();
    //load data
    for (let i = 0; i < numRows3; i++) {
      name3[i] = touch.getString(i, 0);
      team3[i] = touch.getString(i, 1);
      tpg[i] = touch.getNum(i, 2);
    }

    //get data info
    numRows4 = mi.getRowCount();
    numCols4 = mi.getColumnCount();
    //load data
    for (let i = 0; i < numRows4; i++) {
      name4[i] = mi.getString(i, 0);
      team4[i] = mi.getString(i, 1);
      mpg[i] = mi.getNum(i, 2);
    }

    side.select();
  };
  side.draw = function () {
    side.background("black");
    side.cursor(side.ARROW);

    graphText = "Select your graph: ";
    side.fill("#ffffff");
    side.textSize(15);
    side.textAlign(side.LEFT, side.CENTER);
    side.text(graphText, 15, 255);

    side.labels();
    side.sideGraph();
  };

  side.select = function () {
    //menu for side graph variable
    side.textAlign(side.CENTER);
    //change y value
    selG = side.createSelect();
    selG.position(135, 247);
    selG.option("Assists");
    selG.option("Touches");
    selG.option("Minutes");
    selG.selected("Assists");
    selG.changed(side.mySelectEventG);
  };

  side.mySelectEventG = function () {
    let item = selG.value();
    if (item == "Assists") {
      gVal = 0;
    } else if (item == "Touches") {
      gVal = 1;
    } else if (item == "Minutes") {
      gVal = 2;
    }
  };

  side.keyPressed = function () {
    //set toggle info for teams
    if (teamVal < 30) {
      if (side.keyCode === side.RIGHT_ARROW) {
        teamVal++;
      }
    } else {
      if (side.keyCode === side.RIGHT_ARROW) {
        teamVal = 0;
      }
    }
    if (teamVal > 0) {
      if (side.keyCode === side.LEFT_ARROW) {
        teamVal--;
      }
    } else {
      if (side.keyCode === side.LEFT_ARROW) {
        teamVal = 30;
      }
    }
  };

  side.sideGraph = function () {
    if (teamVal == 0) {
      //nba's top 30 assist/touch/minute men in 2021-22
      side.fill("#ffffff");
      side.textSize(20);
      if (gVal == 0) {
        side.text(
          "ASSIST LEADERS, 2021-22 REGULAR SEASON (TEAM: ALL)",
          15,
          side.height / 2 + 20
        );
      } else if (gVal == 1) {
        side.text(
          "TOUCH LEADERS, 2021-22 REGULAR SEASON (TEAM: ALL)",
          15,
          side.height / 2 + 20
        );
      } else {
        side.text(
          "MINUTE LEADERS, 2021-22 REGULAR SEASON (TEAM: ALL)",
          15,
          side.height / 2 + 20
        );
      }
      let hH;
      let padding = 15;
      let gap = (side.width - padding) / 30;
      side.rectMode(side.CORNER);
      for (let i = 0; i < 30; i++) {
        //apg
        let xPosH = padding + i * gap;
        let yPosH = side.height / 2 + 230; //center
        if (gVal == 0) {
          hH = side.map(apg[i], side.min(apg), side.max(apg), 50, 180);
        } else if (gVal == 1) {
          hH = side.map(tpg[i], side.min(tpg), side.max(tpg), 50, 180);
        } else if (gVal == 2) {
          hH = side.map(mpg[i], side.min(mpg), side.max(mpg), 50, 180);
        }
        let wH = gap - 4;
        
        if(gVal == 0){
          for (let j = 0; j < 30; j++) {
          if (team2[i] == teamArray[j]) {
            c2 = colorArray[j];
          }
        }
        }
        else if(gVal == 1){
          for (let j = 0; j < 30; j++) {
          if (team3[i] == teamArray[j]) {
            c2 = colorArray[j];
          }
        }
        }
        else if(gVal == 2){
          for (let j = 0; j < 30; j++) {
          if (team4[i] == teamArray[j]) {
            c2 = colorArray[j];
          }
        }
        }
        side.fill(c2);
        side.noStroke();
        side.push();
        side.translate(xPosH + wH, yPosH);
        side.rotate(side.radians(180));
        side.rect(0, 0, wH, hH);
        side.pop();
        //hover
        let hoverDist = side.dist(side.mouseX, side.mouseY, xPosH, yPosH);
        if (
          side.mouseX > xPosH &&
          side.mouseX < xPosH + wH &&
          side.mouseY > yPosH - hH &&
          side.mouseY < yPosH
        ) {
          side.cursor(side.CROSS);
          side.textAlign(side.LEFT);
          side.textSize(18);
          side.fill("#ffffff");
          if (gVal == 0) {
            side.text(
              name2[i] + ", " + team2[i] + ": " + apg[i] + " assists per game",
              15,
              side.height / 2 + 252
            );
          } else if (gVal == 1) {
            side.text(
              name3[i] + ", " + team3[i] + ": " + tpg[i] + " touches per game",
              15,
              side.height / 2 + 252
            );
          } else if (gVal == 2) {
            side.text(
              name4[i] + ", " + team4[i] + ": " + mpg[i] + " minutes per game",
              15,
              side.height / 2 + 252
            );
          }
          if(gVal == 0){
            hoverName = name2[i];
          }
          else if(gVal == 1){
            hoverName = name3[i];
          }
          else if(gVal == 2){
            hoverName = name4[i];
          }
          hoverInd = true;
        }
        // else{
        //   hoverInd = false;
        // }
      }
    } else {
      side.fill("#ffffff");
      side.textSize(20);
      if(gVal == 0){
        side.text(
        "ASSIST LEADERS, 2021-22 REGULAR SEASON (TEAM: " +
          teamArray[teamVal - 1] +
          ")",
        15,
        side.height / 2 + 20
      );
      }
      else if(gVal == 1){
        side.text(
        "TOUCH LEADERS, 2021-22 REGULAR SEASON (TEAM: " +
          teamArray[teamVal - 1] +
          ")",
        15,
        side.height / 2 + 20
      );
      }
      else if(gVal == 2){
        side.text(
        "MINUTE LEADERS, 2021-22 REGULAR SEASON (TEAM: " +
          teamArray[teamVal - 1] +
          ")",
        15,
        side.height / 2 + 20
      );
      }
      let teamCountAssists = [];
      let teamCountTouches = [];
      let teamCountMinutes = [];
      let teamCountPlayer = [];
      let indexTracker = 0;
      let teamColor = colorArray[teamVal - 1];
      for (let t = 0; t < numRows; t++) {
        if (team[t] == teamArray[teamVal - 1]) {
          teamCountAssists[indexTracker] = assists[t];
          teamCountTouches[indexTracker] = avg_touches[t];
          teamCountMinutes[indexTracker] = minutes[t];
          teamCountPlayer[indexTracker] = name[t];
          indexTracker++;
        }
      }
      let padding = 15;
      let gap = (side.width - padding) / indexTracker;
      side.rectMode(side.CORNER);
      for (let i = 0; i < indexTracker; i++) {
        //apg
        let hH;
        let xPosH = padding + i * gap;
        let yPosH = side.height / 2 + 230; //center
        if(gVal == 0){
          hH = side.map(teamCountAssists[i], 0, 10.8, 25, 180);
        }
        else if(gVal == 1){
          hH = side.map(teamCountTouches[i], 0, 101, 25, 180);
        }
        else if(gVal == 2){
          hH = side.map(teamCountMinutes[i], 20, 40, 25, 180);
        }
        let wH = gap - 4;
        c3 = colorArray[teamVal - 1];
        side.fill(c3);
        side.noStroke();
        side.push();
        side.translate(xPosH + wH, yPosH);
        side.rotate(side.radians(180));
        side.rect(0, 0, wH, hH);
        side.pop();

        //hover
        let hoverDist = side.dist(side.mouseX, side.mouseY, xPosH, yPosH);
        if (
          side.mouseX > xPosH &&
          side.mouseX < xPosH + wH &&
          side.mouseY > yPosH - hH &&
          side.mouseY < yPosH
        ) {
          side.cursor(side.CROSS);
          side.textAlign(side.LEFT);
          side.textSize(18);
          side.fill("#ffffff");
          if(gVal == 0){
            side.text(
            teamCountPlayer[i] +
              ": " +
              teamCountAssists[i] +
              " assists per game",
            15,
            side.height / 2 + 252
          );
          }
          else if(gVal == 1){
            side.text(
            teamCountPlayer[i] +
              ": " +
              teamCountTouches[i] +
              " touches per game",
            15,
            side.height / 2 + 252
          );
          }
          else if(gVal == 2){
            side.text(
            teamCountPlayer[i] +
              ": " +
              teamCountMinutes[i] +
              " minutes per game",
            15,
            side.height / 2 + 252
          );
          }
          hoverInd = true;
          hoverName = teamCountPlayer[i];
        }
        // else{
        //   hoverInd = false;
        // }
      }
    }
  };

  side.labels = function () {
    side.fill("#ffffff");
    side.textSize(35);
    side.text("WHAT MAKES A GOOD PASSER?", 28, 43);
    side.textSize(18);
    side.text("Let's find out.", 28, 75);
    side.text("__________________________________", 28, 85);
    side.fill("#ffffff");
    side.textSize(16.5);
    side.text(
      "'I’m saying, like, if I’m on the court and I throw a pass, the ball that I’ve thrown will lead a teammate right where he needs to go, before he even knows that that’s the right place to go to.' - LeBron James, 2008",
      28,
      110,
      side.windowWidth * (2 / 5) - 40
    );
    side.textSize(15);
    side.text("(Use arrow keys to navigate through teams) (Size of each point represents passes made per game)", 28, 180, side.windowWidth * (2 / 5) - 40);
  };
};

new p5(instance2);
