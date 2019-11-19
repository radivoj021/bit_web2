function Product(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
    this.getData = function(){
        return "id: " + this.id + " | " + "Name: " + this.name + " | " + "Price: " + this.price;
    }
}

function ShoppingBag(){
    this.listOfProducts = [];
    this.addProduct = function(product){
        if(product instanceof Product){
            this.listOfProducts.push(product);
        }
        return product.getData();
    }   
}

var idx = Math.round(Math.random() * 100000);

var banana = new Product(idx, "banana", "129.31");
var smoki = new Product(idx, "smoki", "23.12");
var milka = new Product(idx, "Milka", "120.12");

var shopping = new ShoppingBag();

addProduct(banana);
addProduct(smoki);
addProduct(milka);

console.log(shopping);

