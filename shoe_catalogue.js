var shoeColor, shoeSize, colour, display, shoeBrand;
shoeColor = document.getElementById("shoeColor");
shoeSize = document.getElementById("shoeSize");
shoeBrand = document.getElementById('shoeBrand');
colour = document.querySelectorAll('.colour');
display = document.getElementById('userDisplay');

function myFunction() {
    var userChoiceBrand, userChoiceColor, userChoiceSize, searched;
    userChoiceColor = shoeColor.options[shoeColor.selectedIndex].value;
    userChoiceSize = shoeSize.options[shoeSize.selectedIndex].value;
    userChoiceBrand = shoeBrand.options[shoeBrand.selectedIndex].value;
    searched = []

    for (var i = 0; i < shoes.length; i++) {
        var newShoes, newShoeColor, newShoeSize, numbInStk, shoePrice;
        newShoes = shoes[i];
        newShoeColor =  newShoes.color;
        newShoeSize = newShoes.size;
        numbInStk = newShoes.in_stock;
        shoePrice = newShoes.price;

        var mySlideDiv = document.createElement('div');
        mySlideDiv.classList.add('mySlideShow');


        if (userChoiceColor === newShoeColor && userChoiceSize === "") {
            searched.push(newShoes);


            mySlideDiv.innerHTML = "We have " + numbInStk + " " + userChoiceColor + " sneaker(s) in stock. Each sneaker cost R" + shoePrice + ". ";
            document.body.appendChild(mySlideDiv);

        } else if (userChoiceSize === newShoeSize && userChoiceColor === "") {
            searched.push(newShoes);
            display.innerHTML = "We have " + numbInStk + " " + userChoiceColor + " sneaker(s) in stock. Each sneaker cost R" + shoePrice + ". ";
        }

        shoeColor.value = "";
        shoeSize.value = "";
        shoeBrand.value = "";

    }

}
var shoes = [
    {
        color : 'black',
        price : 650,
        in_stock : 15,
        size: 3
    },
    {
        color : 'blue',
        price : 350,
        in_stock : 5,
        size: 8
    },
    {
        color : 'orange',
        price : 275,
        in_stock : 3,
        size: 12
    },
];
