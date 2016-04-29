'use strict';

var app = angular.module('myApp', []);


app.controller('mainController', function($scope, Item) {
	// var init = function() {
	Item.getAll()
  	.then(res => {
    	$scope.items = res.data;
    	console.log($scope.items)
  	})
    .catch(err => {
    	console.log('err:', err);
    });
	// }

	$scope.addItem = () => {
		
		Item.create($scope.itemToEdit)
		.then(res => {
			// init();
			$scope.itemToEdit = null;	
		})
		.catch(err => {
      	console.error(err);
    	});			
	}

	$scope.removeItem = item => {
		Item.remove(item)
		.then(() => {
			console.log('item:', item);

			var index = $scope.items.indexOf(item);
			$scope.items.splice(index, 1);	
		})
		.catch(err => {
			console.error(err);
		});	
	};


	var editingIndex;
	$scope.editingVar = false;

	$scope.editItem = item => {
		$scope.editingVar = true;
		editingIndex = $scope.items.indexOf(item);
    	$scope.itemToEdit = angular.copy(item);
	}

	$scope.saveEdit = () => {
		$scope.editingVar = false;
    	$scope.items[editingIndex] = $scope.itemToEdit;
    	$scope.itemToEdit = null;
	}

	$scope.cancelEdit = () => {
		$scope.contactToEdit = null;
	}


	$scope.sortBy = order => {
		if($scope.sortOrder === order) {
			$scope.sortOrder = `-${order}`;
		} else if($scope.sortOrder === `-${order}` ) {
			$scope.sordtOrder = "";
		} else {
			$scope.sortOrder = order;	
		}		
	}

	var items = $scope.items;

	$scope.getTotalCredits = () => {
    	var totalCredits = 0;
    	for(var item of $scope.items){
    		totalCredits += Number(item.credit) || 0;
    	}
    	console.log(totalCredits);
    	return totalCredits;   	
	}

    $scope.getTotalDebits = () => {
    	var totalDebits = 0;
    	for(var item of $scope.items){
			totalDebits += Number(item.debit) || 0;
    	}
    	return totalDebits;
	}


	$scope.getBalance = () => {
		var balance = $scope.getTotalCredits() + $scope.getTotalDebits();
		return balance;
	};
});

