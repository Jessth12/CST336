$("#form").submit(function(e){
	
	if($('input[name="choice"]:checked').val() == "p"){
		queryPokeAPI("pokemon", $("#keyword").val());
	} else {
		queryPokeAPI("pokemon-color", $("#keyword").val());
	}
		
	
    return false;
});

function queryPokeAPI(api, value){
	$("#text").empty();
	var url = "https://pokeapi.co/api/v2/" + api + "/" + value;
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
			console.log(data);
			if (api == "pokemon") {
				displayPokemon(data);
			} else {
				displayPokemonList(data);
			}
		},
		error: function(err){
			console.log(err);
		}
	});
}

function displayPokemon(data) {
	
	$("#text").append("<div><h2> " + data["name"] + " </h2></div>");
	$("#text").append("<img src=" + data["sprites"]["front_default"] + "> ");
	$("#text").append("<span> Weight in Hectograms: " + data["weight"] + " </span>");
	$("#text").append("<span> Height in decimetres.: " + data["height"] + " </span>");
	$("#text").append("<span> Species: " + data["species"]["name"] + " </span>");
	$("#text").append("<span><strong> order:<strong> "+" " + data["order"] + " </span>");
}

function displayPokemonList(data) {
	$("#text").append("<h3> List of Pokemon of color: " + $("#keyword").val() + " </h3>");
	for (let i = 0; i < data["pokemon_species"].length; i++) {
		$("#text").append("<span> " + data["pokemon_species"][i]["name"] + " </span>");
	}
	for (let i = 0; i < data["pokemon_species"].length; i++) {
		$("#text").append("<img src=" + data["sprites"]["front_default"] + "> ");
	}
}




