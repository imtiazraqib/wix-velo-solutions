/*
Filtering Repeater based on Current Date
Author: Imtiaz Raqib
Date: September 22, 2022
Use Case: Allowing a repeater to filter items to show UPCOMING items only based on date
*/

import wixData from 'wix-data';

$w.onReady(function () {

    $w("#GameScheduleDataset").onReady(() => {
        let sToday = new Date();
        $w("#GameScheduleDataset").setFilter(wixData.filter().ge("gameDateTime", sToday))
		.then( () => {
			console.log("Dataset is now filtered");
			} )
			.catch( (err) => {
			console.log(err);
			} );
    });
});
