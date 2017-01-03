app.directive('itemBlock', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/itemBlock.html' 
  }; 
});
