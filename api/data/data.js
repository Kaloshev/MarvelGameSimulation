function DataLayer() {
    this.marvelCharData = {};
    this.persistanceObject = new MarvelApi();

    this.populateCharData = async () => {
        this.marvelCharData = await this.persistanceObject.characterDetails("http://gateway.marvel.com:80/v1/public/characters?ts=" + ts + "&apikey=85b7d05b2fc8e8c9f30ff002a2a9fa01&hash=" + tocenhash + "&limit=100");
        // var offsetProba = 0;
        // var niza = [];
        // for (var i = 0; i < 10; i++) {

        //     offsetProba += 100;
        //     this.marvelCharData = await this.persistanceObject.characterDetails("http://gateway.marvel.com:80/v1/public/characters?ts=" + ts + "&apikey=85b7d05b2fc8e8c9f30ff002a2a9fa01&hash=" + tocenhash + "&limit=100" + "&offset=" + offsetProba);
        //     niza = [...niza, this.marvelCharData]

        // }

        // console.log(niza);

        // forot od 0 do 10 i mui dodavas 100ka na offeseot
    };
  

    this.getCharDetials = () => {
        return this.marvelCharData;
    };

}