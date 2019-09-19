var apiKey = "85b7d05b2fc8e8c9f30ff002a2a9fa01";
var privKey = "1043a5a992343b465f055148bc1258783dfa9aa8";
var ts = new Date().getTime();
var hash = ts + privKey + apiKey
// console.log(CryptoJS.MD5(hash).toString())
var tocenhash = (CryptoJS.MD5(hash).toString())


function MarvelApi() {
    this.getMarvelApiData = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://gateway.marvel.com:80/v1/public/characters?ts=" + ts + "&apikey=85b7d05b2fc8e8c9f30ff002a2a9fa01&hash=" + tocenhash,
                type: "GET",
                success: function (data) {
                    console.log(data);
                    console.log("sdasda");
                    resolve(data);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });
    };

    this.getCharacterDetails = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://gateway.marvel.com:80/v1/public/characters?ts=" + ts + "&apikey=85b7d05b2fc8e8c9f30ff002a2a9fa01&hash=" + tocenhash,
                type: "GET",
                success: function (data) {
                    resolve(data);
                    console.log(data)
                    console.log("data")
                },
                error: function (error) {
                    reject(error);
                }
            })
        })

    }


}


// $.ajax({
//     url: "http://gateway.marvel.com:80/v1/public/characters?ts=" + ts + "&apikey=85b7d05b2fc8e8c9f30ff002a2a9fa01&hash=" + tocenhash,
//     type: "GET",
//     success: function (response) {
//         // resolve(response);
//         // console.log("das");
//         console.log(response)
//     },
// });



