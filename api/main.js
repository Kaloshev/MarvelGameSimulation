function main () {

    var business = new BusinessLayer();
    business.resolvedMarvelData();

    var presentation = new Presentation();
    presentation.displayMarvelData();

}

main()