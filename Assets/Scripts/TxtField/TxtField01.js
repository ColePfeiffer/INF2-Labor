function OnMouseDown() {
    var tempOptionIndex:int =  0;
    if (important.fieldOptionClickable1) {
        Debug.Log("Du hast Fläche 01 geklickt.");
        important.showNextPG(tempOptionIndex);
    }
    else {
        Debug.Log("Du hast Fläche 01 geklickt, aber sie reagiert gerade nicht.");
    }
}