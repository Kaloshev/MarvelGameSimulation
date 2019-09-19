function BusinessLayer() {
    this.dataObject = new DataLayer();

    this.resolveMarvelApiData = async () => {
        await this.dataObject.populateMarvelApiData();
        var data = this.dataObject.getMarvelApiData();
        console.log(data);
        console.log("sdasd");

        var charName = [];
        var allCharNames = data.data.results;
        for (var i = 0; i < allCharNames.length; i++) {
            var tempObject = {
                characterName: allCharNames[i].name,

            };
            charName.push(tempObject);
        }
        console.log(charName)

    }

    this.getAndResolveCharacterDetails = async () => {
        await this.dataObject.populateCharacterDetails();
        var charDetails = this.dataObject.getCharacterDetails();
        console.log(charDetails);
    }
}