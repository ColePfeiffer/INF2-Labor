import System.Collections.Generic;

// ########################
// Setup der Textausgabe
// ########################
public static var fieldOption1:GameObject;
public static var fieldOption2:GameObject;
public static var fieldOption3:GameObject;
public static var fieldOption4:GameObject;
public static var fieldPG:GameObject;

// Sind GameObjekte auch direkt zuordbar?
var ifieldOption1:GameObject;
var ifieldOption2:GameObject;
var ifieldOption3:GameObject;
var ifieldOption4:GameObject;
var ifieldPG:GameObject;
fieldOption1 = ifieldOption1;
fieldOption2 = ifieldOption2;
fieldOption3 = ifieldOption3;
fieldOption4 = ifieldOption4;
fieldPG = ifieldPG;

// Zur Bestimmung, ob entsprechendes Feld klickbar ist oder nicht
static var fieldOptionClickable1 : boolean = true;
static var fieldOptionClickable2 : boolean = true;
static var fieldOptionClickable3 : boolean = true;
static var fieldOptionClickable4 : boolean = true;

// #############################################################
// *************************************************************
// ########################
// Wichtige Variablen
// ########################
// *************************************************************
// #############################################################

static var currentPG = new Paragraph(" "); // Hier wird der aktuelle Paragraph (als Objekt) abgespeichert
static var lastPG = new Paragraph(" "); // Hier wird der vorletzte Paragraph (als Objekt) abgespeichert

// Hier die jeweiligen Abschnitte
static var pgHistoryArray = [];
// Hier werden die aktuellen Tags eingereiht
static var tagHistoryArray = [];
// in Modify reinhauen
// counter extern lagern

// Wenn ich die Inhalte ändern möchte, sollte ich wohl nicht mit push arbeiten, oder?
// Oder mit Slice?
/*
console.log(arr.join());
arr.splice(2, 0, "Lene");
console.log(arr.join());

Jani,Hege,Stale,Kai Jim,Borge
Jani,Hege,Lene,Stale,Kai Jim,Borge

UND

var array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
slice(0,3)
[5,10,15]

ODER

var array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
snippet.log("Before: " + array.join(", "));
array.length = 3;
snippet.log("After: " + array.join(", "));
*/



// ########################
// Charakterwerte
// ########################

// müssen durch Startfunktion angepasst werden #wichtig
static var heroStrength:int = 19;
static var heroArmor:int = 1;
static var heroHP:int = 35;

// Aktive Tags; sowohl Inventar als auch Fähigkeiten
var activeTags:String;

// _______________________________________________________________________________________________________________________________________________________________________________________

// ########################
// Erstellen der Abschnitte
// ########################
// siehe auch Spreadsheet

// Vorgeschichte bzw. Charaktererstellung
// Naja, die muss doch anders ablaufen... oder sollte es wohl. Geht auch so mit Variablensetzung im nächsten Abschnitt, aber naja.
// Nur temporär!
var cG001 = new Paragraph("Willkommen. Welche Fähigkeiten bringst du mit?");
var cG002 = new Paragraph("Test Nummero 2");
// Erstellen der Antworten
cG001.addOption("Klettern", "#", cG002);
cG001.addOption("Schwimmen", "#", cG002);
cG001.addOption("Tee trinken", "#", cG002);
// _____________________________________________________________
// Richtige Abschnitte
var pg001 = new Paragraph("Text1");
var pg001a = new Paragraph("Text1 a");
var pg001b = new Paragraph("Text1 b");

var pg002 = new Paragraph("Text 2.");
var pg003 = new Paragraph("Text 3.");
var pg005 = new Paragraph("Text 4.");

// Kampftest
var pg004 = new Paragraph("Oh nein, da sind vier aggressive Hühner, die dich angreifen.", 8, 20, 0);


// pg001
pg001.addOption("Optimistisch", "#", pg001a, pg001b, 50);
pg001.addOption("Kampftest", "#", pg003);

// pg001b
pg001b.addOption("Option 1", "#", pg002);
pg001b.addOption("Option 2", "#", pg002);
pg001b.addOption("Option 3", "#", pg003);

// pg003
pg003.addOption("Kämpfen", "#", pg004);

// pg004
pg004.addOption("Weitergehen", "#", pg002);
pg004.addOption("Erstmal ausruhen", "#", pg003);



static var test4 = new List.<String>();
test4.Add("Save 1");
test4.Add("Save 2");
test4.Add("Save 3");
test4.Add("Save 4");
test4.Add("Save 5");
test4.Add("Save 6");
    

