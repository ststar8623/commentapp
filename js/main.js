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
		confirm("Are you sure to delete this comment?")
		if(true){
			$(this).parent().parent().parent().remove();
		}
	});

	// method for toggling
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

// added a focus on textinput when the page is loaded
function setup() {
	var textInput;
	textInput = document.getElementById('usr');
	textInput.focus();
}
window.addEventListener('load', setup, false);

// check username to have at least 5 characters
function checkUsername() {
	var username = elUsr.value;
	if (username.length < 1) {
		elUsrMsg.className = 'warning';
		elUsrMsg.textContent = "You havn't included a username!";		
	} else {
		elUsrMsg.textContent = '';
	}
}
function tipUsername() {
	elUsrMsg.className = 'tip';
	elUsrMsg.innerHTML = 'A username must be entered';
}

var elUsr = document.getElementById('usr');
var elUsrMsg = document.getElementById('feedback');

elUsr.addEventListener('focus', tipUsername, false);
elUsr.addEventListener('blur', checkUsername, false);

// add character left & disable button when no comment is enter
$(document).ready(function(){
	$('#submit').click(function(){
		$('.userName, .textarea').val('');
		$('.counter').text(140);
		$('#submit, #clear').addClass('disabled');
	});
	$('#clear').click(function(){
		$('.counter').text(140);
		$('#submit, #clear').addClass('disabled');
	})

	$('.textarea').keyup(function(){
		var postLeft = $(this).val().length;
		var charactersLeft = 140 - postLeft;
		$('.counter').text(charactersLeft);

		if(charactersLeft < 0) {
			$('#submit, #clear').addClass('disabled');
		} 
		else if (charactersLeft == 140) {
			$('#submit, #clear').addClass('disabled');
		} 
		else {
			$('#submit, #clear').removeClass('disabled');
		}
	});

	$('#submit, #clear').addClass('disabled');
})












