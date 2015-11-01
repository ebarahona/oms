(function(){
  var app = angular.module('oms.customers.directives', []);

  app.directive('customerDetails', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'customers/customer-details-directive.template.html'
    };
  });
})();