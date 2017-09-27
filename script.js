
var actual_JSON;

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'solidarum.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function init() {
 loadJSON(function(response) {
    actual_JSON = JSON.parse(response);
    console.log(actual_JSON[0].title);
 });
}

function useJSON(){
	document.getElementById("data").innerHTML = actual_JSON[1].title;
}

function makeInner(){
	document.getElementById("data").innerHTML = "COUCOU from makeInner!";
}