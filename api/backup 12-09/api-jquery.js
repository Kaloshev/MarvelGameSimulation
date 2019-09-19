$.ajax({
    type: "GET",
  
    url: "",
    success: function (response) {
        // var lastFm = $('#lastFm')
        // var nameArtist = $('<div>').text("Artist name : " + response.topalbums["@attr"].artist).css("background-color", "Blue");
        // lastFm.append(nameArtist)
        // var nameAlbum = $('<div>').text("Album name : " + response.topalbums.album[i].name)
        // lastFm.append(nameAlbum)

        // console.log(response.topalbums["@attr"].artist)
        console.log(response)

        // for (var i = 0; i < 10; i++) {
        //     var image = $("<img>").attr("id","slika");
        //     lastFm.append(image)
        //     image.attr("src", response.topalbums.album[i].image[2]["#text"])
            
        //     // console.log(response.topalbums.album[i].name)
        //     // console.log();
            
        // }

    }
})