/*
                    Author  : Thabang Gideon Magaola
                    E-mail  : thabang@projectcodex.co

-------------------------------About the code ---------------------------------------------------------------

*/

function myFunction() {

    if (shoeSize.value !== "") { //selected a size.
        var searched = shoes.filter(sizeFilter); //New shoe list
    }
    if (shoeColor.value !== "") { //color selected
        if (shoeSize.value !== ""){
            searched = searched.filter(colorFilter); //New shoe list
        }
        else {searched = shoes.filter(colorFilter);}
    }
    if (shoeBrand.value !== "") {
        if (shoeColor.value !== "" || shoeSize.value !== "") { //selected size
            searched = searched.filter(brandFilter); //New shoe list
        }
        else {searched = shoes.filter(brandFilter);}
    }

    function sizeFilter(input){
        return input.size == shoeSize.value;
    }

    function colorFilter(input){
        return input.color == shoeColor.value;
    }

    function brandFilter(input){
        return input.brand == shoeBrand.value;
    }

    shoeColor.value = "";
    shoeSize.value = "";
    shoeBrand.value = "";
    var displayOutput = document.getElementById('displayOutput');
    if (searched !== undefined) {
        var myInfo = document.getElementById('j').innerHTML;
        var template = Handlebars.compile(myInfo);
        var tableSearch = template({
            searched
        });

        if (searched.length <= 0) {
            displayOutput.innerHTML = "Result Not Found";

        } else if (searched.length > 0) {
            displayOutput.innerHTML = tableSearch;
        }

    } else if (searched === undefined) {
        displayOutput.innerHTML = "Nothing selected";

    }
}
function addStock(){
    var addBrand = document.getElementById('addBrand');
    var addColor = document.getElementById('addColor');
    var addSize = document.getElementById('addSize');
    var addInstock = document.getElementById('addInstock');
    var addPrice = document.getElementById('addPrice');
    var shoes1 = {};

    function brandAdd(input){
        return input.brand == addBrand.value;
    }
    function colorAdd(input){
        return input.color == addColor.value;
    }


    var addedBrands = shoes.filter(brandAdd); //New shoe list
    var addedColor = shoes.filter(colorAdd);

    CreateProp("brand",addBrand.value);
    CreateProp("size", addSize.value);
    CreateProp("color", addColor.value);
    CreateProp("in_stock", addInstock.value);
    CreateProp("price", addPrice.value);

    function CreateProp(propertyName, propertyValue){
        shoes1[propertyName] = propertyValue;
        //alert(shoes[propertyName]);  // prints "MyValue"
      };
      shoes.push(shoes1);

    if (addedBrands.length <= 0) {//Brand
        var brandOption = document.getElementById('shoeBrand');
        var option = document.createElement('option');
        option.text = addBrand.value;
        brandOption.add(option);

    }
    if (addedColor.length <= 0) {//Color
        var colorOption = document.getElementById('shoeColor');
        var option = document.createElement('option');
        option.text = addColor.value;
        colorOption.add(option);
    }
    addBrand.value = "";
    addColor.value = "";
    addSize.value = "";
    addPrice.value = "";
    addInstock.value = "";
}

