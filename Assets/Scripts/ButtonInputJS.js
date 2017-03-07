#pragma strict

var goBackCount:InputField;

function OnMouseDown () {
    if (goBackCount.text == "")
    {
        Debug.Log("Yoa");
        important.goBack(important.test4, 3);
    }
    else { 
        Debug.Log(goBackCount.text);
    }
}