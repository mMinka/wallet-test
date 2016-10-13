(function() {
    'use strict';

    angular
        .module('store-module')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.sales-page', {
            url: '/store-module/sales-page',
            // templateUrl: 'app/wallet-module/balance-page.tmpl.html',
            views: {
                '': {
                templateUrl: 'app/store-module/sales-page.tmpl.html',
                    controller: 'DashboardSalesController',
                     controllerAs: 'vm'
                 }
                // // added the fab button
                // 'belowContent': {
                //    templateUrl: 'app/wallet-module/fab-transfer.tmpl.html',
                //    controller: 'TransferFabController',
                //    controllerAs: 'vm'
                // }
            }
            ,data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });



        triMenuProvider.addMenu({
            name: 'Tienda',
            icon: 'fa fa-shopping-cart',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Ventas',
                icon: 'fa fa-dashboard',
                state: 'triangular.sales-page',
                type: 'link'
            }
            //,{
            //     name: 'Pagos',
            //       icon: 'fa fa-shopping-cart',
            //     state: 'triangular.balance-page',
            //     type: 'link'
            // }
            // ,{
            //     name: 'Fuentes',
            //       icon: 'fa fa-credit-card',
            //     state: 'triangular.balance-page',
            //     type: 'link'
            // }
          ]
        });
    }
})();
