(function() {
	'use strict';

	

	angular.module("ShoppingListCheckOff", [])

	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuy = this;
		toBuy.items = ShoppingListCheckOffService.getToBuy();
		toBuy.checkOffItem = function (itemIndex){
			ShoppingListCheckOffService.checkOffItem(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;
		bought.items = ShoppingListCheckOffService.getBought();
	}

	function ShoppingListCheckOffService(){
		var service = this;

		var to_buy_items = [{name: "dozen eggs", quantity: "2"}, 
		{name: "banana", quantity: "5"}, {name: "loaf of bread", quantity: "1"},
		{name: "gallon of milk", quantity: "2"},{name: "bagel", quantity: "12"},
		{name: "apple", quantity: "4"}];

		// var to_buy_items = shoppingList;
		var bought_items = [];

		service.checkOffItem = function (index){
			bought_items.push(to_buy_items[index]);
			to_buy_items.splice(index, 1);
		};

		service.getToBuy = function(){
			return to_buy_items;
		};
		service.getBought = function(){
			return bought_items;
		};
	}
})();