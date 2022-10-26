const fs= require('fs')
const chalk=require('chalk')
//add note------------------
const addNote=(title,body)=>{
const notes=loadNotes()
const duplicateNote=notes.find((note)=>note.title===title)

debugger
if(!duplicateNote){
     notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
} else{
console.log(chalk.red.inverse("note title taken!"))
}

}
//remove note---------
const removeNote=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>note.title !== title)
    
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse("note removed"))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse("note not found"))
    }
}

//list note-------------
const listNotes=()=>{
    const notes= loadNotes()
    console.log(chalk.blue.inverse('Your notes...'))
    notes.forEach(note => {
        console.log(chalk.yellow.inverse(note.title))
    });
}
//read note---------------
const readNote=(title)=>{
    const notes=loadNotes()
    const noteToRead=notes.find((note)=>note.title===title)
    if(noteToRead){
        console.log(chalk.yellow(noteToRead.title))
        console.log(noteToRead.body)
    }else{
        console.log(chalk.red.inverse("note not found!"))
    }
}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes= ()=>{
    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}