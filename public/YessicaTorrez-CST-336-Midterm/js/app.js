
// $("#img-container").empty();
//     let bibkeys = $('#bibkeys').val();
    
// 	//randomized url 
// 	var url = "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback";
// 	$.ajax({
// 		url: url,
// 		type: "GET",
// 		dataType: "json",
// 		success: function(data){
// 			data.message.forEach(function(src){
// 				$("#bibkeys").append();
// 			});
// 		},
// 		error: function(err){
// 			console.log(err);
// 		}
// 	});
function getInput(){
  
  $("#img-container").empty();
  
  
  let bibkeys = $('#bibkeys').val();
  
  
  var URL = "https://openlibrary.org/api/books";
  $.ajax({
    url: URL,
    method: 'GET',
    dataType: 'JSON',
    data: {
      'bibkeys': bibkeys,
      
      
    },
    success: function(data) {
    data.message.forEach(function(src){
				$("#bibkeys").append();
		    console.log("found");
			});
 
    },
    error: function(err) {
      //console.log('error:' + err)
    }
  });
}
