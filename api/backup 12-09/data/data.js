function DataLayer() {
    this.marvelApiData = {};
    this.characterDetails = {};
    this.persistanceObject = new MarvelApi();

    this.populateMarvelApiData = async () => {
        this.marvelApiData = await this.persistanceObject.getMarvelApiData();
    };

    this.getMarvelApiData = () => {
        return this.marvelApiData;
    }

    this.populateCharacterDetails = async () => {
        this.characterDetails = await this.persistanceObject.getCharacterDetails();
    };

    this.getCharacterDetails = () => {
        return this.characterDetails;
    }
}