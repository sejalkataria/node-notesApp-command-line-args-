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
   addNote: addNote
}