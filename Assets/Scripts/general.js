/*

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
// Erstellen der Abschnitte
// ########################
// siehe auch Spreadsheet

// Vorgeschichte bzw. Charaktererstellung
// Naja, die muss doch anders ablaufen... oder sollte es wohl. Geht auch so mit Variablensetzung im nächsten Abschnitt, aber naja.
// Nur temporär!
var cG001 = new Paragraph("Willkommen. Welche Fähigkeiten bringst du mit?");
cG001.addOption("Klettern", "#", "cG002");
cG001.addOption("Schwimmen", "#", "cG002");
cG001.addOption("Tee trinken", "#", "cG002");
Debug.Log("Erstellung erfolgreich.");

// Richtige Abschnitte
var pg001 = new Paragraph("Ein neuer Tag bricht an und dein Wecker reißt dich in hohen Tönen aus deinen Träumen. Verschlafen streifst du deine Bettdecke weg, schlägst auf ihn und wirfst einen Blick aus dem Fenster. Kein Schnee mehr. Hellster Sonnenschein strömt in dein Zimmer. Um die Uhrzeit in der Jahreszeit? Das ist selbst für New Brooklyn untypisch. Du schüttelst den Kopf. Wahrscheinlich wirst du noch einige Jahre brauchen, um dich daran zu gewöhnen. Seit der D-2050 Katastrophe spielt die Welt verrückt – auch das Wetter kann nicht anders, als aus seinen gewohnten Mustern auszubrechen. Wie auch immer. Du solltest aufstehen. Heute startet dein erster Tag beim McMillian-Institut für neuronale Genforschung. Sicherheitsdienst.");
pg001.addOption("Optimistisch", "#", "Test02");
pg001.addOption("Grumpy", "#", "Test02");

var pg001a = new Paragraph("Du fühlst dich motiviert und siehst den Jobwechsel als Chance auf einen Neuanfang. Sicher ist das aufregender als den Lebensunterhalt durch Tellerwaschen zu finanzieren. Zumindest hoffst du das. Rasch machst du dich fertig, greifst zu deinem Hitzeschutzanzug und verlässt dein kleines Apartment.");
pg001a.addOption("Option 1", "#", "pg002");
var pg001b = new Paragraph("Das Gehalt ist lächerlich gering, dein Chef wird ein Arschloch sein und deine Kollegen werden sehr wahrscheinlich nicht einmal in der Lage sein, halbwegs vernünftige Sätze hervorzubringen. So ist es doch immer. So war es beim letzten Job und bei dem davor… und wohl auch bei dem davor, aber das weißt du schon gar nicht mehr. Es bringt nichts. Irgendwie muss das Geld auf den Tisch. Unrasiert und mit tiefen Augenringen greifst du zu deinem Hitzeschutzanzug und verlässt dein viel zu kleines, heruntergekommenes Apartment.");
pg001b.addOption("Option 1", "#", "pg003");

// Überprüfung
// Debug.Log(pg001.optionArray[0]["optionTxt"]);

// ########################
// Testbereich - kann nachher weg
// ########################
public static var test01 : boolean = false;
public static var test02 : boolean = false;
public static var test03 : boolean = false;
public static var test04 : boolean = false;

// ########################
// Wird bei GameStart durchgeführt
// ########################
function Start () {
    fieldPG.GetComponent.<Text>().text = "Alles noch total in der Testphase, juchuu.";
    yield WaitForSeconds(2);
    fieldPG.GetComponent.<Text>().text = cG001.txt;
    fieldOption1.GetComponent.<Text>().text = cG001.optionArray[0]["optionTxt"];
    fieldOption2.GetComponent.<Text>().text = cG001.txt;
    fieldOption3.GetComponent.<Text>().text = cG001.txt;
    fieldOption4.GetComponent.<Text>().text = cG001.txt;
}

function showPG(){

}


// ########################
// Andere Funktionen
// ########################

// wird ausgeführt, sobald ein Knopf gedrückt wird - also eine Option bestätigt wird
var tempOptionIndex:String;
var tempPG:String;

// Hier wird der aktuelle Paragraph (name) abgespeichert
var tempCurrentPG:String;

// Hier wird der vorletzte Paragraph (name) abgespeichert
// am besten als Arrayeintrag?!
var tempLastPG:String;

function showNextPG(){
    tempCurrentPG = tempPG.optionArray[tempOptionIndex]["nextPG"];
    
    fieldPG.GetComponent.<Text>().text = tempCurrentPG.txt;
}

function showOption(){

}

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


*/