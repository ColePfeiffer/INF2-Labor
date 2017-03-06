function OnMouseDown() {
    var tempOptionIndex:int =  1;
    if (important.fieldOptionClickable2) {
        Debug.Log("Du hast Fläche 02 geklickt.");
        important.showNextPG(tempOptionIndex);
    }
    else {
        Debug.Log("Du hast Fläche 02 geklickt, aber sie reagiert gerade nicht.");
    }
}