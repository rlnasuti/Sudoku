// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



function checkForNumKey(event) {
    if (event.keyCode == 49)
        document.getElementById("NumberSelection").value = 1;
    else if (event.keyCode == 50)
        document.getElementById("NumberSelection").value = 2;
    else if (event.keyCode == 51)
        document.getElementById("NumberSelection").value = 3;
    else if (event.keyCode == 52)
        document.getElementById("NumberSelection").value = 4;
    else if (event.keyCode == 53)
        document.getElementById("NumberSelection").value = 5;
    else if (event.keyCode == 54)
        document.getElementById("NumberSelection").value = 6;
    else if (event.keyCode == 55)
        document.getElementById("NumberSelection").value = 7;
    else if (event.keyCode == 56)
        document.getElementById("NumberSelection").value = 8;
    else if (event.keyCode == 57)
        document.getElementById("NumberSelection").value = 9;
    else if (event.keyCode == 32)
        document.getElementById("notes").checked = !(document.getElementById("notes").checked);
}

function createNote(numberToNote, innerHtml) {
    if (innerHtml == "")
        return numberToNote;
    else {
        if (innerHtml.includes(numberToNote)) {
            return innerHtml.replace(numberToNote, "");
        }
        else {
            return (innerHtml + " " + numberToNote);
        }
    }
}

function makeMove(boxTried, numberTried) {
    if (document.getElementById("notes").checked == true) {
        var box = document.getElementById(boxTried);
        if (box.style.background !== "lightblue") {
            box.innerHTML = "";
            box.style.background = "lightblue";
        }
        box.innerHTML = createNote(numberTried, box.innerHTML);
    }
    else {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:5001/game",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "processData": false,
            "data": "{\n\t\"boxId\":\"" + boxTried + "\",\n\t\"numberTried\": " + numberTried + "\n}"
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            var box = document.getElementById(boxTried);
            if (response == true) {
                box.innerText = numberTried;
                MarkBoxAsSolved(boxTried);
            }
            else {
                box.innerText = numberTried;
                box.style.background = "red";
            }
        });
    }
}

function ResetButton(boxId) {
    document.getElementById(boxId).style.background = "lightblue";
    document.getElementById(boxId).disabled = false;
}

function MarkBoxAsSolved(boxId) {
    document.getElementById(boxId).style.background = "#4CAF50";
    document.getElementById(boxId).disabled = true;
}


