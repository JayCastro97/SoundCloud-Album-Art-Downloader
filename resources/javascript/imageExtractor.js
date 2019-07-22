console.log("CONNECTED");
var text = document.querySelector("input[type='text']");
var button = document.querySelector("button");
var url;

button.addEventListener("click", function(){
	console.log("url: " + text.value);
	get(text.value).then(function(response) {
	  console.log("Success!", response);
	}, function(error) {
	  console.error("Failed!", error);
	});

});




function get(url) {
// Return a new promise.
return new Promise(function(resolve, reject) {
	// Do the usual XHR stuff
	var req = new XMLHttpRequest();
	req.open('GET', url);

    req.onload = function() {
      // 200 = HTTP Success Status Code
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };
    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}
function download(){
	var span = document.querySelector("span.sc-artwork.sc-artwork-placeholder-2.image__full");
	var image = obj.style.backgroundImage;
}


//"background-image: url("https://i1.sndcdn.com/artworks-000569624996-ofkp2c-t500x500.jpg"); width: 100%; height: 100%;
