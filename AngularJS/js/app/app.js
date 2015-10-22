var imgClicker = angular.module('imgClicker',[]);

imgClicker.controller('imgListCtrl', function($scope, $http){
    
    $scope.gallery = [];
    $scope.galleryFirst = '';
    $scope.showEditPart = false;
    
    $scope.updateImg = function (photo){
        $scope.photo = photo;
        
        var i;
        for( i=0; i < $scope.gallery.length; i++ ) {
            $scope.gallery[i].selected = false;
        }
        photo.selected = true;
    };
    
    $scope.updateCounter = function (){
        $scope.photo.clicks = +$scope.photo.clicks + 1;
    };
    
    $scope.init = function (){
        //helpers
        function successCallback (responce){
            $scope.gallery = responce.data;
            $scope.galleryFirst = $scope.gallery[0];
            angular.forEach($scope.gallery, function(el){
                el.clicks = 0;
                el.selected = false;
            });
        };
    
        function errorCallback (){
            console.log('error');
        };
    
        $http.get('data/imgList.json').then(successCallback, errorCallback);
        
        $scope.$watch('galleryFirst', function() {
            $scope.galleryFirst.selected = true;
            $scope.updateImg($scope.galleryFirst);
        });
    };

    $scope.init();
});