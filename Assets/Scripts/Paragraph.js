public class Paragraph {
  var txt: String;
  var visited:boolean;
  var optionCount:int;
  var optionArray:Array;
  var battleEncounter:boolean;
  // Für weitere Abschnitte
  var extraPGCheck: boolean = false;
  var extraPG: Array;


  // Erstellt einen neuen Paragraphen
  function Paragraph(txt: String) {
    this.txt = txt;
    optionCount = 1;
    optionArray = [];
    extraPG = [];
    // kann vielleicht weg
    battleEncounter = false;
  }


  // Fügt eine Antwortmöglichkeit hinzu
  function addOption(optionTxt:String, requirements:String, nextPG:Paragraph) {
    var option: Hashtable = new Hashtable();
    option["hasRandomFactor"] = false;
    option["optionTxt"] = optionTxt;
    option["requirements"] = requirements;
    option["nextPG"] = nextPG;
    optionCount++;
    optionArray.push(option);
  }

  // Für prozentuelle Antworten
      function addOption(optionTxt:String, requirements:String, nextPG1:Paragraph, nextPG2:Paragraph, percent:int) {
      var option: Hashtable = new Hashtable();
      option["hasRandomFactor"] = true;
      option["optionTxt"] = optionTxt;
      option["requirements"] = requirements;
      option["nextPG1"] = nextPG1;
      option["percent1"] = 100-percent;
      option["nextPG2"] = nextPG2;
      option["percent2"] = percent;
      optionCount++;
      optionArray.push(option);
  }

  // fügt einen weiteren Textteil hinzu
  // das ist bei langen Texten sinnvoll!
  function addExtraPG(extraPGTxt: String) {
        extraPGCheck = true;
        extraPG.push(extraPGTxt);
  }

  function addProcent(){

  }

}