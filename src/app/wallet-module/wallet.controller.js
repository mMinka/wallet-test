(function() {
    'use strict';

    angular
        .module('wallet')
        .controller('TransferController', TransferController);

    /* @ngInject */
    function TransferController($scope, $state, $mdDialog, TransferService) {
        var vm = this;
        //
        // vm.orderTodos = orderTodos;
        // vm.removeTodo = removeTodo;
        // vm.todoSelected = todoSelected;
        //
        // //////////////////////////
        //
        // function init() {
        //     vm.todos = TodoService.getTodos();
        //     TodoService.updateMenuBadge();
        // }
        //
        // function orderTodos(task) {
        //     switch(task.priority){
        //         case 'high':
        //             return 1;
        //         case 'medium':
        //             return 2;
        //         case 'low':
        //             return 3;
        //         default: // no priority set
        //             return 4;
        //     }
        // }
        //
        // function removeTodo(todo){
        //     TodoService.removeTodo(todo);
        // }
        //
        // function todoSelected() {
        //     TodoService.updateMenuBadge();
        // }

        // init

        init();

        // watches

        $scope.$on('addTransfer', function( ev ){
            $mdDialog.show({
                templateUrl: 'app/wallet/add-transfer-dialog.tmpl.html',
                targetEvent: ev,
                controller: 'DialogController',
                controllerAs: 'vm'
            });
            // .then(function(newTransfer) {
            //     TransferService.transferTransfer(newTransfer);
            // });
        });
    }
  
})();
