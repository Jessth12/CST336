// var API_KEY = '15404345-979178851b5d3b479f4507edb';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

function getRandomElements(arr, amount) {
  if (arr.length <= amount) {
    return arr;
  }
  
  let got = [];
  let res = [];
  while (res.length < amount) {
    let pos = Math.floor(Math.random()*arr.length);
    if (got.includes(pos)) {
      continue;
    } else {
      got.push(pos);
      res.push(arr[pos]);
    }
  }
  
  return res;
}

function display_imgs(imgs) {
  for (let i = 0; i < imgs.length; i++) {
        $("#img-container").append("<img src=" + imgs[i]["webformatURL"] + ">");
        $("#likes-container").append("<span>Likes: " + imgs[i]["likes"] + "</span>")
  }
}

function getInput(){
  
  $("#img-container").empty();
  $("#likes-container").empty();
  
  let keyword = $('#keyword').val();
  let orientation =  $('#orientation').val();
  let likes = $('#likes').val();
  
  var API_KEY = '15404345-979178851b5d3b479f4507edb';
  var URL = "https://pixabay.com/api/?key="+API_KEY;
  $.ajax({
    url: URL,
    method: 'GET',
    dataType: 'JSON',
    data: {
      'q': keyword,
      'orientation': orientation
    },
    success: function(data) {
      let hits = data["hits"];
      let rand_imgs = getRandomElements(hits, 4);
      display_imgs(rand_imgs);
    },
    error: function(err) {
      console.log('error:' + err)
    }
  });
}
