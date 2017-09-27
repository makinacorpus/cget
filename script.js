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
    var finalResult = "<table>";
    
    // creating the table header
    finalResult += "<tr>";
    my_obj = actual_JSON[0];
    for (var key in my_obj){
        finalResult += "<th>" + key + "</th>"; 
    }
    finalResult += "</tr>";

    // feeling the table with data
    for (var i in actual_JSON){
        if(i>=100){break;}
        obj = actual_JSON[i]
        var myResult = "";
        myResult += "<tr>";
        
        for (var key in obj){
            var data = obj[key];
            if (key == "img"){
                data = "<img src='" + data + "'></img>";
            }
            if (key == "title"){
                data = "<h3>" + data + "</h3>";
            }
            if (key == "link"){
                data = "<a src='" + data + "'>" + data + "</a>";
            }
            myResult += "<td>" + data + "</td>";
        }
        myResult += "</tr>";
        finalResult += myResult;
        
    }
    finalResult += "</table>";
    document.getElementById("data").innerHTML = finalResult;
}
