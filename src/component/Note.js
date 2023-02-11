import React from 'react'

//style
import styles from './Style.module.css'

const Note = ({ value, setNotes, notes }) => {
  const removeHandler = () => {
    const newNotes = notes.filter((item) => item.id != value.id)
    setNotes(newNotes)
  }

  return (
    <div>
      <div className={styles.note} style={{ backgroundColor: '#fff580' }}>
        <p className={styles.text}>{value.note}</p>
        <span className={styles.date}>{value.date}</span>
        <i className="fa fa-trash" onClick={removeHandler}></i>
      </div>
    </div>
  )
}

export default Note
