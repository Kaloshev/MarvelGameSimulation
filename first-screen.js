
$(document).ready(function () {

    // promena na pozadina na vremenski interval 
    var backgroundArray = ["marvel-1.jpg",
        "marvel-2.jpg", "slide-15.jpg"]
    var backgroundIndex = 0;
    function changeBackground() {
        if (backgroundIndex >= backgroundArray.length) {
            backgroundIndex = 0;
        }
        $('body').css("background-image", "url(images/" + backgroundArray[backgroundIndex] + ")");
        backgroundIndex++;
    }
    setInterval(changeBackground, 10000);

    //Nov div so ID root
    var body = $("body")
    var root = $("<div>");
    root.attr("id", "root");
    body.append(root);

    var civilWar = $("<button>");
    civilWar.attr("type", "button");
    civilWar.text("Civil War Simulation");
    civilWar.attr("class", "civil-war banner")
    civilWar.attr("href", "D:/Marvel Project/Civil War/index.html")

    var thanosWar = $('<button>');
    thanosWar.attr("type", "button");
    thanosWar.text("Thanos War");
    thanosWar.attr("class", "thanos-war banner")
    thanosWar.attr("href", "D:/Marvel Project/Thanos War/indexThanos.html")

    var moreInfo = $('<button>');
    moreInfo.attr("type", "button");
    moreInfo.text("More information about the movies");
    moreInfo.attr("class", "moreInfo banner ")
    moreInfo.attr("href", "D:/Marvel Project/api/index-api.html")


    root.append(civilWar).append(thanosWar).append(moreInfo);

    $(".civil-war").on("click", function () {

        window.location.href = "Civil War/index.html"

    });

    $(".thanos-war").on("click", function () {

        window.location.href = "thanos War/indexThanos.html"

    });
    $(".moreInfo").on("click", function () {

        window.location.href = "api/index-api.html"

    });

});