//Loading the JSON file
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
    
    finalResult += "</tr>";

    // filling the table with data
    for (var i in actual_JSON){
        if(i>=100){break;} //Limit for tests
        obj = actual_JSON[i];

        var img = obj.img;
        var title = obj.title;
        var link = obj.link;
        var abstract = obj.abstract;
        var date = obj.date;
        
        var myResult = "<tr>"; 

        myResult += "<td><img src='" + img + "'></img></td>";
        myResult += "<td><h3>" + title + "</h3><p>" + date + "</p></td>";
        myResult += "<td>";
        if(abstract != null){
            myResult += abstract;
        } 
        myResult += "</td>";
        myResult += "<td><a href='" + link + "' target='_blank'><img src='link.png'</img</a></td>";  

        myResult += "</tr>";
        
        finalResult += myResult;
    }
    finalResult += "</table>";
    document.getElementById("data").innerHTML = finalResult;
}
