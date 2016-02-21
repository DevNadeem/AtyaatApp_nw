/**
 * Created by Mashwani on 1/10/2016.
 */

atyaatAppModule.controller('loginCtrl',function($scope,$state){

  $scope.IDGetter = function(){
    $state.go('popUp');
  }
});