function GetNewGame() {

    const url = 'http://localhost:5001/Game/';
    $.get(url, function (data, status) {

        //update first row 
        document.getElementById('box1_1').innerText = data[0];
        if (data[0] != "") {
            MarkBoxAsSolved('box1_1');
        }
        else {
            ResetButton('box1_1');
        }

        document.getElementById('box1_2').innerText = data[1];
        if (data[1] != "") {
            MarkBoxAsSolved('box1_2');
        }
        else {
            ResetButton('box1_2');
        }

        document.getElementById('box1_3').innerText = data[2];
        if (data[2] != "") {
            MarkBoxAsSolved('box1_3');
        }
        else {
            ResetButton('box1_3');
        }

        document.getElementById('box1_4').innerText = data[3];
        if (data[3] != "") {
            MarkBoxAsSolved('box1_4');
        }
        else {
            ResetButton('box1_4');
        }

        document.getElementById('box1_5').innerText = data[4];
        if (data[4] != "") {
            MarkBoxAsSolved('box1_5');
        }
        else {
            ResetButton('box1_5');
        }

        document.getElementById('box1_6').innerText = data[5];
        if (data[5] != "") {
            MarkBoxAsSolved('box1_6');
        }
        else {
            ResetButton('box1_6');
        }

        document.getElementById('box1_7').innerText = data[6];
        if (data[6] != "") {
            MarkBoxAsSolved('box1_7');
        }
        else {
            ResetButton('box1_7');
        }

        document.getElementById('box1_8').innerText = data[7];
        if (data[7] != "") {
            MarkBoxAsSolved('box1_8');
        }
        else {
            ResetButton('box1_8');
        }

        document.getElementById('box1_9').innerText = data[8];
        if (data[8] != "") {
            MarkBoxAsSolved('box1_9');
        }
        else {
            ResetButton('box1_9');
        }

        //update second row 
        document.getElementById('box2_1').innerText = data[9];
        if (data[9] != "") {
            MarkBoxAsSolved('box2_1');
        }
        else {
            ResetButton('box2_1');
        }

        document.getElementById('box2_2').innerText = data[10];
        if (data[10] != "") {
            MarkBoxAsSolved('box2_2');
        }
        else {
            ResetButton('box2_2');
        }

        document.getElementById('box2_3').innerText = data[11];
        if (data[11] != "") {
            MarkBoxAsSolved('box2_3');
        }
        else {
            ResetButton('box2_3');
        }

        document.getElementById('box2_4').innerText = data[12];
        if (data[12] != "") {
            MarkBoxAsSolved('box2_4');
        }
        else {
            ResetButton('box2_4');
        }

        document.getElementById('box2_5').innerText = data[13];
        if (data[13] != "") {
            MarkBoxAsSolved('box2_5');
        }
        else {
            ResetButton('box2_5');
        }

        document.getElementById('box2_6').innerText = data[14];
        if (data[14] != "") {
            MarkBoxAsSolved('box2_6');
        }
        else {
            ResetButton('box2_6');
        }

        document.getElementById('box2_7').innerText = data[15];
        if (data[15] != "") {
            MarkBoxAsSolved('box2_7');
        }
        else {
            ResetButton('box2_7');
        }

        document.getElementById('box2_8').innerText = data[16];
        if (data[16] != "") {
            MarkBoxAsSolved('box2_8');
        }
        else {
            ResetButton('box2_8');
        }

        document.getElementById('box2_9').innerText = data[17];
        if (data[17] != "") {
            MarkBoxAsSolved('box2_9');
        }
        else {
            ResetButton('box2_9');
        }

        //update third row 
        document.getElementById('box3_1').innerText = data[18];
        if (data[18] != "") {
            MarkBoxAsSolved('box3_1');
        }
        else {
            ResetButton('box3_1');
        }

        document.getElementById('box3_2').innerText = data[19];
        if (data[19] != "") {
            MarkBoxAsSolved('box3_2');
        }
        else {
            ResetButton('box3_2');
        }

        document.getElementById('box3_3').innerText = data[20];
        if (data[20] != "") {
            MarkBoxAsSolved('box3_3');
        }
        else {
            ResetButton('box3_3');
        }

        document.getElementById('box3_4').innerText = data[21];
        if (data[21] != "") {
            MarkBoxAsSolved('box3_4');
        }
        else {
            ResetButton('box3_4');
        }


        document.getElementById('box3_5').innerText = data[22];
        if (data[22] != "") {
            MarkBoxAsSolved('box3_5');
        }
        else {
            ResetButton('box3_5');
        }

        document.getElementById('box3_6').innerText = data[23];
        if (data[23] != "") {
            MarkBoxAsSolved('box3_6');
        }
        else {
            ResetButton('box3_6');
        }

        document.getElementById('box3_7').innerText = data[24];
        if (data[24] != "") {
            MarkBoxAsSolved('box3_7');
        }
        else {
            ResetButton('box3_7');
        }

        document.getElementById('box3_8').innerText = data[25];
        if (data[25] != "") {
            MarkBoxAsSolved('box3_8');
        }
        else {
            ResetButton('box3_8');
        }

        document.getElementById('box3_9').innerText = data[26];
        if (data[26] != "") {
            MarkBoxAsSolved('box3_9');
        }
        else {
            ResetButton('box3_9');
        }

        //update fourth row
        document.getElementById('box4_1').innerText = data[27];
        if (data[27] != "") {
            MarkBoxAsSolved('box4_1');
        }
        else {
            ResetButton('box4_1');
        }

        document.getElementById('box4_2').innerText = data[28];
        if (data[28] != "") {
            MarkBoxAsSolved('box4_2');
        }
        else {
            ResetButton('box4_2');
        }

        document.getElementById('box4_3').innerText = data[29];
        if (data[29] != "") {
            MarkBoxAsSolved('box4_3');
        }
        else {
            ResetButton('box4_3');
        }

        document.getElementById('box4_4').innerText = data[30];
        if (data[30] != "") {
            MarkBoxAsSolved('box4_4');
        }
        else {
            ResetButton('box4_4');
        }

        document.getElementById('box4_5').innerText = data[31];
        if (data[31] != "") {
            MarkBoxAsSolved('box4_5');
        }
        else {
            ResetButton('box4_5');
        }

        document.getElementById('box4_6').innerText = data[32];
        if (data[32] != "") {
            MarkBoxAsSolved('box4_6');
        }
        else {
            ResetButton('box4_6');
        }

        document.getElementById('box4_7').innerText = data[33];
        if (data[33] != "") {
            MarkBoxAsSolved('box4_7');
        }
        else {
            ResetButton('box4_7');
        }

        document.getElementById('box4_8').innerText = data[34];
        if (data[34] != "") {
            MarkBoxAsSolved('box4_8');
        }
        else {
            ResetButton('box4_8');
        }

        document.getElementById('box4_9').innerText = data[35];
        if (data[35] != "") {
            MarkBoxAsSolved('box4_9');
        }
        else {
            ResetButton('box4_9');
        }

        //update fifth row 
        document.getElementById('box5_1').innerText = data[36];
        if (data[36] != "") {
            MarkBoxAsSolved('box5_1');
        }
        else {
            ResetButton('box5_1');
        }

        document.getElementById('box5_2').innerText = data[37];
        if (data[37] != "") {
            MarkBoxAsSolved('box5_2');
        }
        else {
            ResetButton('box5_2');
        }

        document.getElementById('box5_3').innerText = data[38];
        if (data[38] != "") {
            MarkBoxAsSolved('box5_3');
        }
        else {
            ResetButton('box5_3');
        }

        document.getElementById('box5_4').innerText = data[39];
        if (data[39] != "") {
            MarkBoxAsSolved('box5_4');
        }
        else {
            ResetButton('box5_4');
        }

        document.getElementById('box5_5').innerText = data[40];
        if (data[40] != "") {
            MarkBoxAsSolved('box5_5');
        }
        else {
            ResetButton('box5_5');
        }

        document.getElementById('box5_6').innerText = data[41];
        if (data[41] != "") {
            MarkBoxAsSolved('box5_6');
        }
        else {
            ResetButton('box5_6');
        }

        document.getElementById('box5_7').innerText = data[42];
        if (data[42] != "") {
            MarkBoxAsSolved('box5_7');
        }
        else {
            ResetButton('box5_7');
        }

        document.getElementById('box5_8').innerText = data[43];
        if (data[43] != "") {
            MarkBoxAsSolved('box5_8');
        }
        else {
            ResetButton('box5_8');
        }

        document.getElementById('box5_9').innerText = data[44];
        if (data[44] != "") {
            MarkBoxAsSolved('box5_9');
        }
        else {
            ResetButton('box5_9');
        }

        //update sixth row 
        document.getElementById('box6_1').innerText = data[45];
        if (data[45] != "") {
            MarkBoxAsSolved('box6_1');
        }
        else {
            ResetButton('box6_1');
        }

        document.getElementById('box6_2').innerText = data[46];
        if (data[46] != "") {
            MarkBoxAsSolved('box6_2');
        }
        else {
            ResetButton('box6_2');
        }

        document.getElementById('box6_3').innerText = data[47];
        if (data[47] != "") {
            MarkBoxAsSolved('box6_3');
        }
        else {
            ResetButton('box6_3');
        }

        document.getElementById('box6_4').innerText = data[48];
        if (data[48] != "") {
            MarkBoxAsSolved('box6_4');
        }
        else {
            ResetButton('box6_4');
        }

        document.getElementById('box6_5').innerText = data[49];
        if (data[49] != "") {
            MarkBoxAsSolved('box6_5');
        }
        else {
            ResetButton('box6_5');
        }

        document.getElementById('box6_6').innerText = data[50];
        if (data[50] != "") {
            MarkBoxAsSolved('box6_6');
        }
        else {
            ResetButton('box6_6');
        }

        document.getElementById('box6_7').innerText = data[51];
        if (data[51] != "") {
            MarkBoxAsSolved('box6_7');
        }
        else {
            ResetButton('box6_7');
        }

        document.getElementById('box6_8').innerText = data[52];
        if (data[52] != "") {
            MarkBoxAsSolved('box6_8');
        }
        else {
            ResetButton('box6_8');
        }

        document.getElementById('box6_9').innerText = data[53];
        if (data[53] != "") {
            MarkBoxAsSolved('box6_9');
        }
        else {
            ResetButton('box6_9');
        }

        //update seventh row
        document.getElementById('box7_1').innerText = data[54];
        if (data[54] != "") {
            MarkBoxAsSolved('box7_1');
        }
        else {
            ResetButton('box7_1');
        }

        document.getElementById('box7_2').innerText = data[55];
        if (data[55] != "") {
            MarkBoxAsSolved('box7_2');
        }
        else {
            ResetButton('box7_2');
        }

        document.getElementById('box7_3').innerText = data[56];
        if (data[56] != "") {
            MarkBoxAsSolved('box7_3');
        }
        else {
            ResetButton('box7_3');
        }

        document.getElementById('box7_4').innerText = data[57];
        if (data[57] != "") {
            MarkBoxAsSolved('box7_4');
        }
        else {
            ResetButton('box7_4');
        }

        document.getElementById('box7_5').innerText = data[58];
        if (data[58] != "") {
            MarkBoxAsSolved('box7_5');
        }
        else {
            ResetButton('box7_5');
        }

        document.getElementById('box7_6').innerText = data[59];
        if (data[59] != "") {
            MarkBoxAsSolved('box7_6');
        }
        else {
            ResetButton('box7_6');
        }

        document.getElementById('box7_7').innerText = data[60];
        if (data[60] != "") {
            MarkBoxAsSolved('box7_7');
        }
        else {
            ResetButton('box7_7');
        }

        document.getElementById('box7_8').innerText = data[61];
        if (data[61] != "") {
            MarkBoxAsSolved('box7_8');
        }
        else {
            ResetButton('box7_8');
        }

        document.getElementById('box7_9').innerText = data[62];
        if (data[62] != "") {
            MarkBoxAsSolved('box7_9');
        }
        else {
            ResetButton('box7_9');
        }

        //update eighth row
        document.getElementById('box8_1').innerText = data[63];
        if (data[63] != "") {
            MarkBoxAsSolved('box8_1');
        }
        else {
            ResetButton('box8_1');
        }

        document.getElementById('box8_2').innerText = data[64];
        if (data[64] != "") {
            MarkBoxAsSolved('box8_2');
        }
        else {
            ResetButton('box8_2');
        }

        document.getElementById('box8_3').innerText = data[65];
        if (data[65] != "") {
            MarkBoxAsSolved('box8_3');
        }
        else {
            ResetButton('box8_3');
        }

        document.getElementById('box8_4').innerText = data[66];
        if (data[66] != "") {
            MarkBoxAsSolved('box8_4');
        }
        else {
            ResetButton('box8_4');
        }

        document.getElementById('box8_5').innerText = data[67];
        if (data[67] != "") {
            MarkBoxAsSolved('box8_5');
        }
        else {
            ResetButton('box8_5');
        }

        document.getElementById('box8_6').innerText = data[68];
        if (data[68] != "") {
            MarkBoxAsSolved('box8_6');
        }
        else {
            ResetButton('box8_6');
        }

        document.getElementById('box8_7').innerText = data[69];
        if (data[69] != "") {
            MarkBoxAsSolved('box8_7');
        }
        else {
            ResetButton('box8_7');
        }

        document.getElementById('box8_8').innerText = data[70];
        if (data[70] != "") {
            MarkBoxAsSolved('box8_8');
        }
        else {
            ResetButton('box8_8');
        }

        document.getElementById('box8_9').innerText = data[71];
        if (data[71] != "") {
            MarkBoxAsSolved('box8_9');
        }
        else {
            ResetButton('box8_9');
        }

        //update ninth row
        document.getElementById('box9_1').innerText = data[72];
        if (data[72] != "") {
            MarkBoxAsSolved('box9_1');
        }
        else {
            ResetButton('box9_1');
        }

        document.getElementById('box9_2').innerText = data[73];
        if (data[73] != "") {
            MarkBoxAsSolved('box9_2');
        }
        else {
            ResetButton('box9_2');
        }

        document.getElementById('box9_3').innerText = data[74];
        if (data[74] != "") {
            MarkBoxAsSolved('box9_3');
        }
        else {
            ResetButton('box9_3');
        }

        document.getElementById('box9_4').innerText = data[75];
        if (data[75] != "") {
            MarkBoxAsSolved('box9_4');
        }
        else {
            ResetButton('box9_4');
        }

        document.getElementById('box9_5').innerText = data[76];
        if (data[76] != "") {
            MarkBoxAsSolved('box9_5');
        }
        else {
            ResetButton('box9_5');
        }

        document.getElementById('box9_6').innerText = data[77];
        if (data[77] != "") {
            MarkBoxAsSolved('box9_6');
        }
        else {
            ResetButton('box9_6');
        }

        document.getElementById('box9_7').innerText = data[78];
        if (data[78] != "") {
            MarkBoxAsSolved('box9_7');
        }
        else {
            ResetButton('box9_7');
        }

        document.getElementById('box9_8').innerText = data[79];
        if (data[79] != "") {
            MarkBoxAsSolved('box9_8');
        }
        else {
            ResetButton('box9_8');
        }

        document.getElementById('box9_9').innerText = data[80];
        if (data[80] != "") {
            MarkBoxAsSolved('box9_9');
        }
        else {
            ResetButton('box9_9');
        }
    });
}


