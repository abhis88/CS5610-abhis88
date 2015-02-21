var app = angular.module("ProductApp", []);

app.controller("Product-Controller", function ($scope) {

    $scope.favouriteProducts = [];

    $scope.addToFavourite = function (product) {
        $scope.favouriteProducts.push(product)
    }

    $scope.removeFavouriteProduct = function (product) {
        var index = $scope.favouriteProducts.indexOf(product);
        $scope.favouriteProducts.splice(index, 1);
    }

    $scope.databaseCall = function () {

        var count = $scope.favouriteProducts.length;

        if (count > 0) {
            alert(count + " Favourite Movies uploaded successfully.")
        }
        else {
            alert("No Favourite Movies to be uploaded.")
        }

    }

    var products = [
        { name: "Awful Auntie", language: "English", publisher: "HarperCollins Publishers", price: "$ 275" },
        { name: "The Red Sari (A Novel)", language: "English", publisher: "Grupo Planeta", price: "$ 280" },
        { name: "13 STEPS TO BLOODY GOOD LUCK", language: "English", publisher: "Westland", price: "$ 80" },
        { name: "Marry Me, Stranger", language: "English", publisher: "HarperCollins PublishersRandom House India", price: "$ 70" },
        { name: "KP: The Autobiography", language: "English", publisher: "Little, Brown Book Group", price: "$ 429" },
        { name: "We Were Liars", language: "English", publisher: "Hot Key Books", price: "$ 86" },
    ];

    $scope.products = products;

    $scope.addproduct = function () {
        var newProduct = {
            name: $scope.product.name,
            language: $scope.product.language,
            publisher: $scope.product.publisher,
            price: $scope.product.price
        }

        $scope.products.push(newProduct);
    }

    $scope.selectProduct = function (product) {
        $scope.product = product;
    }

    $scope.removeproduct = function (product) {
        var index = $scope.products.indexOf(product);
        $scope.products.splice(index, 1);
    }


});