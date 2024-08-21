sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ust.charith.vuyyuri.appmodule',
            componentId: 'purchaseorderSetObjectPage',
            contextPath: '/purchaseorderSet'
        },
        CustomPageDefinitions
    );
});