function ContinueGame() {

    var box = document.getElementById('box1_1');
    box.innerText = getCookie("box1_1Value");
    box.style.background = getCookie("box1_1Color");
    box.disabled = (getCookie("box1_1Disabled") == "true");

    box = document.getElementById('box1_2');
    box.innerText = getCookie("box1_2Value");
    box.style.background = getCookie("box1_2Color");
    box.disabled = (getCookie("box1_2Disabled") == "true");

    box = document.getElementById('box1_3');
    box.innerText = getCookie("box1_3Value");
    box.style.background = getCookie("box1_3Color");
    box.disabled = (getCookie("box1_3Disabled") == "true");

    box = document.getElementById('box1_4');
    box.innerText = getCookie("box1_4Value");
    box.style.background = getCookie("box1_4Color");
    box.disabled = (getCookie("box1_4Disabled") == "true");

    box = document.getElementById('box1_5');
    box.innerText = getCookie("box1_5Value");
    box.style.background = getCookie("box1_5Color");
    box.disabled = (getCookie("box1_5Disabled") == "true");

    box = document.getElementById('box1_6');
    box.innerText = getCookie("box1_6Value");
    box.style.background = getCookie("box1_6Color");
    box.disabled = (getCookie("box1_6Disabled") == "true");

    box = document.getElementById('box1_7');
    box.innerText = getCookie("box1_7Value");
    box.style.background = getCookie("box1_7Color");
    box.disabled = (getCookie("box1_7Disabled") == "true");

    box = document.getElementById('box1_8');
    box.innerText = getCookie("box1_8Value");
    box.style.background = getCookie("box1_8Color");
    box.disabled = (getCookie("box1_8Disabled") == "true");

    box = document.getElementById('box1_9');
    box.innerText = getCookie("box1_9Value");
    box.style.background = getCookie("box1_9Color");
    box.disabled = (getCookie("box1_9Disabled") == "true");

    box = document.getElementById('box2_1');
    box.innerText = getCookie("box2_1Value");
    box.style.background = getCookie("box2_1Color");
    box.disabled = (getCookie("box2_1Disabled") == "true");

    box = document.getElementById('box2_2');
    box.innerText = getCookie("box2_2Value");
    box.style.background = getCookie("box2_2Color");
    box.disabled = (getCookie("box2_2Disabled") == "true");

    box = document.getElementById('box2_3');
    box.innerText = getCookie("box2_3Value");
    box.style.background = getCookie("box2_3Color");
    box.disabled = (getCookie("box2_3Disabled") == "true");

    box = document.getElementById('box2_4');
    box.innerText = getCookie("box2_4Value");
    box.style.background = getCookie("box2_4Color");
    box.disabled = (getCookie("box2_4Disabled") == "true");

    box = document.getElementById('box2_5');
    box.innerText = getCookie("box2_5Value");
    box.style.background = getCookie("box2_5Color");
    box.disabled = (getCookie("box2_5Disabled") == "true");

    box = document.getElementById('box2_6');
    box.innerText = getCookie("box2_6Value");
    box.style.background = getCookie("box2_6Color");
    box.disabled = (getCookie("box2_6Disabled") == "true");

    box = document.getElementById('box2_7');
    box.innerText = getCookie("box2_7Value");
    box.style.background = getCookie("box2_7Color");
    box.disabled = (getCookie("box2_7Disabled") == "true");

    box = document.getElementById('box2_8');
    box.innerText = getCookie("box2_8Value");
    box.style.background = getCookie("box2_8Color");
    box.disabled = (getCookie("box2_8Disabled") == "true");

    box = document.getElementById('box2_9');
    box.innerText = getCookie("box2_9Value");
    box.style.background = getCookie("box2_9Color");
    box.disabled = (getCookie("box2_9Disabled") == "true");
}


