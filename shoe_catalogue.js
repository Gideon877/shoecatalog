/*
                    Author  : Thabang Gideon Magaola
                    E-mail  : thabang@projectcodex.co


-------------------------------About the code -------------------------------------------------------------------------------------------------
                    *This is a simple online shoe catalogue that allows people to check stock.
                    *The user/customer have three options to select before they search for available stock whick is Shoe Brand, Shoe Color and Shoe Size.
                    *After pressing the search button the shoe’s price and the number of shoes in stock is displayed.
                    *The customer can add some more stock.
*/
if (localStorage['shoes']) {
    shoes = JSON.parse(localStorage['shoes']);
}
function myFunction() {
    if (shoeSize.value !== "") { //selected a size.
        var searched = shoes.filter(sizeFilter); //New shoe list
    }
    if (shoeColor.value !== "") { //if the user selected a color
        if (shoeSize.value !== ""){ // if the user selected a shoe size
            searched = searched.filter(colorFilter); // create a new shoe list called searched
        }
        else {searched = shoes.filter(colorFilter);} // if the user didn't select shoe size, create a new list with only shoe color
    }
    if (shoeBrand.value !== "") {
        if (shoeColor.value !== "" || shoeSize.value !== "") { //selected size or color
            searched = searched.filter(brandFilter); //create a new shoe list called searched

        }else {searched = shoes.filter(brandFilter);} // if the user select only shoe brand, create a new list with only shoe color
    }

    function sizeFilter(input){ //size only filter function that returns selected size
        return input.size == shoeSize.value;
    }

    function colorFilter(input){ // this function returns selected color
        return input.color == shoeColor.value;
    }

    function brandFilter(input){ //this function returns selected brand
        return input.brand == shoeBrand.value;
    }
    var displayOutput = document.getElementById('displayOutput'); //define a variable for display
    // myOptions();

    if (searched !== undefined) {
        var myInfo = document.getElementById('myTable');
        var template = Handlebars.compile(myInfo.innerHTML);
        var tableSearch = template({
            searched

        });

        if (searched.length <= 0) {
            displayOutput.innerHTML = "We are currently out of stock for " + shoeColor.value +", " + shoeBrand.value + " size "+ shoeSize.value+" at the moment.";

        } else if (searched.length > 0) {
            displayOutput.innerHTML = tableSearch;
        }
    } else if (searched === undefined) {
        displayOutput.innerHTML = "Nothing selected. Please select one of the options to view our stock.";
    }
    // clear user search option.
    localStorage['shoes'] = JSON.stringify(shoes);
    shoeColor.value = "";
    shoeSize.value = "";
    shoeBrand.value = "";
}
function addStock(){
    var addBrand = document.getElementById('addBrand');
    var addColor = document.getElementById('addColor');
    var addSize = document.getElementById('addSize');
    var addInstock = document.getElementById('addInstock');
    var addPrice = document.getElementById('addPrice');
    var shoes1 = {};

    function brandAdd(input){
        return input.brand == addBrand.value.toLowerCase();
    }
    function colorAdd(input){
        return input.color == addColor.value.toLowerCase();
    }

    CreateProp("brand",addBrand.value.toLowerCase());
    CreateProp("size", addSize.value);
    CreateProp("color", addColor.value.toLowerCase());
    CreateProp("in_stock", addInstock.value);
    CreateProp("price", addPrice.value);

    var addedBrands = shoes.filter(brandAdd); //New shoe list
    var addedColor = shoes.filter(colorAdd);

    function CreateProp(propertyName, propertyValue){
        shoes1[propertyName] = propertyValue;
      };

    shoes.push(shoes1);
    myOptions();

    addBrand.value = "";
    addColor.value = "";
    addSize.value = "";
    addPrice.value = "";
    addInstock.value = "";
}
function myOptions() {
    var uniQBrands = []; var uniQColors = []; var uniQSizes = [];
    var brandMap = {}; var colorMap = {}; var sizeMap = {};
    for (var i=0; i<shoes.length; i++){
    	var b = shoes[i].brand; var c = shoes[i].color; var s = shoes[i].size;

    	var foundBrand = false; var foundColor = false; var foundSize = false;

    	if(brandMap[b] === undefined){
    		brandMap[b] = b;
    		uniQBrands.push(b);
    	}
        if(sizeMap[s] === undefined){
            sizeMap[s] = s;
            uniQSizes.push(s);
        }
        if(colorMap[c] === undefined){
            colorMap[c] = c;
            uniQColors.push(c);
        }
    }
    function sort(a,b) {
        return a - b;
    }
    uniQSizes.sort();
    uniQBrands.sort();
    uniQColors.sort();

    var myInfo = document.getElementById('op');
    var template = Handlebars.compile(myInfo.innerHTML);
    var tableSearch = template({
        uniQSizes, uniQBrands, uniQColors
    });

    document.getElementById('d').innerHTML = tableSearch;

    console.log(uniQBrands);
    console.log(uniQColors);
    console.log(uniQSizes);
}
myOptions();

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
var shoes = [//Available Stock
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 1},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 2},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 3},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 4},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 5},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 6},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 7},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 8},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 9},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 10},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 11},
    {brand: 'adidas', color : 'black', price : 749, in_stock : 10, size: 12},

    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 10, size: 1},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 10, size: 2},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 10, size: 3},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 10, size: 4},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 10, size: 5},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 20, size: 6},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 20, size: 7},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 15, size: 8},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 15, size: 9},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 8, size: 10},
    {brand: 'adidas', color : 'white', price : 1999.99, in_stock : 5, size: 11},

    {brand: 'adidas', color : 'blue', price : 999.99, in_stock : 10, size: 1},
    {brand: 'adidas', color : 'blue', price : 999.99, in_stock : 10, size: 2},
    {brand: 'adidas', color : 'blue', price : 999.99, in_stock : 10, size: 3},
    {brand: 'adidas', color : 'blue', price : 999.99, in_stock : 10, size: 4},
    {brand: 'adidas', color : 'blue', price : 999.99, in_stock : 10, size: 5},
    {brand: 'adidas', color : 'blue', price : 999.99, in_stock : 10, size: 6},
    {brand: 'adidas', color : 'blue', price : 999.99, in_stock : 10, size: 7},

    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 1},
    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 2},
    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 3},
    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 4},
    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 5},
    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 6},
    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 7},
    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 8},
    {brand: 'adidas', color : 'green', price : 650, in_stock : 10, size: 9},

    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 1},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 2},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 3},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 4},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 5},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 6},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 7},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 8},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 9},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 10},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 11},
    {brand: 'nike', color : 'black', price : 749, in_stock : 10, size: 12},

    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 10, size: 1},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 10, size: 2},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 10, size: 3},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 10, size: 4},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 10, size: 5},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 20, size: 6},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 20, size: 7},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 15, size: 8},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 15, size: 9},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 8, size: 10},
    {brand: 'nike', color : 'white', price : 1999.99, in_stock : 5, size: 11},


    {brand: 'nike', color : 'blue', price : 999.99, in_stock : 10, size: 1},
    {brand: 'nike', color : 'blue', price : 999.99, in_stock : 10, size: 2},
    {brand: 'nike', color : 'blue', price : 999.99, in_stock : 10, size: 3},
    {brand: 'nike', color : 'blue', price : 999.99, in_stock : 10, size: 4},
    {brand: 'nike', color : 'blue', price : 999.99, in_stock : 10, size: 5},
    {brand: 'nike', color : 'blue', price : 999.99, in_stock : 10, size: 6},
    {brand: 'nike', color : 'blue', price : 999.99, in_stock : 10, size: 7},

    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 1},
    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 2},
    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 3},
    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 4},
    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 5},
    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 6},
    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 7},
    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 8},
    {brand: 'nike', color : 'green', price : 650, in_stock : 10, size: 9},

    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 1},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 2},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 3},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 4},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 5},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 6},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 7},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 8},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 9},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 10},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 11},
    {brand: 'puma', color : 'black', price : 1299, in_stock : 10, size: 12},

    {brand: 'puma', color : 'blue', price : 1999.99, in_stock : 10, size: 4},
    {brand: 'puma', color : 'blue', price : 1999.99, in_stock : 10, size: 5},
    {brand: 'puma', color : 'blue', price : 1999.99, in_stock : 20, size: 6},
    {brand: 'puma', color : 'blue', price : 1999.99, in_stock : 20, size: 7},
    {brand: 'puma', color : 'blue', price : 1999.99, in_stock : 15, size: 8},
    {brand: 'puma', color : 'blue', price : 1999.99, in_stock : 15, size: 9},
    {brand: 'puma', color : 'blue', price : 1999.99, in_stock : 8, size: 10},
    {brand: 'puma', color : 'blue', price : 1999.99, in_stock : 5, size: 11},

    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 10, size: 1},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 10, size: 2},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 10, size: 3},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 10, size: 4},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 10, size: 5},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 20, size: 6},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 20, size: 7},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 15, size: 8},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 15, size: 9},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 8, size: 10},
    {brand: 'puma', color : 'white', price : 1999.99, in_stock : 5, size: 11},

    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 10, size: 1},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 10, size: 2},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 10, size: 3},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 10, size: 4},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 10, size: 5},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 20, size: 6},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 20, size: 7},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 15, size: 8},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 15, size: 9},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 8, size: 10},
    {brand: 'puma', color : 'green', price : 1459.99, in_stock : 5, size: 11}

];

// localStorage.setItem('shoes', JSON.stringify(shoes));
// console.log(JSON.parse(localStorage.getItem('shoes')));
