function OnMouseDown() {
    var tempOptionIndex:int =  2;
    if (important.fieldOptionClickable3) {
        Debug.Log("Du hast Fläche 03 geklickt.");
        important.showNextPG(tempOptionIndex);
    }
    else {
        Debug.Log("Du hast Fläche 03 geklickt, aber sie reagiert gerade nicht.");
    }
}