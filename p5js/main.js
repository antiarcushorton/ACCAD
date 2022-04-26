// author: Marcus Horton
// description of your program: A visualization of passing in the NBA, using many variables to separate tiers of playmakers.
// how to interact: Use menu boxes to change y-axis, z-axis and side graph. Use arrow keys to navigate through teams. Use mouse to hover over bar graph and see specific player. Use right and left click to zoom in and out/move around 3D space.
// Reference List: The Art of Passing, Jon Bois, NBA.com/stats
let boxSize = 450;
let table, font1;
let canvasW, canvasH;
let numRows, numCols;
let name = [],
  team = [],
  games = [],
  minutes = [],
  passes_made = [],
  assists = [],
  secondary_assists = [],
  potential_assists = [],
  points_created = [],
  adjusted_assists = [],
  avg_touches = [],
  sec_per = [],
  dribble_per = [];
let c;
let hoverC = "#ffff00";

let instance1 = function (vis) {
  vis.preload = function () {
    table = vis.loadTable("assets/NBA_final.csv", "csv", "header");
    font1 = vis.loadFont("assets/font.ttf");
  };
  vis.setup = function () {
    canvasW = vis.windowWidth * (3 / 5);
    canvasH = vis.windowHeight * (4 / 5);
    myCanvas = vis.createCanvas(canvasW, canvasH, vis.WEBGL);
    myCanvas.position(vis.windowWidth * (2 / 5), 0);

    //create cam
    vis.createEasyCam();
    document.oncontextmenu = () => false;

    //get data info
    numRows = table.getRowCount();
    numCols = table.getColumnCount();

    //load data
    for (let i = 0; i < numRows; i++) {
      name[i] = table.getString(i, 0);
      team[i] = table.getString(i, 1);
      games[i] = table.getNum(i, 2);
      minutes[i] = table.getNum(i, 5);
      passes_made[i] = table.getNum(i, 6);
      assists[i] = table.getNum(i, 8);
      secondary_assists[i] = table.getNum(i, 9);
      potential_assists[i] = table.getNum(i, 10);
      points_created[i] = table.getNum(i, 11);
      adjusted_assists[i] = table.getNum(i, 12);
      avg_touches[i] = table.getNum(i, 13);
      sec_per[i] = table.getNum(i, 14);
      dribble_per[i] = table.getNum(i, 15);
    }
    //test: vis.print(season[4])
    vis.cursor(vis.HAND);
    vis.textFont(font1);
  };

  vis.draw = function () {
    vis.background("black");
    vis.noFill();
    vis.stroke("white");
    vis.strokeWeight(0.75);
    vis.box(boxSize);

    vis.mainGraph();
  };
  vis.mainGraph = function () {
    //map initial points to 3D space, change based on variables selected
    for (let i = 0; i < numRows; i++) {
      x = vis.map(minutes[i], 20.1, 37.9, -boxSize / 2, boxSize / 2);
      if (yVal == 0) {
        y = vis.map(assists[i], 10.8, 0.3, -boxSize / 2, boxSize / 2);
      } else if (yVal == 1) {
        y = vis.map(potential_assists[i], 19.6, 0.8, -boxSize / 2, boxSize / 2);
      } else if (yVal == 2) {
        y = vis.map(points_created[i], 27.2, 0.8, -boxSize / 2, boxSize / 2);
      }
      if (zVal == 0) {
        z = vis.map(avg_touches[i], 17, 100.1, -boxSize / 2, boxSize / 2);
      } else if (zVal == 1) {
        z = vis.map(sec_per[i], 1.19, 6.3, -boxSize / 2, boxSize / 2);
      } else if (zVal == 2) {
        z = vis.map(dribble_per[i], 0.26, 5.79, -boxSize / 2, boxSize / 2);
      }
      //size of point
      let size = vis.map(passes_made[i], 11.5, 73.4, 0.3, 15);
      //here we go
      vis.push();
      vis.translate(x, y, z);
      //change color if player is hovered over
      if(hoverInd && name[i] == hoverName){
         c = hoverC;
         }
      else{
      for (let j = 0; j < 30; j++) {
        if (team[i] == teamArray[j]) {
          c = colorArray[j];
        }
      }}
      //either fill every point or just team-specific
      if(teamVal == 0){
        vis.fill(c);
      }
      else{
        if(teamArray[teamVal - 1] == team[i]){
          vis.fill(c);
        }
        else{
          vis.noFill();
        }
      }
      vis.strokeWeight(0);
      vis.sphere(size);
      vis.pop();
    }
    vis.push();
    vis.translate(-boxSize / 2, -boxSize / 2, -boxSize / 2);
    vis.label();
    vis.pop();
  };
  vis.label = function () {
    //x-axis
    vis.fill("white");
    vis.textSize(12.5);
    vis.textAlign(vis.LEFT, vis.TOP);
    vis.push();
    vis.translate(0, boxSize, boxSize);
    vis.text("MINUTES PER GAME", 5, -15);
    vis.pop();

    vis.push();
    vis.textSize(10)
    vis.translate(0, boxSize, boxSize);
    vis.textAlign(vis.CENTER, vis.TOP);
    vis.text("20", 0, 0);
    vis.text("29", boxSize / 2, 0);
    vis.text("38", boxSize, 0);
    vis.pop();

    //y-axis
    vis.push();
    vis.translate(0, 0, boxSize);
    vis.rotate(vis.radians(90));
    vis.textSize(12.5);
    vis.fill("white");
    if (yVal == 0) {
      vis.text("ASSISTS", 5, -15);
    } else if (yVal == 1) {
      vis.text("POTENTIAL ASSISTS", 5, -15);
    } else if (yVal == 2) {
      vis.text("POINTS CREATED", 5, -15);
    }
    vis.pop();

    vis.push();
    vis.textAlign(vis.RIGHT, vis.CENTER);
    vis.translate(0, 0, boxSize);
    vis.textSize(10);
    if (yVal == 0) {
      vis.text("11", -5, 0);
      vis.text("0", -5, boxSize);
      vis.text("5.5", -5, boxSize / 2);
    } else if (yVal == 1) {
      vis.text("20.6", -5, 0);
      vis.text("0.8", -5, boxSize);
      vis.text("10.7", -5, boxSize / 2);
    } else if (yVal == 2) {
      vis.text("27.2", -5, 0);
      vis.text("0.8", -5, boxSize);
      vis.text("14", -5, boxSize / 2);
    }
    vis.pop();

    vis.push();
    vis.textAlign(vis.RIGHT, vis.CENTER);
    vis.translate(0, 0, 0);
    vis.rotateY(vis.radians(-90));
    vis.textSize(10);
    if (yVal == 0) {
      vis.text("ASSISTS", 5, -15);
      vis.text("11", -5, 0);
      vis.text("0", -5, boxSize);
      vis.text("5.5", -5, boxSize / 2);
    } else if (yVal == 1) {
      vis.text("POTENTIAL ASSISTS", 5, -15);
      vis.text("20.6", -5, 0);
      vis.text("0.8", -5, boxSize);
      vis.text("10.7", -5, boxSize / 2);
    } else if (yVal == 2) {
      vis.text("POINTS CREATED", 5, -15);
      vis.text("27.2", -5, 0);
      vis.text("0.8", -5, boxSize);
      vis.text("14", -5, boxSize / 2);
    }
    vis.pop();

    //z-axis
    vis.textAlign(vis.LEFT, vis.CENTER);
    vis.push();
    vis.translate(0, boxSize, 0);
    vis.rotateY(vis.radians(-90));
    vis.textSize(12.5);
    if (zVal == 0) {
      vis.text("TOUCHES", 5, -15);
    } else if (zVal == 1) {
      vis.text("SECONDS PER TOUCH", 5, -15);
    } else if (zVal == 2) {
      vis.text("DRIBBLES PER TOUCH", 5, -15);
    }
    vis.pop();

    vis.push();
    vis.translate(0, boxSize, 0);
    vis.rotateY(vis.radians(-90));
    vis.textAlign(vis.CENTER, vis.TOP);
    vis.textSize(8);
    if (zVal == 0) {
      vis.text("17", 0, 0);
      vis.text("100", boxSize, 0);
      vis.text("58.5", boxSize / 2, 0);
    } else if (zVal == 1) {
      vis.text("1.2", 0, 0);
      vis.text("6.3", boxSize, 0);
      vis.text("3.75", boxSize / 2, 0);
    } else if (zVal == 2) {
      vis.text("0.3", 0, 0);
      vis.text("5.8", boxSize, 0);
      vis.text("3.05", boxSize / 2, 0);
    }
    vis.pop();
  };
};

