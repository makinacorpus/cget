//Loading the JSON file
function loadJSON(callback, fileName) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', './data_extended/'.concat(fileName.concat('.json')), true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function init(fileName) {
    //console.log("In script_data_extended.js");
    loadJSON(function(response) {
        var actual_JSON = {"not":"defined"};
        actual_JSON = JSON.parse(response);
        showData(actual_JSON);
        },
        fileName);
}

//Creating the table and filling it with the given json file
function showData(actual_JSON){
    //console.log(actual_JSON);
    var finalResult = "<table>";
    
    // creating the table header
    finalResult += "<tr>";
    
    finalResult += "<th>Image</th>";
    finalResult += "<th>Title</th>";
    finalResult += "<th>Abstract</th>";
    finalResult += "<th>Link</th>"; 
    finalResult += "<th>Area</th>"; 
    finalResult += "<th>Key words</th>"; 
    finalResult += "<th>Contact</th>"; 
    finalResult += "<th>State (finnished)</th>"; 
    finalResult += "<th>Project holder</th>"; 
    finalResult += "<th>Partner</th>"; 
    finalResult += "<th>Economic model</th>"; 
    finalResult += "<th>Video</th>"; 
    
    finalResult += "</tr>";

    // filling the table with data
    for (var i in actual_JSON){
        if(i>=10){break;} //Limit for tests
        obj = actual_JSON[i];
        
        var myResult = "<tr>"; 

        myResult += "<td><img src='" + obj.img + "'></img></td>";
        myResult += "<td><h3>" + obj.title + "</h3><p>";
        if(obj.date != null){
            myResult += obj.date;
        }  
        myResult += "</p></td>";
        myResult += "<td>";
        if(obj.abstract != null){
            myResult += obj.abstract;
        } 
        myResult += "</td>";
        myResult += "<td><a href='" + obj.link + "' target='_blank'><img src='link.png'</img</a></td>";  

        myResult += addDataIfExists(obj.area);
        myResult += addDataIfExists(obj.key_words);
        myResult += addDataIfExists(obj.contact);
        myResult += addDataIfExists(obj.state);
        myResult += addDataIfExists(obj.project_holder);
        myResult += addDataIfExists(obj.partner);
        myResult += addDataIfExists(obj.economic);
        myResult += addDataIfExists(obj.video);

        myResult += "</tr>";
        
        finalResult += myResult;
    }
    finalResult += "</table>";
    document.getElementById("data").innerHTML = finalResult;
}

function addDataIfExists(data){
    var result;
    result = "<td>";
        if(data != null){
            result += data;
        } 
    result += "</td>";
    return result
}
