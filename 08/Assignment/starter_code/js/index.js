/*Make it appear*/
var showText = document.getElementById('show-this-on-click');
var showReadLess = document.getElementsByClassName('readless');
var hideReadMore = document.getElementsByClassName('readmore');
var showLearnMoreText = document.getElementById('learnmoretext');
var hideLearnMore = document.getElementsByClassName('learnmore');
console.dir(hideReadMore);
console.log(hideReadMoreFunc);

hideReadMore[0].onclick = hideReadMoreFunc;
hideLearnMore[0].onclick = hideLearnMoreFunc;

/*Make it blog appear FUNCTIONS*/

function hideReadMoreFunc() {
  hideReadMore[0].style.display = 'none';
  showReadLess[0].style.display = 'block';
  showText.style.display = 'block';
}

function hideLearnMoreFunc() {
  hideLearnMore[0].style.display = 'none';
  showLearnMoreText.style.display = 'block';

}

/*Make it blog disappear FUNCTIONS*/
showReadLess[0].onclick = showReadLessFunc;

function showReadLessFunc() {
  hideReadMore[0].style.display = 'block';
  showReadLess[0].style.display = 'none';
  showText.style.display = 'none';
}
