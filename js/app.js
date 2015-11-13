var myApp = angular.module('doan0025-multilist', ['ngRoute', 'LocalStorageModule']);

myApp.config(function($routeProvider, $locationProvider, localStorageServiceProvider) {
    $routeProvider
    
    .when ('/', {
        templateUrl: 'templates/list1.html',
        controller: 'ListOneCtrl'
    })
    .when('/list-two', {
        templateUrl: 'templates/list2.html',
        controller: 'ListTwoCtrl'
        
    })
    .when('/list-three', {
        templateUrl: 'templates/list3.html',
        controller: 'ListThreeCtrl'
    });
    
    $routeProvider.otherwise({
        redirectTo: '/'
      });
    
});

//CONTROLLERS
myApp.controller('ListMainCtrl', function($scope, $route, $routeParams, $location) {

});

myApp.controller('ListOneCtrl', function ($scope, localStorageService, $routeParams) {
    if (localStorageService.isSupported) {
        
        var storageInfoList1 = localStorageService.get('list1') || [];
        
        $scope.taskList = storageInfoList1;
        $scope.taskList = [{name:'Walmart'}, {name:'See cousin'}, {name:'Clean coffeboard'}];
        $scope.localList = {};
    
        $scope.addTask = function() {
            if ($scope.taskName) {
                $scope.taskList.push({"name": $scope.taskName}); 
                $scope.taskName = "";
                localStorageService.set('list1', $scope.taskList);
            }
        }

        $scope.deleteTask = function(index) {
            $scope.taskList.splice(index, 1);
            localStorageService.set('list1', $scope.taskList);
        }
    }
});
                        
myApp.controller('ListTwoCtrl', function ($scope, localStorageService, $routeParams) {
    if (localStorageService.isSupported) {
        
        var storageInfoList2 = localStorageService.get('list2') || [];
     
        $scope.taskList = storageInfoList2;
        $scope.taskList = [{name:'Celque'}, {name:'Go to Canada Post'}, {name:'Do washing'}];
        $scope.localList = {};
    
        $scope.addTask = function() {
            if ($scope.taskName) {
                $scope.taskList.push({"name": $scope.taskName}); 
                $scope.taskName = "";
                localStorageService.set('list2', $scope.taskList);
        }

    }

        $scope.deleteTask = function(index) {
            $scope.taskList.splice(index, 1);
            localStorageService.set('list2', $scope.taskList);
        }
    }
});   

myApp.controller('ListThreeCtrl', function ($scope, localStorageService, $routeParams) {
    if (localStorageService.isSupported) {
        
        var storageInfoList3 = localStorageService.get('list3') || [];
        
        $scope.taskList = storageInfoList3;
        $scope.taskList = [{name:'Send email Tony'}, {name:'Android app'}, {name:'Call Rogers'}];
        $scope.localList = {};
    
        $scope.addTask = function() {
            if ($scope.taskName) {
                $scope.taskList.push({"name": $scope.taskName}); 
                $scope.taskName = "";
                localStorageService.set('list3', $scope.taskList);
            }
        }

        $scope.deleteTask = function(index) {
            $scope.taskList.splice(index, 1);
            localStorageService.set('list3', $scope.taskList);
        }
    }
});  