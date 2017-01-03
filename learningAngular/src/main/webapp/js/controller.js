app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This works'; 
  $scope.image = 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx';
  $scope.items=[{
      name: "Dorritos",
      price: 1.25,
      image:"https://images-na.ssl-images-amazon.com/images/I/71Br1LeeJGL._SL1366_.jpg",
      stock: 4,
      place: "A1"
  },{
      name: "Lays",
      price: 1.50,
      image:"http://www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=2",
      stock: 6,
      place: "A2"
  }
  
        ];
        $scope.minusOne = function(index) { 
  	$scope.items[index].stock -= 1;
        if($scope.items[index].stock<=0){
            $scope.items[index].image="http://timebook.life/wp-content/uploads/2016/03/No-Content.png";
            $scope.items[index].stock = 0;
        }
	};
        $scope.minusStockByClick = function(string, double) { 
            for (var i = 0; i < $scope.items.length; i++) {
                if($scope.items[i].place===string && double>=$scope.items[i].price){
                    $scope.minusOne(i);
                }
                
            }
            $scope.inputModelPlace=null;
            $scope.inputModelMoney=null;
	};
}]);

