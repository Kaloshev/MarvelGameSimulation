function Presentation() {
    this.business = new BusinessLayer();

    this.displayMarvelData = async () => {
        var data = await this.business.resolvedMarvelData();
        console.log(data);

        var body = $("body");
        // var glavenDiv = $("<div>");
        // glavenDiv.attr("class", "Glaven-Div")
        
        for (i = 0; i < data.length; i++) {
            var charId = data[i].marvelId + " - "
            var charName = " " + data[i].marvelName + " - "
            var charDesc = " " + data[i].marvelDesc
            var glavenDiv = document.createElement("div");

            glavenDiv.id = i;
            glavenDiv.append(charId);
            glavenDiv.append(charName);
            glavenDiv.append(charDesc);
            body.append(glavenDiv);

            // glavenDiv.id = i
            // glavenDiv.append(charId).append(charName).append(charDesc);

            // body.append(glavenDiv)
        }

        var glavenDiv = document.getElementById("body");
        glavenDiv.addEventListener("click", function () {
            // console.log("testsClick")
            var getClickedChar = event.target.id;
            var getDiv = event.target;
            getid = getDiv;

            // var showChar = document.createElement("div");
            var showCharInfo = document.createElement("div");
            showCharInfo.innerHTML = data[getClickedChar].marvelId + " - " + data[getClickedChar].marvelName + " - " + data[getClickedChar].marvelDesc + " - ";
            var body = $("body");
            body.html("");
            glavenDiv.appendChild(showCharInfo)

            console.log(showCharInfo)
            // showChar.innerHTML = data[getClickedChar].marvelId;
            // glavenDiv.appendChild(showChar);
            // console.log(showChar)

        })

        var input = document.createElement("input");
        glavenDiv.appendChild(input);
        var button = document.createElement("button");
        glavenDiv.appendChild(button);
        button.innerHTML = "search";
        button.addEventListener("click", () => {
            var searchArea = document.createElement("div");
            var body = $("body");
            body.html("");
            glavenDiv.appendChild(searchArea);
            var inputValue = input.value;
            for (var i = 0; i < data.length; i++) {
                if (inputValue == data[i].marvelName) {
                    var result = document.createElement("div");
                    searchArea.appendChild(result);
                    result.innerHTML = data[i].marvelId + "  " + data[i].marvelName + " " + data[i].marvelDesc;

                }
                // else {

                //     var nemaNema = document.createElement("div");
                //     nemaNema.innerHTML = "Nema takov karakter :)"
                //     searchArea.appendChild(nemaNema);
                //     // console.log(nemaNema)



                // }
            }
        });

    }
}