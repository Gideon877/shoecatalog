
function myFunction() {
    var searched = [];
    var shoeSize = document.getElementById("shoeSize").value;
    var shoeColor = document.getElementById("shoeColor").value;
    var shoeBrand = document.getElementById('shoeBrand').value;
    var shoes = [
        {brand: 'Nike', color : 'black', price : 650, in_stock : 13, size: 1},
        {brand: 'Nike', color : 'blue', price : 999.99, in_stock : 1, size: 1},
        {brand: 'Puma', color : 'blue', price : 1999.99, in_stock : 12, size: 1}

    ];

    for (var i = 0; i < shoes.length; i++) {
        var newShoeColor, newShoeBrand, newShoeSize, numbInStk, shoePrice;
        newShoeColor = shoes[i].color;
        newShoeSize = shoes[i].size;
        newShoeBrand = shoes[i].brand;
        numbInStk = shoes[i].in_stock;

         if (shoeBrand === newShoeBrand && shoeColor === newShoeColor ) { //color and brand
            searched.push(shoes[i]);

        } else if (shoeColor === newShoeColor  && newShoeSize === shoeSize ) { //color  size
            searched.push(shoes[i]);

        } else if (newShoeSize === shoeSize &&  shoeBrand === newShoeBrand ) { //size and brand
            searched.push(shoes[i]);

        }
    }
    shoeColor.value = "";
    shoeSize.value = "";
    shoeBrand.value = "";


    var myInfo = document.getElementById('j').innerHTML;
    var template = Handlebars.compile(myInfo);

    var tableSearch = template({
        searched
    });
    document.body.innerHTML += tableSearch;

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
