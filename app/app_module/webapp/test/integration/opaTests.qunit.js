sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ust/charith/vuyyuri/appmodule/test/integration/FirstJourney',
		'ust/charith/vuyyuri/appmodule/test/integration/pages/purchaseorderSetList',
		'ust/charith/vuyyuri/appmodule/test/integration/pages/purchaseorderSetObjectPage',
		'ust/charith/vuyyuri/appmodule/test/integration/pages/poitemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, purchaseorderSetList, purchaseorderSetObjectPage, poitemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ust/charith/vuyyuri/appmodule') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThepurchaseorderSetList: purchaseorderSetList,
					onThepurchaseorderSetObjectPage: purchaseorderSetObjectPage,
					onThepoitemsObjectPage: poitemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);