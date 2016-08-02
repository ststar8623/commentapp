function enter() {
	// set value from inputs
	var usr = document.getElementById('usr').value
	var comment = document.getElementById('comment').value

	// set input's value in variable
	var userName = document.createTextNode("Username: " + usr)
	var userComment = document.createTextNode("Comments: " + comment)

	// create 'li' element
	var enterComment = document.createElement('li')
		enterComment.className = "list-group-item"

	// create 'h4' & 'h5' & 'img'
	var newUserName = document.createElement('h4')
		newUserName.appendChild(userName)
	var newComment = document.createElement('h5')
		newComment.appendChild(userComment)
	var contact = document.createElement('img')
		contact.setAttribute('src', 'img/contact_logo.png')
		contact.setAttribute('alt', 'na')
		contact.setAttribute('height', '50px')
		contact.setAttribute('width', '50px')

	// creating a delete button
	var deleteButton = document.createElement('button1')
		deleteButton.className = "btn btn-danger btn-xs"
		deleteButton.setAttribute("data-toggle", "tooltip")
		deleteButton.setAttribute("data-placement", "top")
		deleteButton.setAttribute("title", "Delete")
		deleteButton.innerHTML = "Delete"

	// creating date and time
	var currentdate = new Date(); 
	var datetime = (currentdate.getMonth()+1) + "/"
                 + currentdate.getDate() + "/" 
                 + currentdate.getFullYear() + " @ "  
                 + currentdate.getHours() + ":"  
                 + currentdate.getMinutes() + ":" 
                 + currentdate.getSeconds();
	var NewDate = document.createTextNode(datetime)

	// create dropdown button
	var dropDownButton = document.createElement('button2')
		dropDownButton.className = "btn btn-info btn-xs"
		dropDownButton.setAttribute('type', 'button')
		dropDownButton.setAttribute('data-toggle', 'dropdown')
		dropDownButton.innerHTML = "Dropdown"

	// set all elements into 'li'
		enterComment.appendChild(contact)
		enterComment.appendChild(NewDate)
		enterComment.appendChild(dropDownButton)
		enterComment.appendChild(deleteButton)
		enterComment.appendChild(newUserName)
		enterComment.appendChild(newComment)

	// create 'ul' dropdown
	var ulDropDown = document.createElement('ul')
		// set all 'li' into 'ul'
		ulDropDown.appendChild(enterComment)

	// create 'li' dropdown
	var liDropDown = document.createElement('li')
		liDropDown.className = "dropdown"
		// set 'ul' into a dropdown 'li'
		liDropDown.appendChild(ulDropDown)

	var list = document.getElementById('commentList')
		list.insertBefore(liDropDown, list.childNodes[0])

	// method for delete button
	$("button1").click(function(){
		// confirm("Are you sure to delete this comment?")
		$(this).parent().parent().parent().remove();
	});

	// method for toogling
	$("button2").click(function(){
		$('li.dropdown').click(function() {
	   		$(this).children().toggle();
	   	});
	});

	// different color for odd/even "li"
	$(document).ready(function(){
		$('.dropdown:odd').css("background-color", "#8EDDFA");
		$('.dropdown:even').css("background-color", "#E9BCF7");
	});
};

// clear text button
function eraseText() {
	document.getElementById('usr').value = "";
	document.getElementById('comment').value = "";
}




