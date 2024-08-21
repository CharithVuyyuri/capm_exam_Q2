sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ust.charith.vuyyuri.appmodule',
            componentId: 'purchaseorderSetList',
            contextPath: '/purchaseorderSet'
        },
        CustomPageDefinitions
    );
});