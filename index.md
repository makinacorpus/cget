<html>
<head>
<meta charset="utf-8"/>
<script src="script_data_extended.js"></script>
<link rel="stylesheet" href="style.css" />
	<title>CGET data page</title>
</head>
<body>
	<div id="titles">
		<h1>This page is here to check cget data</h1>
		<h3>Choose an option to see some data</h3>
		<select onchange="init(this.options[this.selectedIndex].value);" 
				onload="init(this.options[0].value);">
			<option value="veolia">Veolia</option>
			<option value="solidarum">Solidarum</option>
			<option value="vinci">Vinci</option>
			<option value="carasso">Carasso</option>
			<option value="apriles">Apriles</option>
			<option value="bretagne">Bretagne Creative</option>
			<option value="unccas">Unccas</option>
			<option value="reseaurural">Reseau rural</option>
			<option value="avise">Avise</option>
			<option value="semeoz">Semeoz</option>
			<option value="ag2r">Ag2r lamondiale</option>
			<option value="villesinternet">Villes internet</option>
			<option value="europeenfrance">Europe en France</option>
		</select>
	</div>
	<div id="data"></div>
</body>
</html>
