(function () {
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this
        toBuy.message = ''
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.buy = function (itemIndex) {
            // console.log('Buy item index', itemIndex);
            
            ShoppingListCheckOffService.buy(itemIndex)
            if (ShoppingListCheckOffService.getToBuyItems().length == 0) {
                toBuy.message = "Everything is bought!"
            }
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.message = "Nothing bought yet.";
        boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
    
        // List of tobuy items
        var toBuyItems = [
            {
                name: "cookie",
                quantity: 5
            },
            {
                name: "pepsi",
                quantity: 3
            },
            {
                name: "juice",
                quantity: 10
            },
            {
                name: "chocolate",
                quantity: 5
            },
            {
                name: "ice cream",
                quantity: 15
            },
        ];
        // List of bought items
        var boughtItems = [];

        service.buy = function (itemIndex) {
            item = toBuyItems.splice(itemIndex, 1);
            // console.log('Item:', item[0]);
            
            boughtItems.push(item[0]);
            // console.log('Bought Item:', boughtItems);
        }

        service.getToBuyItems = function () {
            return toBuyItems;
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }
    }
})();