function Start () {
    // Auf den Anfang setzen
    currentPG = pg001;
    fieldPG.GetComponent.<Text>().text = currentPG.txt;
    showOption();
    //yield WaitForSeconds(2);
    //Debug.Log(goBack(test4, 3));
    //Debug.Log(goBack(test4, 8));
}

static function goBack(listToWorkWith:List.<String>, steps:int){
    var list = listToWorkWith;
    var length = list.Count;
    
    if (length-steps<=0){
        listToWorkWith.RemoveRange(1, length-1);
        length = list.Count;
        Debug.Log(length);
        // Gibt einzigen (also den ersten) Eintrag in der Liste aus
        return list[0];
    }
    else{
        listToWorkWith.RemoveRange(length-steps, steps);
        length = list.Count;
        Debug.Log("Gemacht.");
        // Gibt letzten Eintrag in der Liste aus
        return list[length-1];
    }
}

function modifyTags(tagsToAdd:String) {
    activeTags += tagsToAdd;
  
    // Duplicatecheck = Aktive Tags ohne Dopplungen
    // Quelle: http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
    // Quelle 2: http://stackoverflow.com/questions/16843991/remove-occurrences-of-duplicate-words-in-a-string
    activeTags = activeTags.split("#").filter(function(item, index, self){
    return index == self.indexOf(item);}).join("#");
}

// Gibt true aus, wenn es eine Übereinstimmung gibt
//checkForMatch("hund#otto#katze#merti#mausi", "otto#kuh#muh#maus#katze");
function checkForMatch(requiredTags:String, activeTags:String){
    var thereIsaMatch:boolean = false;

    // String in Array umwandeln
    var requiredTagsArray = requiredTags.Split("#"[0]);
    var activeTagsArray = activeTags.Split("#"[0]);

    // List-Var
    var requiredTagsList = new List.<String>();
    var activeTagsList = new List.<String>();
    
    // Array in List umwandeln
    for (var i1:int=0; i1<requiredTagsArray.Length; i1++){
        requiredTagsList.Add(requiredTagsArray[i1]);
    }
    for (var i2:int=0; i2<activeTagsArray.Length; i2++){
        activeTagsList.Add(activeTagsArray[i2]);
    }

    // Nach Match durchsuchen
    for (var i:int=0; i<activeTagsList.Count; i++){
        if (activeTagsList.Contains(requiredTagsArray[i])){
            thereIsaMatch = true;
            break;
            }
        }             
}

// wird aufgerufen, sobald eine Option ausgewählt wurde
// gibt den nächsten Abschnitt aus
static function showNextPG(tempOptionIndex:int){
    // Neusetzen von lastPG und currentPG
    lastPG = currentPG;
    currentPG = currentPG.optionArray[tempOptionIndex]["nextPG"];

    if(currentPG.battleEncounter==true){
        fieldPG.GetComponent.<Text>().text = currentPG.txt;
        if (fight()){
            showOption();
        }
        else{
            // Gameover
            fieldPG.GetComponent.<Text>().text = "Game Over!";
        }

    }else{
        // Setzen des Texts im entsprechenden Textfeld
        fieldPG.GetComponent.<Text>().text = currentPG.txt;
        // Optionen werden ausgegeben
        showOption();
    }
};

// Gibt die Optionen aus
// Irgendwas buggy?
static function showOption(){
    /*
    // Beispiel zum Verständnis
    var x:Hashtable = new Hashtable();
    x["test"] = "otto";
    var y:Hashtable = new Hashtable();
    y["test"] = "petra";
    
    var arrayTest = [x, y];
    for (var item:Hashtable in arrayTest){
        Debug.Log(item["test"]);
    }
    */

    // Fallunterscheidung je nach Anzahl der Optionen
    switch (currentPG.optionCount)
    {
        case 4:
            fieldOption1.GetComponent.<Text>().text = currentPG.optionArray[0]["optionTxt"];
            fieldOption2.GetComponent.<Text>().text = currentPG.optionArray[1]["optionTxt"];
            fieldOption3.GetComponent.<Text>().text = currentPG.optionArray[2]["optionTxt"];
            fieldOption4.GetComponent.<Text>().text = currentPG.optionArray[3]["optionTxt"];
            break;
        case 3:
            fieldOption1.GetComponent.<Text>().text = currentPG.optionArray[0]["optionTxt"];
            fieldOption2.GetComponent.<Text>().text = currentPG.optionArray[1]["optionTxt"];
            fieldOption3.GetComponent.<Text>().text = currentPG.optionArray[2]["optionTxt"];
            fieldOption4.GetComponent.<Text>().text = "  ";
            fieldOptionClickable4 = false;
            break;
        case 2:
            fieldOption1.GetComponent.<Text>().text = currentPG.optionArray[0]["optionTxt"];
            fieldOption2.GetComponent.<Text>().text = currentPG.optionArray[1]["optionTxt"];
            fieldOption3.GetComponent.<Text>().text = "  ";
            fieldOption4.GetComponent.<Text>().text = "  ";
            fieldOptionClickable3 = false;
            fieldOptionClickable4 = false;
            break;
        case 1:
            fieldOption1.GetComponent.<Text>().text = currentPG.optionArray[0]["optionTxt"];
            fieldOption2.GetComponent.<Text>().text = "  ";
            fieldOption3.GetComponent.<Text>().text = "  ";
            fieldOption4.GetComponent.<Text>().text = "  ";
            fieldOptionClickable2 = false;
            fieldOptionClickable3 = false;
            fieldOptionClickable4 = false;
            break;
        default:
            Debug.Log("Keine Antworten definiert.");
            break;
    }
}    

