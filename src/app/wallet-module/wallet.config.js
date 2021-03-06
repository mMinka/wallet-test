(function() {
    'use strict';

    angular
        .module('wallet-module')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.balance-page', {
            url: '/wallet-module/balance-page',
            // templateUrl: 'app/wallet-module/balance-page.tmpl.html',
            views: {
                '': {
                templateUrl: 'app/wallet-module/balance-page.tmpl.html'
                    // controller: 'DashboardSocialController',
                    // controllerAs: 'vm'
                },
                // added the fab button
                'belowContent': {
                   templateUrl: 'app/wallet-module/fab-transfer.tmpl.html',
                   controller: 'TransferFabController',
                   controllerAs: 'vm'
                }
            }
            ,data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });



        triMenuProvider.addMenu({
            name: 'Billetera',
            icon: 'fa fa-money',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Saldo',
                icon: 'fa fa-dashboard',
                state: 'triangular.balance-page',
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