//function copied from https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function SaveGame() {
    var box = document.getElementById("box1_1");
    document.cookie = 'box1_1Value=' + box.innerHTML + ';';
    document.cookie = 'box1_1Color=' + box.style.background + ';';
    document.cookie = 'box1_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box1_2");
    document.cookie = 'box1_2Value=' + box.innerHTML + ';';
    document.cookie = 'box1_2Color=' + box.style.background + ';';
    document.cookie = 'box1_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box1_3");
    document.cookie = 'box1_3Value=' + box.innerHTML + ';';
    document.cookie = 'box1_3Color=' + box.style.background + ';';
    document.cookie = 'box1_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box1_4");
    document.cookie = 'box1_4Value=' + box.innerHTML + ';';
    document.cookie = 'box1_4Color=' + box.style.background + ';';
    document.cookie = 'box1_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box1_5");
    document.cookie = 'box1_5Value=' + box.innerHTML + ';';
    document.cookie = 'box1_5Color=' + box.style.background + ';';
    document.cookie = 'box1_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box1_6");
    document.cookie = 'box1_6Value=' + box.innerHTML + ';';
    document.cookie = 'box1_6Color=' + box.style.background + ';';
    document.cookie = 'box1_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box1_7");
    document.cookie = 'box1_7Value=' + box.innerHTML + ';';
    document.cookie = 'box1_7Color=' + box.style.background + ';';
    document.cookie = 'box1_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box1_8");
    document.cookie = 'box1_8Value=' + box.innerHTML + ';';
    document.cookie = 'box1_8Color=' + box.style.background + ';';
    document.cookie = 'box1_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box1_9");
    document.cookie = 'box1_9Value=' + box.innerHTML + ';';
    document.cookie = 'box1_9Color=' + box.style.background + ';';
    document.cookie = 'box1_9Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_1");
    document.cookie = 'box2_1Value=' + box.innerHTML + ';';
    document.cookie = 'box2_1Color=' + box.style.background + ';';
    document.cookie = 'box2_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_2");
    document.cookie = 'box2_2Value=' + box.innerHTML + ';';
    document.cookie = 'box2_2Color=' + box.style.background + ';';
    document.cookie = 'box2_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_3");
    document.cookie = 'box2_3Value=' + box.innerHTML + ';';
    document.cookie = 'box2_3Color=' + box.style.background + ';';
    document.cookie = 'box2_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_4");
    document.cookie = 'box2_4Value=' + box.innerHTML + ';';
    document.cookie = 'box2_4Color=' + box.style.background + ';';
    document.cookie = 'box2_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_5");
    document.cookie = 'box2_5Value=' + box.innerHTML + ';';
    document.cookie = 'box2_5Color=' + box.style.background + ';';
    document.cookie = 'box2_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_6");
    document.cookie = 'box2_6Value=' + box.innerHTML + ';';
    document.cookie = 'box2_6Color=' + box.style.background + ';';
    document.cookie = 'box2_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_7");
    document.cookie = 'box2_7Value=' + box.innerHTML + ';';
    document.cookie = 'box2_7Color=' + box.style.background + ';';
    document.cookie = 'box2_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_8");
    document.cookie = 'box2_8Value=' + box.innerHTML + ';';
    document.cookie = 'box2_8Color=' + box.style.background + ';';
    document.cookie = 'box2_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box2_9");
    document.cookie = 'box2_9Value=' + box.innerHTML + ';';
    document.cookie = 'box2_9Color=' + box.style.background + ';';
    document.cookie = 'box2_9Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_1");
    document.cookie = 'box3_1Value=' + box.innerHTML + ';';
    document.cookie = 'box3_1Color=' + box.style.background + ';';
    document.cookie = 'box3_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_2");
    document.cookie = 'box3_2Value=' + box.innerHTML + ';';
    document.cookie = 'box3_2Color=' + box.style.background + ';';
    document.cookie = 'box3_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_3");
    document.cookie = 'box3_3Value=' + box.innerHTML + ';';
    document.cookie = 'box3_3Color=' + box.style.background + ';';
    document.cookie = 'box3_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_4");
    document.cookie = 'box3_4Value=' + box.innerHTML + ';';
    document.cookie = 'box3_4Color=' + box.style.background + ';';
    document.cookie = 'box3_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_5");
    document.cookie = 'box3_5Value=' + box.innerHTML + ';';
    document.cookie = 'box3_5Color=' + box.style.background + ';';
    document.cookie = 'box3_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_6");
    document.cookie = 'box3_6Value=' + box.innerHTML + ';';
    document.cookie = 'box3_6Color=' + box.style.background + ';';
    document.cookie = 'box3_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_7");
    document.cookie = 'box3_7Value=' + box.innerHTML + ';';
    document.cookie = 'box3_7Color=' + box.style.background + ';';
    document.cookie = 'box3_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_8");
    document.cookie = 'box3_8Value=' + box.innerHTML + ';';
    document.cookie = 'box3_8Color=' + box.style.background + ';';
    document.cookie = 'box3_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box3_9");
    document.cookie = 'box3_9Value=' + box.innerHTML + ';';
    document.cookie = 'box3_9Color=' + box.style.background + ';';
    document.cookie = 'box3_9Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_1");
    document.cookie = 'box4_1Value=' + box.innerHTML + ';';
    document.cookie = 'box4_1Color=' + box.style.background + ';';
    document.cookie = 'box4_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_2");
    document.cookie = 'box4_2Value=' + box.innerHTML + ';';
    document.cookie = 'box4_2Color=' + box.style.background + ';';
    document.cookie = 'box4_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_3");
    document.cookie = 'box4_3Value=' + box.innerHTML + ';';
    document.cookie = 'box4_3Color=' + box.style.background + ';';
    document.cookie = 'box4_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_4");
    document.cookie = 'box4_4Value=' + box.innerHTML + ';';
    document.cookie = 'box4_4Color=' + box.style.background + ';';
    document.cookie = 'box4_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_5");
    document.cookie = 'box4_5Value=' + box.innerHTML + ';';
    document.cookie = 'box4_5Color=' + box.style.background + ';';
    document.cookie = 'box4_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_6");
    document.cookie = 'box4_6Value=' + box.innerHTML + ';';
    document.cookie = 'box4_6Color=' + box.style.background + ';';
    document.cookie = 'box4_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_7");
    document.cookie = 'box4_7Value=' + box.innerHTML + ';';
    document.cookie = 'box4_7Color=' + box.style.background + ';';
    document.cookie = 'box4_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_8");
    document.cookie = 'box4_8Value=' + box.innerHTML + ';';
    document.cookie = 'box4_8Color=' + box.style.background + ';';
    document.cookie = 'box4_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box4_9");
    document.cookie = 'box4_9Value=' + box.innerHTML + ';';
    document.cookie = 'box4_9Color=' + box.style.background + ';';
    document.cookie = 'box4_9Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_1");
    document.cookie = 'box5_1Value=' + box.innerHTML + ';';
    document.cookie = 'box5_1Color=' + box.style.background + ';';
    document.cookie = 'box5_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_2");
    document.cookie = 'box5_2Value=' + box.innerHTML + ';';
    document.cookie = 'box5_2Color=' + box.style.background + ';';
    document.cookie = 'box5_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_3");
    document.cookie = 'box5_3Value=' + box.innerHTML + ';';
    document.cookie = 'box5_3Color=' + box.style.background + ';';
    document.cookie = 'box5_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_4");
    document.cookie = 'box5_4Value=' + box.innerHTML + ';';
    document.cookie = 'box5_4Color=' + box.style.background + ';';
    document.cookie = 'box5_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_5");
    document.cookie = 'box5_5Value=' + box.innerHTML + ';';
    document.cookie = 'box5_5Color=' + box.style.background + ';';
    document.cookie = 'box5_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_6");
    document.cookie = 'box5_6Value=' + box.innerHTML + ';';
    document.cookie = 'box5_6Color=' + box.style.background + ';';
    document.cookie = 'box5_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_7");
    document.cookie = 'box5_7Value=' + box.innerHTML + ';';
    document.cookie = 'box5_7Color=' + box.style.background + ';';
    document.cookie = 'box5_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_8");
    document.cookie = 'box5_8Value=' + box.innerHTML + ';';
    document.cookie = 'box5_8Color=' + box.style.background + ';';
    document.cookie = 'box5_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box5_9");
    document.cookie = 'box5_9Value=' + box.innerHTML + ';';
    document.cookie = 'box5_9Color=' + box.style.background + ';';
    document.cookie = 'box5_9Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_1");
    document.cookie = 'box6_1Value=' + box.innerHTML + ';';
    document.cookie = 'box6_1Color=' + box.style.background + ';';
    document.cookie = 'box6_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_2");
    document.cookie = 'box6_2Value=' + box.innerHTML + ';';
    document.cookie = 'box6_2Color=' + box.style.background + ';';
    document.cookie = 'box6_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_3");
    document.cookie = 'box6_3Value=' + box.innerHTML + ';';
    document.cookie = 'box6_3Color=' + box.style.background + ';';
    document.cookie = 'box6_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_4");
    document.cookie = 'box6_4Value=' + box.innerHTML + ';';
    document.cookie = 'box6_4Color=' + box.style.background + ';';
    document.cookie = 'box6_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_5");
    document.cookie = 'box6_5Value=' + box.innerHTML + ';';
    document.cookie = 'box6_5Color=' + box.style.background + ';';
    document.cookie = 'box6_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_6");
    document.cookie = 'box6_6Value=' + box.innerHTML + ';';
    document.cookie = 'box6_6Color=' + box.style.background + ';';
    document.cookie = 'box6_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_7");
    document.cookie = 'box6_7Value=' + box.innerHTML + ';';
    document.cookie = 'box6_7Color=' + box.style.background + ';';
    document.cookie = 'box6_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_8");
    document.cookie = 'box6_8Value=' + box.innerHTML + ';';
    document.cookie = 'box6_8Color=' + box.style.background + ';';
    document.cookie = 'box6_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box6_9");
    document.cookie = 'box6_9Value=' + box.innerHTML + ';';
    document.cookie = 'box6_9Color=' + box.style.background + ';';
    document.cookie = 'box6_9Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_1");
    document.cookie = 'box7_1Value=' + box.innerHTML + ';';
    document.cookie = 'box7_1Color=' + box.style.background + ';';
    document.cookie = 'box7_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_2");
    document.cookie = 'box7_2Value=' + box.innerHTML + ';';
    document.cookie = 'box7_2Color=' + box.style.background + ';';
    document.cookie = 'box7_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_3");
    document.cookie = 'box7_3Value=' + box.innerHTML + ';';
    document.cookie = 'box7_3Color=' + box.style.background + ';';
    document.cookie = 'box7_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_4");
    document.cookie = 'box7_4Value=' + box.innerHTML + ';';
    document.cookie = 'box7_4Color=' + box.style.background + ';';
    document.cookie = 'box7_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_5");
    document.cookie = 'box7_5Value=' + box.innerHTML + ';';
    document.cookie = 'box7_5Color=' + box.style.background + ';';
    document.cookie = 'box7_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_6");
    document.cookie = 'box7_6Value=' + box.innerHTML + ';';
    document.cookie = 'box7_6Color=' + box.style.background + ';';
    document.cookie = 'box7_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_7");
    document.cookie = 'box7_7Value=' + box.innerHTML + ';';
    document.cookie = 'box7_7Color=' + box.style.background + ';';
    document.cookie = 'box7_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_8");
    document.cookie = 'box7_8Value=' + box.innerHTML + ';';
    document.cookie = 'box7_8Color=' + box.style.background + ';';
    document.cookie = 'box7_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box7_9");
    document.cookie = 'box7_9Value=' + box.innerHTML + ';';
    document.cookie = 'box7_9Color=' + box.style.background + ';';
    document.cookie = 'box7_9Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_1");
    document.cookie = 'box8_1Value=' + box.innerHTML + ';';
    document.cookie = 'box8_1Color=' + box.style.background + ';';
    document.cookie = 'box8_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_2");
    document.cookie = 'box8_2Value=' + box.innerHTML + ';';
    document.cookie = 'box8_2Color=' + box.style.background + ';';
    document.cookie = 'box8_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_3");
    document.cookie = 'box8_3Value=' + box.innerHTML + ';';
    document.cookie = 'box8_3Color=' + box.style.background + ';';
    document.cookie = 'box8_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_4");
    document.cookie = 'box8_4Value=' + box.innerHTML + ';';
    document.cookie = 'box8_4Color=' + box.style.background + ';';
    document.cookie = 'box8_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_5");
    document.cookie = 'box8_5Value=' + box.innerHTML + ';';
    document.cookie = 'box8_5Color=' + box.style.background + ';';
    document.cookie = 'box8_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_6");
    document.cookie = 'box8_6Value=' + box.innerHTML + ';';
    document.cookie = 'box8_6Color=' + box.style.background + ';';
    document.cookie = 'box8_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_7");
    document.cookie = 'box8_7Value=' + box.innerHTML + ';';
    document.cookie = 'box8_7Color=' + box.style.background + ';';
    document.cookie = 'box8_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_8");
    document.cookie = 'box8_8Value=' + box.innerHTML + ';';
    document.cookie = 'box8_8Color=' + box.style.background + ';';
    document.cookie = 'box8_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box8_9");
    document.cookie = 'box8_9Value=' + box.innerHTML + ';';
    document.cookie = 'box8_9Color=' + box.style.background + ';';
    document.cookie = 'box8_9Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_1");
    document.cookie = 'box9_1Value=' + box.innerHTML + ';';
    document.cookie = 'box9_1Color=' + box.style.background + ';';
    document.cookie = 'box9_1Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_2");
    document.cookie = 'box9_2Value=' + box.innerHTML + ';';
    document.cookie = 'box9_2Color=' + box.style.background + ';';
    document.cookie = 'box9_2Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_3");
    document.cookie = 'box9_3Value=' + box.innerHTML + ';';
    document.cookie = 'box9_3Color=' + box.style.background + ';';
    document.cookie = 'box9_3Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_4");
    document.cookie = 'box9_4Value=' + box.innerHTML + ';';
    document.cookie = 'box9_4Color=' + box.style.background + ';';
    document.cookie = 'box9_4Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_5");
    document.cookie = 'box9_5Value=' + box.innerHTML + ';';
    document.cookie = 'box9_5Color=' + box.style.background + ';';
    document.cookie = 'box9_5Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_6");
    document.cookie = 'box9_6Value=' + box.innerHTML + ';';
    document.cookie = 'box9_6Color=' + box.style.background + ';';
    document.cookie = 'box9_6Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_7");
    document.cookie = 'box9_7Value=' + box.innerHTML + ';';
    document.cookie = 'box9_7Color=' + box.style.background + ';';
    document.cookie = 'box9_7Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_8");
    document.cookie = 'box9_8Value=' + box.innerHTML + ';';
    document.cookie = 'box9_8Color=' + box.style.background + ';';
    document.cookie = 'box9_8Disabled=' + box.disabled + ';';

    box = document.getElementById("box9_9");
    document.cookie = 'box9_9Value=' + box.innerHTML + ';';
    document.cookie = 'box9_9Color=' + box.style.background + ';';
    document.cookie = 'box9_9Disabled=' + box.disabled + ';';
}