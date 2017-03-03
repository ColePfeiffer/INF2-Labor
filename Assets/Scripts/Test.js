import UnityEngine.UI;

function Start () {


}



/*

// Fürs Testen

Debug.Log("Miauuu.");

optionTxt2.GetComponent.<Text>().text = "Hier steht jetzt der eigentliche Text! Das ist echt toll.";

test01.optionArray[0]["optionTxt"] = "Du bist jetzt eine andere Antwort.";



class Machine {
   var kind : String; // fields are public by default
   function Machine(x : int) {
      this.kind = ["bulldozer", "lathe", "car"][x];
   }
   function announce() {
      print("I am a "+this.kind+".");
   }
}
 


class Paragraph{

	var allPGs = [];
	var PGCount : int = 0;

	var txt : String;
	var visited : boolean;
	var answerCount : int;
	var answerArray = [];

	function Paragraph(txt) {
		  this.txt = txt;
		  this.visited = false;
		  this.answerCount = 0;
		  this.answerArray = [];

		  allPGs.push(this);
		  PGCount++;
	}

	function addAnswer(txt, requirements, nextPG){
	this.answerCount++;
	this.answerArray.push({
		txt: txt,
		requirements: requirements,
		clickable: true,
		set: false
		nextPG: nextPG
	});
	}

	function test(){
		TextBox.GetComponent.<Text>().text = "Joaaa!";
	}

}

// Funktion, 
function newPG(txt) {
  this.txt = txt;
  this.visited = false;
  this.answerCount = 0;
  this.answerArray = [];

  allPGs.push(this);
  PGCount++;
}

// Funktion innerhalb von addQuestion, die es erlaubt neue Fragen in das entsprechende answerArray des addQuestions-Objekts zu speichern
newPG.prototype.addAnswer = function addAnswer(answerTxt, answerExclusionTags, tagsToAdd) {
  this.answerCount++;
  this.answerArray.push({
    answerTxt: answerTxt,
    answerExclusionTags: answerExclusionTags,
    tagsToAdd: tagsToAdd,
    selected: false
  });
};


function Update () {

}*/