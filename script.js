function loadJSON(callback, fileName) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName.concat('.json'), true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }


 function init(fileName) {
    loadJSON(function(response) {
         var actual_JSON = {"not":"defined"}
        actual_JSON = JSON.parse(response);
        showData(actual_JSON)
        },
        fileName);
}

function showData(actual_JSON){
    console.log(actual_JSON);
    var finalResult = "<table style='width:100%;'>";
    
    //creating the table header
    finalResult += "<tr>";
    my_obj = actual_JSON[0];
    for (var key in my_obj){
        finalResult += "<th style='width:20%;'>" + key + "</th>"; 
    }
    finalResult += "</tr>";


    for (var i in actual_JSON){
        if(i>=10){break;}
        console.log(i);
        obj = actual_JSON[i]
        var myResult = "";
        myResult += "<tr>";
        
        for (var key in obj){
            myResult += "<td>" + obj[key] + "</td>";
        }
        myResult += "</tr>";
        console.log(myResult);
        finalResult += myResult;
        
    }
    finalResult += "</table>";
    document.getElementById("data").innerHTML = finalResult;
}