// Durchgang einer Kampfrunde
static function battleRound(type:String, strength:int){
    var roll20 = Random.Range(1, 21);
    var damage1:int;
    var damage2:int;

    if (strength+roll20>=40){
        damage1 = 0;
        damage2 = 6;
    }else if(strength+roll20>=35){
        damage1 = 0;
        damage2 = 5;
    }else if(strength+roll20>=30){
        damage1 = 1;
        damage2 = 4;
    }else if(strength+roll20>=25){
        damage1 = 1;
        damage2 = 3;
    }else if(strength+roll20>=20){
        damage1 = 2;
        damage2 = 3;
    }else if(strength+roll20>=15){
        damage1 = 2;
        damage2 = 2;
    }else if(strength+roll20>=10){
        damage1 = 3;
        damage2 = 1;
    }else if(strength+roll20>=5){
        damage1 = 4;
        damage2 = 1;
    }else{
        damage1 = 4;
        damage2 = 0;
    }
      
    if(type=="enemy"){
        currentPG.enemyHP-=damage1-currentPG.enemyArmor;
        heroHP-=damage2-heroArmor;
        return "Dein Gegner fügt dir "+(damage2-heroArmor)+" Schaden zu und verliert "+(damage1-currentPG.enemyArmor)+" LP.";
    }else{
        heroHP-=damage1-heroArmor;
        currentPG.enemyHP-=damage2-currentPG.enemyArmor;
        return "Du verursachst "+(damage2-currentPG.enemyArmor)+" Schaden und verlierst "+(damage1-heroArmor)+" LP.";
    }
}

// Ein kompletter Kampf
static function fight(){
    var temp:String;
    var roundCounter:int = 1;
    while((heroHP>0) && (currentPG.enemyHP>0)){
        temp += roundCounter+". Runde: "+battleRound("hero", heroStrength);
        if ((heroHP>0) && (currentPG.enemyHP>0)){
            temp += battleRound("enemy", currentPG.enemyStrength)+"\n";
            roundCounter++;
        }else{
            break;
        }
    }
    if (heroHP>0){
        fieldPG.GetComponent.<Text>().text = temp+"Du siegst.";
        return true;
    }
    else{
        fieldPG.GetComponent.<Text>().text = temp+"Du stirbst in diesem Kampf.";
        return false;
    }
}


// ##########################################################
//  Testbereich
// ##########################################################

/*
// ########################
// Ideen
// ########################

var arrayTest = currentPG.optionArray;
// For-Each Schleife 1
for (var option:Hashtable in arrayTest){
    Debug.Log(option["optionTxt"]);
}
Debug.Log("For-Each abgeschlossen.");
    
// For-Schleife 2
Debug.Log("ForSchleife beginnt.");
for (var i = 0; i <= 3; i++){
    Debug.Log("Innerhalb der Schlaufe...");
    
    if(typeof currentPG.optionArray[i] === 'undefined') {
        Debug.Log("Existiert nicht.");
    }
    else {
        Debug.Log("Existiert");
    }
}
Debug.Log("ForSchleife abgeschlossen.");
    

Anderes

var einTest = new List.<String>();
einTest.Add("yo");
einTest.Add("blah");
einTest.Add("foo");
einTest.Add("test");

    // For-Each
    /*for (var test4:String in test4 )
    {
                Debug.Log(test4);
    }
    */