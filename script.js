var money = 999;
var food = 0;
var water = 0;
var feed = 0;
var cooking = 0;
var tent = 0;
var bedding = 0;
var axle = 0;
var wheel = 0;
var spoke = 0;
var pins = 0;
var yoke = 0;
var shoe = 0;
var tongue = 0;
var cover = 0;
var blanket = 0;
var blacksmith = 0;
var carpenter = 0;
var farmer = 0;
var rifle = 0;
var chain = 0;
var rope = 0;
var pistol = 0;
var bullets = 0;
var seed = 0;
var sewing = 0;
var sewMachine = 0;
var cloth = 0;
var cuttings = 0;
var books = 0;
var lantern = 0;
var stove = 0;
var banjo = 0;
var harmonica = 0;
var silverware = 0;
var china = 0;
var weight = 2500;
var wagonPrice = 0;
var livestockPrice = 0;


document.getElementById("moneyBox").addEventListener("keyup", function() {
  var moneyBoxValue = Number(document.getElementById("moneyBox").value);
  money = moneyBoxValue - wagonPrice;
  document.getElementById("remaining").innerHTML = "$" + money.toFixed(2);
});

function chooseWagon(){
  var chosenWagon = document.getElementById("wagonChoice").value;
  //document.getElementById("wagonSelected").innerHTML = "You selected: " + chosenWagon;
  if(chosenWagon == "Schooner"){
    wagonPrice = 90;
    money -= wagonPrice;
    weight = 2500;
  } else if (chosenWagon == "Farm"){
    wagonPrice = 60;
    money -= wagonPrice;
    weight = 2000;
  };
  refreshMoney();
};

function chooseLivestock(){
  var chosenLivestock = document.getElementById("livestockType").value;
  //document.getElementById("wagonSelected").innerHTML = "You selected: " + chosenWagon;
  if(chosenLivestock == "Oxen"){
    livestockPrice = 200;
    money -= livestockPrice;
  } else if (chosenLivestock == "Mule"){
    livestockPrice = 360;
    money -= livestockPrice;
  };
  refreshMoney();
};



function refreshMoney (){
  document.getElementById("remaining").innerHTML = "$" + money.toFixed(2);
  document.getElementById("food").innerHTML = food;
  document.getElementById("water").innerHTML = water;
  document.getElementById("feed").innerHTML = feed;
  document.getElementById("cooking").innerHTML = cooking;
  document.getElementById("tent").innerHTML = tent;
  document.getElementById("bedding").innerHTML = bedding;
  document.getElementById("axle").innerHTML = axle;
  document.getElementById("wheel").innerHTML = wheel;
  document.getElementById("spoke").innerHTML = spoke;
  document.getElementById("pins").innerHTML = pins;
  document.getElementById("yoke").innerHTML = yoke;
  document.getElementById("shoe").innerHTML = shoe;
  document.getElementById("tongue").innerHTML = tongue;
  document.getElementById("cover").innerHTML = cover;
  document.getElementById("blanket").innerHTML = blanket;
  document.getElementById("blacksmith").innerHTML = blacksmith;
  document.getElementById("carpenter").innerHTML = carpenter;
  document.getElementById("farmer").innerHTML = farmer;
  document.getElementById("rifle").innerHTML = rifle;
  document.getElementById("chain").innerHTML = chain;
  document.getElementById("rope").innerHTML = rope;
  document.getElementById("pistol").innerHTML = pistol;
  document.getElementById("bullets").innerHTML = bullets;
  document.getElementById("seed").innerHTML = seed;
  document.getElementById("sewing").innerHTML = sewing;
  document.getElementById("sewMachine").innerHTML = sewMachine;
  document.getElementById("cloth").innerHTML = cloth;
  document.getElementById("cuttings").innerHTML = cuttings;
  document.getElementById("books").innerHTML = books;
  document.getElementById("lantern").innerHTML = lantern;
  document.getElementById("stove").innerHTML = stove;
  document.getElementById("banjo").innerHTML = banjo;
  document.getElementById("harmonica").innerHTML = harmonica;
  document.getElementById("silverware").innerHTML = silverware;
  document.getElementById("china").innerHTML = china;
  document.getElementById("remainingWeight").innerHTML = weight.toFixed();
};

