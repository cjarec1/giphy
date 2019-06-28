
function getRandom() {

    for(let x = 0; x < 3; x++){
        var xhr = $.get("http://api.giphy.com/v1/gifs/random?tag=&api_key=RkZMkXQ7kzeKtcu6e2IjSq5cOHT6Svm0");
        xhr.done(function (response) {
    
            console.log("success got data", response);
            
                $('.results').append(
                    "<div class='outer'><video class='vid' src='" + response.data.images.original.mp4 + "' controls autoplay loop height='300' width='350'/>" +
                    "<input type='text' value='" + response.data.url + "' id='copyUrl'><button class='butn' onclick='copyText()'>Copy URL</button> </div>"
                )
                //url under each one to copy
            
        });
    }

}

function getSearch() {

    var input = $("#search").val()
    $('.results').empty()
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=RkZMkXQ7kzeKtcu6e2IjSq5cOHT6Svm0&limit=30");
    xhr.done(function (response) {

        console.log("success got data", response);
        var jifs = response.data

        for (i in jifs) {
            $('.results').append(
                "<div class='outer'><video class='vid' src='" + jifs[i].images.original.mp4 + "' controls autoplay loop height='300' width='350'/>"+
                "<input type='text' value='" + jifs[i].url + "' id='copyUrl'><button class='butn' onclick='copyText()'>Copy URL</button> </div>"
            )
            //url under each one to copy
        }

    });

}

function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("copyUrl");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand('copy');

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}



