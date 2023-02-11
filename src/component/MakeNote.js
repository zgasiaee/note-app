import React, { useEffect, useState } from 'react'

//style
import styles from './Style.module.css'

//component
import Note from './Note'

//variable
var count = 0

const MakeNote = ({ search }) => {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  const dateBuilder = (date) => {
    var day = date.getDay()
    var month = date.getMonth()
    var year = date.getFullYear()

    if (day < 10) {
      day = `0${day}`
    }
    if (month < 10) {
      month = `0${month}`
    }

    return `${day}/${month}/${year}`
  }

  const saveHandler = () => {
    if (note.trim().length > 0) {
      setNotes([
        ...notes,
        { note: note, id: count, date: dateBuilder(new Date()) },
      ])
      setNote('')
      count = count + 1
    }
  }

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('note-app'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('note-app', JSON.stringify(notes))
  }, [notes])

  const filterNotes = notes.filter((item) =>
    item.note.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className={styles.noteContainer}>
      {notes &&
        filterNotes.map((item, index) => (
          <Note key={index} value={item} setNotes={setNotes} notes={notes} />
        ))}
      <div className={styles.note}>
        <textarea
          rows="8"
          cols="10"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Add a note ..."
          maxlength="200"
        ></textarea>
        <div className={styles.saveContainer}>
          <p style={{ fontSize: '0.85rem' }}>{200 - note.length} Remaining</p>
          <button
            className={styles.button}
            style={{ padding: '6px 15px' }}
            onClick={saveHandler}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default MakeNote
