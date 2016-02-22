/**
 * Created by Shoukat on 2/22/2016.
 */
atyaatAppModule.controller('atyatCtrl',function($scope,$ionicPopup,$state,$http){
  $scope.atyatData = {};



  $scope.getUserCradential= function() {

    $http.post('http://localhost:8000/atyat',{
      atyatData: $scope.atyatData
    }).success(function(response){
      console.log(response);

    }).error(function(error){
      console.log(error);
    })

  }

})