var shoes = [//black blue red green white // adidas puma nikee
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 1},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 2},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 3},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 4},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 5},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 6},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 7},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 8},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 9},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 10},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 11},
    {brand: 'Nike', color : 'black', price : 749, in_stock : 10, size: 12},

    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 10, size: 1},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 10, size: 2},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 10, size: 3},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 10, size: 4},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 10, size: 5},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 20, size: 6},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 20, size: 7},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 15, size: 8},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 15, size: 9},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 8, size: 10},
    {brand: 'Nike', color : 'white', price : 1999.99, in_stock : 5, size: 11},


    {brand: 'Nike', color : 'blue', price : 999.99, in_stock : 10, size: 1},
    {brand: 'Nike', color : 'blue', price : 999.99, in_stock : 10, size: 2},
    {brand: 'Nike', color : 'blue', price : 999.99, in_stock : 10, size: 3},
    {brand: 'Nike', color : 'blue', price : 999.99, in_stock : 10, size: 4},
    {brand: 'Nike', color : 'blue', price : 999.99, in_stock : 10, size: 5},
    {brand: 'Nike', color : 'blue', price : 999.99, in_stock : 10, size: 6},
    {brand: 'Nike', color : 'blue', price : 999.99, in_stock : 10, size: 7},

    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 1},
    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 2},
    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 3},
    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 4},
    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 5},
    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 6},
    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 7},
    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 8},
    {brand: 'Nike', color : 'green', price : 650, in_stock : 10, size: 9},

    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 1},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 2},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 3},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 4},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 5},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 6},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 7},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 8},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 9},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 10},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 11},
    {brand: 'Puma', color : 'black', price : 1299, in_stock : 10, size: 12},

    {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 10, size: 4},
    {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 10, size: 5},
    {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 20, size: 6},
    {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 20, size: 7},
    {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 15, size: 8},
    {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 15, size: 9},
    {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 8, size: 10},
    {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 5, size: 11},

    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 10, size: 1},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 10, size: 2},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 10, size: 3},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 10, size: 4},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 10, size: 5},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 20, size: 6},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 20, size: 7},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 15, size: 8},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 15, size: 9},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 8, size: 10},
    {brand: 'Puma', color : 'white', price : 1999.99, in_stock : 5, size: 11},

    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 10, size: 1},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 10, size: 2},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 10, size: 3},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 10, size: 4},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 10, size: 5},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 20, size: 6},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 20, size: 7},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 15, size: 8},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 15, size: 9},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 8, size: 10},
    {brand: 'Puma', color : 'green', price : 1459.99, in_stock : 5, size: 11},

    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 1},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 2},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 3},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 4},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 5},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 6},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 7},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 8},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 9},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 10},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 11},
    {brand: 'Adidas', color : 'black', price : 749, in_stock : 10, size: 12},

    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 10, size: 1},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 10, size: 2},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 10, size: 3},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 10, size: 4},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 10, size: 5},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 20, size: 6},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 20, size: 7},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 15, size: 8},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 15, size: 9},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 8, size: 10},
    {brand: 'Adidas', color : 'white', price : 1999.99, in_stock : 5, size: 11},


    {brand: 'Adidas', color : 'blue', price : 999.99, in_stock : 10, size: 1},
    {brand: 'Adidas', color : 'blue', price : 999.99, in_stock : 10, size: 2},
    {brand: 'Adidas', color : 'blue', price : 999.99, in_stock : 10, size: 3},
    {brand: 'Adidas', color : 'blue', price : 999.99, in_stock : 10, size: 4},
    {brand: 'Adidas', color : 'blue', price : 999.99, in_stock : 10, size: 5},
    {brand: 'Adidas', color : 'blue', price : 999.99, in_stock : 10, size: 6},
    {brand: 'Adidas', color : 'blue', price : 999.99, in_stock : 10, size: 7},

    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 1},
    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 2},
    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 3},
    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 4},
    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 5},
    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 6},
    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 7},
    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 8},
    {brand: 'Adidas', color : 'green', price : 650, in_stock : 10, size: 9}
];
function hideShowSearch(){
    var z = document.getElementById('searchInput');

    if (z.style.display === 'none') {
        z.style.display = 'block';

    } else {
        z.style.display = 'none'
    }

}
function hideShowAdd(){
    var x = document.getElementById('addInput');

    if (x.style.display === 'none') {
        x.style.display = 'block';

    } else {
        x.style.display = 'none'
    }

}
(function() {

    function Slideshow( element ) {
        this.el = document.querySelector( element );
        this.init();
    }

    Slideshow.prototype = {
        init: function() {
            this.wrapper = this.el.querySelector( ".slider-wrapper" );
            this.slides = this.el.querySelectorAll( ".slide" );
            this.previous = this.el.querySelector( ".slider-previous" );
            this.next = this.el.querySelector( ".slider-next" );
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;

            this.action();
            this.stopStart();
        },
        _slideTo: function( slide ) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;

            for( var i = 0; i < this.slides.length; i++ ) {
                var slide = this.slides[i];
                if( slide !== currentSlide ) {
                    slide.style.opacity = 0;
                }
            }
        },
        action: function() {
            var self = this;
            self.timer = setInterval(function() {
                self.index++;
                if( self.index == self.slides.length ) {
                    self.index = 0;
                }
                self._slideTo( self.index );

            }, 3000);
        },
        stopStart: function() {
            var self = this;
            self.el.addEventListener( "mouseover", function() {
                clearInterval( self.timer );
                self.timer = null;

            }, false);
            self.el.addEventListener( "mouseout", function() {
                self.action();

            }, false);
        }


    };

    document.addEventListener( "DOMContentLoaded", function() {

        var slider = new Slideshow( "#main-slider" );

    });


})();
