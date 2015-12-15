
      angular.module('tabApp', [])
        .controller('TabController', ['$scope', function($scope) {
          $scope.tab = 1;

          $scope.setTab = function(newTab){
            $scope.tab = newTab;
          };

          $scope.isSet = function(tabNum){
            return $scope.tab === tabNum;
          };
      }]);

      function TodoController ($scope) {
        $scope.saved = localStorage.getItem('todos');
        $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Finish missing assignments', done: false}, {text: 'FInal assignment', done: false} ];
        localStorage.setItem('todos', JSON.stringify($scope.todos));

        $scope.addTodo = function() {
          $scope.todos.push({
            text: $scope.todoText,
            done: false
          });
          $scope.todoText = ''; //clear the input after adding
          localStorage.setItem('todos', JSON.stringify($scope.todos));
        };

        $scope.remaining = function() {
          var count = 0;
          angular.forEach($scope.todos, function(todo){
            count+= todo.done ? 0 : 1;
          });
          return count;
        };

        $scope.archive = function() {
          var oldTodos = $scope.todos;
          $scope.todos = [];
          angular.forEach(oldTodos, function(todo){
            if (!todo.done)
              $scope.todos.push(todo);
          });
          localStorage.setItem('todos', JSON.stringify($scope.todos));
        };
      }