atyaatAppModule.controller('mainPageController',function($scope , $ionicSideMenuDelegate,$ionicPopup,$http, $state ){
  $scope.showbutton=false

  $scope.sideMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.fields=[
    "عطیات","صدقات","زکوٰۃ","فدیہ","فطرہ","تعمیِر مسجد","Card",
   ];
  $scope.fieldIndex = function (index){
    $scope.showbutton = true;
    //console.log(index)
    if(index == 0){
      $state.go('atyat')

    }
    else if(index == 1){
    $state.go('sadqat')

    }
    else if(index == 2){
      $state.go('zakat')

    }
    else if(index == 3){
      $state.go('fidya')

    }
    else if(index == 4){
      $state.go('fitra')

    }
    else if(index == 5){
      $state.go('taamer-e-masjid')

    }
    else if(index == 6){
      $state.go('Card')

    }
  }



});
