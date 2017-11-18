
//Cereal Generator


$('button').click(function() {
    $('.hit').text(randomEl(adjectives)+' '+randomEl(nouns));
    selectElementContents($('.hit')[0]);
});

function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

var adjectives = ["Hot", "Dry", "Cold", "Cooked", "Important", "Whole", "Non", "Grain", "Favorite", "Only", "Eat", "Fortified", "Chief", "Infant", "Fiber", "Main", "Principal", "Bread", "Bran", "Breakfast", "Prepared", "Popular", "Coated", "Sugared", "Sugary", "Unsweetened", "Sweet", "Mixed", "Wheat", "Soggy", "Nutritious", "Refined", "Crispy",  "Crisp", "Coarse", "Warm", "Crunchy", "Dominant", "Flaked", "Delicious", "Cultivated", "Wild", "Instant", "Enriched", "Preferred", "Strained", "Puffed", "Raw", "Valuable", "Brown", "Nuts", "Thick", "Predominant", "Favorite", "Thin", "Flavored", "Boxed", "Hardy", "Healthy", "Uncooked", "Enough", "Presweetened", "Based", "Legume", "Shaped"];
var nouns = ["Flakes","Holes", "O's", "Puffs", "Crisp", "Smacks", "Squares", "Charms", "Bran", "Delight", "Bits", "Berries", "Crunch", "Toasters", "Balls", "Nut", "Bites", "Munch", "Grahams", "Oats", "Bits"];

$('button').click();