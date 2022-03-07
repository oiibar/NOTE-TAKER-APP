let input = document.getElementById('input');
let addItem = document.getElementById('add');
let allNotes = document.getElementById('all_notes')

addItem.addEventListener('click', function (e) {
	e.preventDefault();

	let note = document.createElement('div');
	let noteText = document.createElement('p');
	const dlt = document.createElement('button');

	dlt.setAttribute('class', 'button-29');
	dlt.setAttribute('id', 'delete');
	dlt.innerText = 'Delete';
	dlt.addEventListener('click', function deleteItem(e) {
		let noteNigger = document.querySelector("#note");
		noteNigger.remove(e.target);
	});

	note.setAttribute('id', 'note');
	note.setAttribute('class', 'Input-text');
	noteText.setAttribute('id', 'note_text');

	noteText.innerText = input.value;

	note.appendChild(noteText);
	note.appendChild(dlt);
	allNotes.appendChild(note);

	input.value = '';
});