const notes = require('./notes.js')
const chalk=require('chalk')
const yargs=require('yargs')
const { describe, demandOption } = require('yargs')
const { type } = require('os')

yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:'true',
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:'true',
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
//create remove command
yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:'true',
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command:'list',
    describe:'listing the note',
    handler(argv){
        notes.listNotes()
    }
})
//create read command
yargs.command({
    command:'read',
    describe:'reading the note',
    builder:{
        title:{
            describe:"note title",
            demandOption:"true",
            type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
