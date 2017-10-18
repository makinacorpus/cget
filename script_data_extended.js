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
    
    finalResult += "<th>Image / Video</th>";
    finalResult += "<th>Title / Date / Link</th>";
    finalResult += "<th>Abstract</th>";
    finalResult += "<th>Area</th>"; 
    finalResult += "<th>Key words</th>"; 
    finalResult += "<th>Contact</th>"; 
    finalResult += "<th>State (finnished)</th>"; 
    finalResult += "<th>Project holder</th>"; 
    finalResult += "<th>Partner</th>"; 
    finalResult += "<th>Economic model</th>";
    
    finalResult += "</tr>";

    // filling the table with data
    for (var i in actual_JSON){
        if(i>=20){break;} //Limit for tests
        obj = actual_JSON[i];
        
        var myResult = "<tr>"; 
        if (obj.video == null) {
            obj.video = "";
        }
        myResult += "<td><img src='" + obj.img + "'></img><a href='" + obj.video + "' target='_blank'>" + obj.video + "</a></td>";
        myResult += "<td><a href='" + obj.link + "' target='_blank'><h3>" + obj.title + "</h3></a><p>";
        if(obj.date != null){
            myResult += obj.date;
        }  
        myResult += "</p></td>";
        myResult += addDataIfExists(obj.abstract); 

        myResult += addDataIfExists(obj.area);
        myResult += addDataIfExists(obj.key_words);
        myResult += addDataIfExists(obj.contact);
        myResult += addDataIfExists(obj.state);
        myResult += addDataIfExists(obj.project_holder);
        myResult += addDataIfExists(obj.partner);
        myResult += addDataIfExists(obj.economic);

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
            if(typeof data != "string"){
                result += addListIfExists(data);
            }
            else{
                if(data.length > 100){
                    data = data.substring(0, 100);
                    data += "(...)";
                }
                result += data;
            }
        } 
    result += "</td>";
    return result
}

function addListIfExists(data){
    var result = "";
    var my_data = "";
    for (var i=0; i < data.length; i++) {
        if (i >= 5){
            break;
        }
        my_data = data[i]; 
        if(my_data.length > 40){
            my_data = my_data.substring(0, 40);
            my_data += "(...)";
        }
        result += my_data + "</br>";
    }
    if (data.length > i){
        result += "(" + (data.length - i) + " more)"
    }
    return result
}


