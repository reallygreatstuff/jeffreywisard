$(document).ready(function() {

	///Add Item To THe ToDo List
	$('#addToDoList').submit(addToDoListItem);
	$('#clearList').click(emptyToDoLIst);
	$('#clearCompletedList').click(removeCompletedToDoListItems);
	$('#todos').on('click', '.remove', removeToListItem);
	$('#todos').on('click', '.edit', editToDoListItem);
	$('#todos').on('blur', '.editor', saveEditedToDoListItem);
	$('#todos').on('click', 'li', markToDoListItemAsCompleted);



///API Functions

	function addToDoListItem () {
		var item = $('#addToDoItem').val();

	$('#todos').append('<li><span class="item"> '+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	updateNumberOfToDoListItems();
	}

	function removeToListItem(){
		// console.log('removeToListItem');
		$(this).parents('li').remove();

		console.log($(this).parents('li'));
	}

	function editToDoListItem() {
		var editClicked = $(this).parents('li');
		var itemContent = $(this).siblings('.item').text();
		console.log(itemContent);
		// console.log(editClicked);
		$(editClicked).html('<form class ="editor" action=""><input type="text" value="'+itemContent+'"/></form>');
	}

	function saveEditedToDoListItem() {
		var newItem = $(this).find('input').val();
		var listItem = $(this).parents('li');
		$(listItem).html('<span class="item">'+newItem+'</span><a class="edit">Edit</a><a class="remove">Remove</a>');
	}

	function markToDoListItemAsCompleted() {
		//console.log('complete is running');
		$(this).toggleClass('done');
		updateNumberOfToDoListItems();
	}

	function emptyToDoLIst(){
		//console.log('empty list');
		$('#todos').empty();
		updateNumberOfToDoListItems();

	}

	function removeCompletedToDoListItems(){
		//console.log('empty list2');
		$('.done').remove();
	}

	function updateNumberOfToDoListItems(){
		//console.log('hello');
		var count = $('#todos li').not('.done').length;
		$('#count').html(count);
	}



});