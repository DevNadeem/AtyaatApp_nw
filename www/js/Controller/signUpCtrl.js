/**
 * Created by Nadeem on 1/13/2016.
 */
atyaatAppModule.controller('signUpCtrl',function($scope,$ionicPopup,$state,$http){
  $scope.signUpData = {};



  $scope.getUserCradential= function() {

  $http.post('http://localhost:8000/signUp',{
    signUpData: $scope.signUpData
  }).success(function(response){
    console.log(response);

  }).error(function(error){
    console.log(error);
  })

  }

})
