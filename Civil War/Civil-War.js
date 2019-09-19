$(document).ready(function () {
	var bakcgroundImageArray = ["slide-2.jpg",
		"slide-3.jpg", "slide-4.jpg", "slide-5.jpg", "slide-11.jpg", "slide-13.jpg", "slide-14.jpg"];
	var bakcgroundImageIndex = 0;
	function changeBackground() {
		if (bakcgroundImageIndex >= bakcgroundImageArray.length) {
			bakcgroundImageIndex = 0;
		}
		$('#body').css("background-image", "url(images/" + bakcgroundImageArray[bakcgroundImageIndex] + ")");
		bakcgroundImageIndex++;
	}
	setInterval(changeBackground, 10000);

	var characters = [];
	var playerCharacterId = -1;
	var enemyCharacterId = -1;

	characters.push({
		"Health Points": 0,
		"Max Health Points": Math.floor(Math.random() * 200) + 75,
		"Base Attack Power": 0,
		"Attack Power": 0,
		"Counter Attack Power": 0,
		"Name": "Iron Man",
		"Image": "Iron_Man.png",
	});
	characters.push({
		"Health Points": 0,
		"Max Health Points": Math.floor(Math.random() * 200) + 75,
		"Base Attack Power": 0,
		"Attack Power": 0,
		"Counter Attack Power": 0,
		"Name": "Ant Man",
		"Image": "Ant_Man.png"
	});
	characters.push({
		"Health Points": 0,
		"Max Health Points": Math.floor(Math.random() * 200) + 75,
		"Base Attack Power": 0,
		"Attack Power": 0,
		"Counter Attack Power": 0,
		"Name": "Black Panther",
		"Image": "Black_Panther.png"
	});
	characters.push({
		"Health Points": 0,
		"Max Health Points": Math.floor(Math.random() * 200) + 75,
		"Base Attack Power": 0,
		"Attack Power": 0,
		"Counter Attack Power": 0,
		"Name": "Captain America",
		"Image": "Captain_America.png"
	});
	// characters.push({
	// 	"Health Points": 0,
	// 	"Base Attack Power": 0,
	// 	"Attack Power": 0,
	// 	"Counter Attack Power": 0,
	// 	"Name": "Black Widow",
	// 	"Image": "Black-Widow.jpg"
	// });
	characters.push({
		"Health Points": 0,
		"Max Health Points": Math.floor(Math.random() * 200) + 75,
		"Base Attack Power": 0,
		"Attack Power": 0,
		"Counter Attack Power": 0,
		"Name": "Falcon",
		"Image": "Falcon.jpg"
	});
	characters.push({
		"Health Points": 0,
		"Max Health Points": Math.floor(Math.random() * 200) + 75,
		"Base Attack Power": 0,
		"Attack Power": 0,
		"Counter Attack Power": 0,
		"Name": "Spider-man",
		"Image": "spider-man.jpg"
	});
	characters.push({
		"Health Points": 0,
		"Max Health Points": Math.floor(Math.random() * 200) + 75,
		"Base Attack Power": 0,
		"Attack Power": 0,
		"Counter Attack Power": 0,
		"Name": "Bucky",
		"Image": "Bucky.jpg"
	});

	$.each(characters, function (index, character) {
		generateCharacterAttributeValues(character);
		$("#characters").append(generateCharacterHtml(index, character));
	});

	// $(function () {
	// 	$("#progressbar").progressbar({
	// 		value: healthPoints + "%",
	// 	});
	// });

	function generateCharacterHtml(index, character) {

		var div = $("<div>");
		if (index !== 0) {
			div.attr("class", "character col-md-2 offset-md-1");
		} else {
			div.attr("class", "character col-md-2");
		}
		div.attr("id", index);
		var buttonContainer = $("<button>");
		buttonContainer.attr("type", "button");
		buttonContainer.attr("class", "btn btn-default m-3 p-2");
		var name = $("<p>");
		name.text(character["Name"]);
		var image = $("<img>");
		image.attr("src", "images/" + character["Image"]);
		image.attr("class", "character-image");
		var healthPoints = $("<p>");
		healthPoints.text(character["Health Points"]);
		var progressBarDiv = $("<div>");
		progressBarDiv.attr("id", "myProgress")
		var progressBar = $("<div>")
		progressBar.attr("id", "myBar")
		progressBarDiv.append(progressBar);
		buttonContainer.append(name).append(image).append(progressBarDiv).append(healthPoints);
		div.append(buttonContainer);
		return div;
	}


	function generateCharacterAttributeValues(character) {
		character["Health Points"] = Math.floor(Math.random() * 200) + 75;
		character["Health Points"] = character["Max Health Points"]
		character["Base Attack Power"] = Math.floor(Math.random() * 15) + 5;
		// console.log(Math.floor(Math.random() * 15))
		// console.log(character["Base Attack Power"]);
		character["Attack Power"] = character["Base Attack Power"];
		// console.log(character["Attack Power"])
		character["Counter Attack Power"] = Math.floor(Math.random() * 30) + 10;
		// console.log(character["Counter Attack Power"])
	}


	function generateSelectedCharacterHtml(parentHtmlId, characterHtml) {
		$(parentHtmlId).html(characterHtml);
	}

	function updateHtmlText(htmlElement, value) {
		$(htmlElement).text(value);
	}

	function gameFeedback(feedback) {
		if (feedback) {
			$("#game-feedback").append("<br>" + feedback);
		} else {
			$("#game-feedback").text("");
		}
	}

	function restartGame() {
		updateHtmlText($("#attack-button"), "Restart Game");
		$("#attack-button").on("click", function () {
			location.reload();
		});
	}

	$("#attack-button").on("click", function () {
		if (playerCharacterId !== -1 && enemyCharacterId !== -1) {
			var playerCharacter = characters[playerCharacterId];
			var enemyCharacter = characters[enemyCharacterId];

			// Napraveno Razlicni numb za att da dava i za playerDmg i za enemyDmg vo dolniot red pred proverkata za enemy dali e ziv
			var playerDmg = Math.floor(Math.random() * 30) + 5;
			var playerOnEnemyDamage = playerDmg
			// var playerOnEnemyDamage = playerCharacter["Attack Power"];

			enemyCharacter["Health Points"] -= playerOnEnemyDamage;
			// playerCharacter["Attack Power"] += playerCharacter["Base Attack Power"];
			// playerCharacter["Attack Power"] +=  Math.floor(Math.random() * 15) + 5;
			updateHtmlText($("#enemy-character button").children().last(), enemyCharacter["Health Points"]);
			gameFeedback();
			gameFeedback("<h5>You attacked " + enemyCharacter["Name"] + " for " + playerOnEnemyDamage + " damage.</h5>");

			var enemyPercent = enemyCharacter["Health Points"] / enemyCharacter["Max Health Points"] * 100;
			$(".enemy-character-bar").css("width", enemyPercent + "%") //currentHealth / maxHealth * 100
			// var spofas = enemyCharacter["Health Points"]
			if (enemyCharacter["Health Points"] <= 0) {
				console.log("test")
				enemyCharacterId = -1;
				enemyCharacter["Health Points"] = 0;

				if ($("#characters").text().length !== 0) {
					generateSelectedCharacterHtml("#enemy-character", "ENEMY CHARACTER");
					gameFeedback("You defeated " + enemyCharacter["Name"] + "! Pick another enemy to fight.");
				} else {
					gameFeedback("You Won! Please press the \"Restart Game\" button to play again.");
					restartGame();
				}
			}


			if (enemyCharacterId !== -1) {
				var enemyDmg = Math.floor(Math.random() * 30) + 10;
				enemyCharacter["Counter Attack Power"] = enemyDmg;
				playerCharacter["Health Points"] -= enemyCharacter["Counter Attack Power"];
				var playerPercent = playerCharacter["Health Points"] / playerCharacter["Max Health Points"] * 100;
				$(".player-character-bar").css("width", playerPercent + "%") //currentHealth / maxHealth * 100
				updateHtmlText($("#player-character button").children().last(), playerCharacter["Health Points"]);
				gameFeedback(enemyCharacter["Name"] + " attacked " + "you back for " + enemyCharacter["Counter Attack Power"] + " damage.");
			}


			if (playerCharacter["Health Points"] <= 0) {
				playerCharacter["Health Points"] = 0;
				

				gameFeedback("Game Over! Please press the \"Restart Game\" button to play again.");
				restartGame();
				console.log((playerCharacter["Health Points"]));
			}
		}
	});

	$(".character").on("click", function () {
		if ($("#player-character").text().length === "YOUR CHARACTER".length) {
			generateSelectedCharacterHtml("#player-character", $(this).html());
			$("#player-character #myBar").attr("class", "player-character-bar")
			playerCharacterId = $(this).attr("id");
			console.log()
			generateSelectedCharacterHtml($("#" + playerCharacterId), "");
		} else if ($("#player-character").text().length !== "YOUR CHARACTER".length && $("#enemy-character").text().length === "ENEMY CHARACTER".length) {
			generateSelectedCharacterHtml("#enemy-character", $(this).html());
			$("#enemy-character #myBar").attr("class", "enemy-character-bar")
			enemyCharacterId = $(this).attr("id");
			generateSelectedCharacterHtml($("#" + enemyCharacterId), "");
			gameFeedback();
		} else if ($("#enemy-character").text().length === 0) {
			generateSelectedCharacterHtml("#enemy-character", "ENEMY CHARACTER");
		}

	});

});

