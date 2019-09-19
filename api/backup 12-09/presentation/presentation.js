function Presentation() {
    this.business = new BusinessLayer();

    this.displayCharacterDetails = async () => {
        var characterDetails = await this.business.getAndResolveCharacterDetails();
        var body = $("body");
        console.log("sdasd")

        var charDetailsDiv = $("<div>").text(characterDetails)

        body.append(charDetailsDiv);


    }
}