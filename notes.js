const fs = require('fs')

const addNote = (title, body) => {
   const notes = loadNotes()
   const duplicateNotes = notes.find((note) => note.title === title)
   if (!duplicateNotes) {
      notes.push({
         title: title,
         body: body
      })
      saveNotes(notes)
   }
   else {
      console.log('note title alreay taken')
   }

}

const removeNote = (title) => {
   const notes = loadNotes()
   const filtering = notes.filter((note) => note.title !== title)
   if (notes.length > filtering.length) {
      console.log('A Note Removed!')
      saveNotes(filtering)
   }
   else {
      console.log('No title found to remove a note!')
   }
}

const readNote = (title) => {
   const notes = loadNotes()
   const read = notes.find((note) => note.title === title)
   if (read !== undefined) {
      console.log(read.title)
      console.log(read.body)
   }
   else {
      console.log('ERROR:NOTE NOT FOUND')
   }
}

const listNotes = () => {
   const notes = loadNotes()
   const list = notes.map((note) => {
      console.log(note.title)
   })
}
const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
   try {
      const dataButter = fs.readFileSync('notes.json')
      const dataJSON = dataButter.toString()
      return JSON.parse(dataJSON)
   }
   catch {
      return []
   }

}
module.exports = {
   addNote: addNote,
   removeNote: removeNote,
   readNote: readNote,
   listNotes: listNotes
}