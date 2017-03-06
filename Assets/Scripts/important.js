// ########################
// Für die Textausgabe
// ########################
public static var fieldOption1:GameObject;
public static var fieldOption2:GameObject;
public static var fieldOption3:GameObject;
public static var fieldOption4:GameObject;
public static var fieldPG:GameObject;

// Kann ggf. weg, sobald ich herausgefunden habe, wie ich GameObjekte direkt zuordnen kann?
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

// ########################
// Wichtige Variablen
// ########################
// Hier wird der aktuelle Paragraph (als Objekt) abgespeichert
static var currentPG = new Paragraph(" ");
// Hier wird der vorletzte Paragraph (als Objekt) abgespeichert
static var lastPG = new Paragraph(" ");

// am besten als Arrayeintrag?!
// Hier die jeweiligen Abschnitte
static var pgHistoryArray = [];
// Hier werden die aktuellen Tags eingereiht
static var tagHistoryArray = [];

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
// Testausgabe
Debug.Log("Erstellung erfolgreich.");
// _____________________________________________________________
// Richtige Abschnitte
public static var pg001 = new Paragraph("Ein neuer Tag bricht an und dein Wecker reißt dich in hohen Tönen aus deinen Träumen. Verschlafen streifst du deine Bettdecke weg, schlägst auf ihn und wirfst einen Blick aus dem Fenster. Kein Schnee mehr. Hellster Sonnenschein strömt in dein Zimmer. Um die Uhrzeit in der Jahreszeit? Das ist selbst für New Brooklyn untypisch. Du schüttelst den Kopf. Wahrscheinlich wirst du noch einige Jahre brauchen, um dich daran zu gewöhnen. Seit der D-2050 Katastrophe spielt die Welt verrückt – auch das Wetter kann nicht anders, als aus seinen gewohnten Mustern auszubrechen. Wie auch immer. Du solltest aufstehen. Heute startet dein erster Tag beim McMillian-Institut für neuronale Genforschung. Sicherheitsdienst.");
var pg001a = new Paragraph("Du fühlst dich motiviert und siehst den Jobwechsel als Chance auf einen Neuanfang. Sicher ist das aufregender als den Lebensunterhalt durch Tellerwaschen zu finanzieren. Zumindest hoffst du das. Rasch machst du dich fertig, greifst zu deinem Hitzeschutzanzug und verlässt dein kleines Apartment.");
var pg001b = new Paragraph("Das Gehalt ist lächerlich gering, dein Chef wird ein Arschloch sein und deine Kollegen werden sehr wahrscheinlich nicht einmal in der Lage sein, halbwegs vernünftige Sätze hervorzubringen. So ist es doch immer. So war es beim letzten Job und bei dem davor… und wohl auch bei dem davor, aber das weißt du schon gar nicht mehr. Es bringt nichts. Irgendwie muss das Geld auf den Tisch. Unrasiert und mit tiefen Augenringen greifst du zu deinem Hitzeschutzanzug und verlässt dein viel zu kleines, heruntergekommenes Apartment.");
var pg002 = new Paragraph("So geht's dann wohl weiter.");
var pg003 = new Paragraph("Dann so!");
// pg001
pg001.addOption("Optimistisch", "#", pg001a);
pg001.addOption("Grumpy", "#", pg001b);
// pg001b
pg001b.addOption("Option 1", "#", pg002);
pg001b.addOption("Option 2", "#", pg002);
pg001b.addOption("Option 3", "#", pg003);

// Überprüfung
// Debug.Log(pg001.optionArray[0]["optionTxt"]);

// ########################
// Testbereich - #testing #weg
// ########################
static var fieldOptionClickable1 : boolean = true;
static var fieldOptionClickable2 : boolean = true;
static var fieldOptionClickable3 : boolean = true;
static var fieldOptionClickable4 : boolean = true;

    
// ########################
// Wird bei GameStart durchgeführt
// ########################
function Start () {
    //fieldPG.GetComponent.<Text>().text = "Alles noch total in der Testphase, juchuu.";
    //yield WaitForSeconds(2);
    //fieldPG.GetComponent.<Text>().text = cG001.txt;
    Debug.Log("Testing 1 beendet.");
    // #weg
    currentPG = pg001;
}

// ########################
// Andere Funktionen
// ########################


// wird ausgeführt, sobald ein Knopf gedrückt wird - also eine Option bestätigt wird
static function showNextPG(tempOptionIndex:int){
    // Neusetzen von lastPG und currentPG
    lastPG = currentPG;

    // Für Wahrscheinlichkeiten
    if (currentPG.optionArray[tempOptionIndex]["hasRandomFactor"]==true){
        var percentageRoll = Random.Range(1, 101);
        if (percentageRoll<=currentPG.optionArray[tempOptionIndex]["percent1"]){
            currentPG = currentPG.optionArray[tempOptionIndex]["nextPG1"];
        }
        else {
            currentPG = currentPG.optionArray[tempOptionIndex]["nextPG2"];
        }
    }
    else{
        currentPG = currentPG.optionArray[tempOptionIndex]["nextPG"];
        //Debug.Log(currentPG.optionArray[tempOptionIndex]["nextPG"].txt);
    }

    // Ändern des Textes
    fieldPG.GetComponent.<Text>().text = currentPG.txt;
    // Optionen werden ausgegeben
    showOption();
};

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



// ##########################################################
//  Testbereich
// ##########################################################


// Wird gerade nicht gebraucht
/*

// Wird ständig überprüft
function Update(){

}

// Bei Mausklick aufs entsprechende Objekt
function OnMouseDown () {

}

*/
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
    

*/