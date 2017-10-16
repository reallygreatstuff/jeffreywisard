/*Make it appear*/
var showText = document.getElementById('show-this-on-click');
var showReadLess = document.getElementsByClassName('readless');
var hideReadMore = document.getElementsByClassName('readmore');

console.dir(hideReadMore);
console.log(hideReadMoreFunc);

hideReadMore.onclick = hideReadMoreFunc;
showReadLess.onclick = hideReadLessFunc;

/*Make it blog appear FUNCTIONS*/

function hideReadMoreFunc() {
  hideReadMore[1].style.display = 'none';
  showReadLess.style.display = 'block';
  showText.style.display = 'block';
}



/*Make it blog disappear FUNCTIONS*/

function hideReadLessFunc() {
  hideReadMore.style.display = 'block';
  showReadLess.style.display = 'none';
  showText.style.dipslay = 'none';
}

//If a user clicks "Read More" on the primary column:
//1. Have the html element with the id show-this-on-click and class readless appear on the page.
//2. Have the html element with the class readmore disappear
//3. Hint: Think about how you would do it with CSS