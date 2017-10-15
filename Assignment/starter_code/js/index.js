/*Make it appear*/
var showText = document.getElementById('show-this-on-click');
var showReadLess = document.getElementsByClassName('readless hide');
var hideReadMore = document.getElementsByClassName('readmore');

console.dir(hideReadMore);
console.log(hideReadMoreFunc);

hideReadMore.onclick = hideReadMoreFunc;
showReadLess.onclick = hideReadLessFunc;

/*Make it appear FUNCTIONS*/

function hideReadMoreFunc() {
  hideReadMore.style.display = 'none';
  showReadLess.style.display = 'block';
  showText.style.dipslay = 'block';
}

function hideReadLessFunc() {
  hideReadMore.style.display = 'block';
  showReadLess.style.display = 'none';
  showText.style.dipslay = 'none';
}