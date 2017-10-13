<html>
<head>
<meta charset="utf-8"/>
<script src="script_data_extended.js"></script>
<link rel="stylesheet" href="style.css" />
	<title>CGET data page</title>
</head>
<body>
	<h1>This page is here to check cget data</h1>
	<h3>Choose an option to see some data</h3>
	<select onchange="init(this.options[this.selectedIndex].value);" 
			onload="init(this.options[0].value);">
		<!--<option value="veolia">Veolia</option>-->
		<option value="solidarum">Solidarum</option>
		<!--<option value="vinci">Vinci</option>-->
		<!--<option value="carasso">Carasso</option>-->
		<!--<option value="apriles">Apriles</option>-->
		<option value="bretagne">Bretagne Creative</option>
		<!--<option value="unccas">Unccas</option>-->
		<option value="reseaurural">Reseau rural</option>
		<option value="avise">Avise</option>
	</select>
	<div id="data"></div>
	<table>	
		<tr>
	    	<th>Image</th>
		    <th>Title</th>
		    <th>Abstract</th>
		    <th>Link</th>
		    <th>Area</th>
		    <th>Key words</th> 
		    <th>Contact</th>
		    <th>State (finnished)</th>
		    <th>Project holder</th>
		    <th>Partner</th> 
		    <th>Economic model</th>
		    <th>Video</th>
		</tr>
	</table>
</body>
</html>