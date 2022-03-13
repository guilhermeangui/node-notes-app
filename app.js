// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add cmd
yargs.command({
	command: 'add',
	describe: 'Adicionar nova nota',
	builder: {
		title: {
			describe: 'Título da nota',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Corpo da nota',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		notes.addNote(argv.title, argv.body)
	}
})

// Create del cmd
yargs.command({
	command: 'del',
	describe: 'Deletar uma nota',
	builder: {
		title: {
			describe: 'Título da nota a ser deletada',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		notes.deleteNote(argv.title)
	}
})

// Create list cmd
yargs.command({
	command: 'list',
	describe: 'Listar as notas',
	handler: () => {
		notes.listNotes()
	}
})

// Create read cmd
yargs.command({
	command: 'read',
	describe: 'Ler uma nota',
	builder: {
		title: {
			describe: 'Título da nota a ser lida',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => {
		notes.readNote(argv.title)
	}
})

yargs.parse()