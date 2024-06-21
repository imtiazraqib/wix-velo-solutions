// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';

$w.onReady(function () {

//SEARCH BUTTON TRIGGER⚡
    $w("#searchButton").onClick(function () {
        search();
    });

    //ENTER KEY TRIGGER⚡
    $w("#searchBar").onKeyPress(function (event) {
        if (event.key === "Enter") {
            search();
        }
    });

	//SEARCH FUNCTION🚀
    function search() {

        $w("#dataset1").onReady(function () {
            $w("#dataset1").setFilter(wixData.filter().contains("schoolName", String($w('#searchBar').value)))
            $w("#clearFilter").show();
        })
    }

	//CLEAR FILTER 🚀
    $w("#clearFilter").onClick(function () {
        $w("#searchBar").value = undefined;
		$w("#clearFilter").hide();
        $w("#dataset1").setFilter(wixData.filter())
	});

	//SCROLL TO THE TOP WHEN PAGINATION IS CHANGED ⚡
    $w("#pagination1").onClick(() => {
        $w("#listAnchor").scrollTo();
    });

});