function buyFood(number){
  var Cost = .25
  var itemWeight = 1
  if ((money >= Cost * number) && (food + number >= 0) && (itemWeight * number <= weight)){
    money -= Cost * number;
    food += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyWater(number){
  var Cost = 4
  var itemWeight = 500
  if ((money >= Cost * number) && (water + number >= 0) && (itemWeight*number <= weight)){
    money -= Cost * number;
    water += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyFeed(number){
  var Cost = .1
  var itemWeight = 1
  if ((money >= Cost * number) && (feed + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    feed += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyCooking(number){
  var Cost = 8
  var itemWeight = 20
  if ((money >= Cost * number) && (cooking + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    cooking += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyTent(number){
  var Cost = 7;
  var itemWeight = 40;
  if ((money >= Cost * number) && (tent + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    tent += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyBedding(number){
  var Cost = 5
  var itemWeight = 20
  if ((money >= Cost * number) && (bedding + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    bedding += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyAxle(number){
  var Cost = 20
  var itemWeight = 200
  if ((money >= Cost * number) && (axle + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    axle += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyWheel(number){
  var Cost = 25
  var itemWeight = 100
  if ((money >= Cost * number) && (wheel + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    wheel += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buySpoke(number){
  var Cost = 3
  var itemWeight = 5
  if ((money >= Cost * number) && (spoke + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    spoke += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyPins(number){
  var Cost = 5
  var itemWeight = 5
  if ((money >= Cost * number) && (pins + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    pins += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyYoke(number){
  var Cost = 10;
  var itemWeight = 25;
  if ((money >= Cost * number) && (yoke + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    yoke += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyShoe(number){
  var Cost = 2;
  var itemWeight = 2;
  if ((money >= Cost * number) && (shoe + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    shoe += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyTongue(number){
  var Cost = 15;
  var itemWeight = 100;
  if ((money >= Cost * number) && (tongue + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    tongue += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyCover(number){
  var Cost = 20;
  var itemWeight = 25;
  if ((money >= Cost * number) && (cover + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    cover += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyBlanket(number){
  var Cost = 2;
  var itemWeight = 5;
  if ((money >= Cost * number) && (blanket + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    blanket += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyBlacksmith(number){
  var Cost = 40;
  var itemWeight = 150;
  if ((money >= Cost * number) && (blacksmith + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    blacksmith += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyCarpenter(number){
  var Cost = 40;
  var itemWeight = 50;
  if ((money >= Cost * number) && (carpenter + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    carpenter += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyFarmer(number){
  var Cost = 40;
  var itemWeight = 200;
  if ((money >= Cost * number) && (farmer + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    farmer += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyRifle(number){
  var Cost = 50;
  var itemWeight = 10;
  if ((money >= Cost * number) && (rifle + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    rifle += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyChain(number){
  var Cost = 5;
  var itemWeight = 50;
  if ((money >= Cost * number) && (chain + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    chain += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyRope(number){
  var Cost = 5;
  var itemWeight = 30;
  if ((money >= Cost * number) && (rope + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    rope += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyPistol(number){
  var Cost = 30;
  var itemWeight = 5;
  if ((money >= Cost * number) && (pistol + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    pistol += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyBullets(number){
  var Cost = 3;
  var itemWeight = 3;
  if ((money >= Cost * number) && (bullets + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    bullets += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buySeed(number){
  var Cost = 10;
  var itemWeight = 50;
  if ((money >= Cost * number) && (seed + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    seed += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buySewing(number){
  var Cost = 2;
  var itemWeight = 1;
  if ((money >= Cost * number) && (sewing + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    sewing += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buySewMachine(number){
  var Cost = 25;
  var itemWeight = 40;
  if ((money >= Cost * number) && (sewMachine + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    sewMachine += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyCloth(number){
  var Cost = 10;
  var itemWeight = 20;
  if ((money >= Cost * number) && (cloth + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    cloth += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyCuttings(number){
  var Cost = 25;
  var itemWeight = 50;
  if ((money >= Cost * number) && (cuttings + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    cuttings += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyBooks(number){
  var Cost = 15;
  var itemWeight = 20;
  if ((money >= Cost * number) && (books + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    books += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyLantern(number){
  var Cost = 5;
  var itemWeight = 5;
  if ((money >= Cost * number) && (lantern + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    lantern += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyStove(number){
  var Cost = 25;
  var itemWeight = 150;
  if ((money >= Cost * number) && (stove + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    stove += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyBanjo(number){
  var Cost = 10;
  var itemWeight = 5;
  if ((money >= Cost * number) && (banjo + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    banjo += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyHarmonica(number){
  var Cost = 2;
  var itemWeight = 1;
  if ((money >= Cost * number) && (harmonica + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    harmonica += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buySilverware(number){
  var Cost = 15;
  var itemWeight = 10;
  if ((money >= Cost * number) && (silverware + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    silverware += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};

function buyChina(number){
  var Cost = 40;
  var itemWeight = 20;
  if ((money >= Cost * number) && (china + number >= 0)&& (itemWeight * number <= weight)){
    money -= Cost * number;
    china += number;
    weight -= itemWeight * number;
    refreshMoney();
  };
};