new p5(instance1);

let teamArray = [
  "ATL",
  "BKN",
  "BOS",
  "CHA",
  "CHI",
  "CLE",
  "DAL",
  "DEN",
  "DET",
  "GSW",
  "HOU",
  "IND",
  "LAC",
  "LAL",
  "MEM",
  "MIA",
  "MIL",
  "MIN",
  "NOP",
  "NYK",
  "OKC",
  "ORL",
  "PHI",
  "PHX",
  "POR",
  "SAC",
  "SAS",
  "TOR",
  "UTA",
  "WAS",
];

let colorArray = [
  "#e03a3e",
  "#ffffff",
  "#007A33",
  "#00788C",
  "#CE1141",
  "#FDBB30",
  "#00538C",
  "#8B2131",
  "#bec0c2",
  "#ffc72c",
  "#C4CED4",
  "#BEC0C2",
  "#c8102E",
  "#552583",
  "#5D76A9",
  "#F9A01B",
  "#EEE1C6",
  "#78BE20",
  "#C8102E",
  "#F58426",
  "#ef3b24",
  "#0077c0",
  "#ed174c",
  "#e56020",
  "#E03A3E",
  "#5a2d81",
  "#c4ced4",
  "#ce1141",
  "#F9A01B",
  "#e31837",
];
