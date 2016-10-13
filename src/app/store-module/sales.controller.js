(function() {
    'use strict';

    angular
        .module('store-module')
        .controller('DashboardSalesController', DashboardSalesController);

    /* @ngInject */
    function DashboardSalesController($scope, $q, $timeout, $mdToast, $filter, $mdDialog, SalesService) {
        var vm = this;
        vm.dateRange = {
            start: moment().startOf('week'),
            end: moment().endOf('week')
        };

        vm.query = {
            order: 'date',
            limit: 5,
            page: 1
        };

        function createData() {
            vm.salesData = SalesService.generateSales(vm.dateRange);
            vm.chartLineData = SalesService.createLineChartData(vm.salesData);
            vm.chartPieData = SalesService.createPieChartData(vm.salesData);
            vm.chartBarData = SalesService.createBarChartData(vm.salesData);
        };

        // init

        createData();
    }
})();
