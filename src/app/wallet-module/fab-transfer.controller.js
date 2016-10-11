(function() {
    'use strict';

    angular
        .module('wallet-module')
        .controller('TransferFabController', TransferFabController);

    /* @ngInject */
    function TransferFabController($rootScope) {
        var vm = this;
        vm.addTransfer = addTransfer;

        ////////////////

        function addTransfer($event) {
            $rootScope.$broadcast('addTransfer', $event);
        }
    }
})();
