public class Paragraph {
  var txt: String;
  var visited: boolean;
  var optionCount: int;
  var optionArray: Array;

  // Für weitere Abschnitte
  var extraPGCheck: boolean = false;
  var extraPG: Array;

  // Erstellt einen neuen Paragraphen
  function Paragraph(txt: String) {
    this.txt = txt;
    optionCount = 0;
    optionArray = [];
    extraPG = [];
    // kann vielleicht weg
    seen = false;
  }

  // Fügt eine Antwortmöglichkeit hinzu
  function addOption(optionTxt:String, requirements:String, nextPG:Paragraph) {
    var option: Hashtable = new Hashtable();

    option["optionTxt"] = optionTxt;
    option["requirements"] = requirements;
    // Mensch, eigentlich will ich nur ne Reference, aber wenn nextPG ein String ist, geht gar nichts. :(
    option["nextPG"] = nextPG;
    optionCount++;
    optionArray.push(option);
  }

  // fügt einen weiteren Textteil hinzu
  // das ist bei langen Texten sinnvoll!
  function addExtraPG(extraPGTxt: String) {
        extraPGCheck = true;
        extraPG.push(extraPGTxt);
  }
  }

     /*
public class Paragraph {
  var txt: String;
  var visited: boolean;
  var optionCount: int;
  var optionArray: Array;

  // Für weitere Abschnitte
  var extraPGCheck: boolean = false;
  var extraPG: Array;

  // Erstellt einen neuen Paragraphen
  function Paragraph(txt: String) {
    this.txt = txt;
    optionCount = 0;
    optionArray = [];
    extraPG = [];
    // kann vielleicht weg
    seen = false;
  }

  // Fügt eine Antwortmöglichkeit hinzu
  function addOption(optionTxt:String, requirements:String, nextPG:String) {
    var option: Hashtable = new Hashtable();

    option["optionTxt"] = optionTxt;
    option["requirements"] = requirements;
    option["nextPG"] = nextPG;
    optionCount++;
    optionArray.push(option);
  }

  // fügt einen weiteren Textteil hinzu
  // das ist bei langen Texten sinnvoll!
  function addExtraPG(extraPGTxt: String) {
        extraPGCheck = true;
        extraPG.push(extraPGTxt);
  }
}    

    */