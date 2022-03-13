const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
	return 'Your notes'
}

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find(note => note.title === title)

	// debugger

	if ( !duplicateNote ) {
		notes.push({ title, body })
		saveNotes(notes)

		console.log(chalk.green.inverse('Note added!'))
	} else {
		console.log(chalk.red.inverse('Note title already taken!'))
	}
}

const deleteNote = (title) => {
	const notes = loadNotes()
	const notesToKeep = notes.filter(note => note.title !== title)

	if ( notes.length > notesToKeep.length ) {
		saveNotes(notesToKeep)

		console.log(chalk.green.inverse('Note deleted!'))
	} else {
		console.log(chalk.red.inverse('Note not found!'))
	}
}

const listNotes = () => {
	const notes = loadNotes()

	console.log(chalk.green.inverse('Lista de notas:\n'))

	notes.forEach((note, idx) => {
		console.log(chalk.white.bold(`Nota #${idx+1}: ${note.title}`))
	});

	console.log(chalk.green.inverse('\n[End of notes]'))
}

const readNote = (title) => {
	const notes = loadNotes()

	const selectedNote = notes.find(note => note.title === title)

	if ( !selectedNote ) return console.log(chalk.red.inverse('Note not found!'))

	console.log(chalk.white.inverse(`\n ${selectedNote.title}`))
	console.log(chalk.white(selectedNote.body))
	console.log(chalk.green.inverse('\n [End of notes]'))
}

const saveNotes = (notes) => {
	fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}

module.exports = {
	getNotes,
	addNote,
	loadNotes,
	deleteNote,
	listNotes,
	readNote,
}