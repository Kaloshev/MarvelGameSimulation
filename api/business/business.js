function BusinessLayer() {
    this.dataObject = new DataLayer();

    this.resolvedMarvelData = async () => {
        await this.dataObject.populateCharData();
        var marvelCharData = this.dataObject.getCharDetials();

        // console.log(marvelCharData);

        var niza = [];
        for (var i = 0; i < marvelCharData.data.results.length; i++){
            var tempObject = {
                marvelId: marvelCharData.data.results[i].id,
                marvelName: marvelCharData.data.results[i].name,
                marvelDesc: marvelCharData.data.results[i].description,
            };

            niza.push(tempObject);
            
        }
        // console.log(niza)

        return niza;
    }

}