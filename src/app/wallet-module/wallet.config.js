(function() {
    'use strict';

    angular
        .module('wallet-module')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.wallet-page', {
            url: '/wallet-module/wallet-page',
            templateUrl: 'app/wallet-module/wallet-page.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        ;

        triMenuProvider.addMenu({
            name: 'Wallet',
            icon: 'fa fa-tree',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Wallet Page',
                state: 'triangular.wallet-page',
                type: 'link'
            }
          ]
        });
    }
})();
