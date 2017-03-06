function OnMouseDown() {
    var tempOptionIndex:int =  3;
    if (important.fieldOptionClickable4) {
        Debug.Log("Du hast Fläche 04 geklickt.");
        important.showNextPG(tempOptionIndex);
    }
    else {
        Debug.Log("Du hast Fläche 04 geklickt, aber sie reagiert gerade nicht.");
    }
}