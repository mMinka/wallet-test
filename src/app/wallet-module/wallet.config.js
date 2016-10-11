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
                    // controller: 'TodoController',
                    // controllerAs: 'vm'
                },
                'belowContent': {
                   templateUrl: 'app/wallet-module/fab-transfer.tmpl.html'
                }
            //     ,'belowContent': {
            //         templateUrl: 'app/wallet-module/fab-transfer.html'
            // //         // controller: 'TodoFabController',
            //         // controllerAs: 'vm'
                //  }
            }
            ,data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });



        triMenuProvider.addMenu({
            name: 'Wallet',
            icon: 'fa fa-money',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Balance',
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
