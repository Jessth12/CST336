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
	var url = "https://pokeapi.co/" + api + "/" + value;
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
			console.log(data);
			data.message.forEach(function(src){
				$("#text").append();
			});
		},
		error: function(err){
			console.log(err);
		}
	});
}



