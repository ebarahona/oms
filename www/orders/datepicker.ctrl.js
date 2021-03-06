(function(){
  'use strict';

  angular.module('oms.orders')
    .controller('DatepickerController', datepickerCtrl);

  datepickerCtrl.$inject = ['$scope'];


  function datepickerCtrl($scope) {

    $scope.open = function($event) {
      $scope.status.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.format = 'yyyy-MM-dd'

    $scope.status = {
      opened: false
    };
  }
})();
