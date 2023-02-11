import { useState } from 'react'

//style
import styles from './component/Style.module.css'

//component
import MakeNote from './component/MakeNote'

function App() {

  const [search, setSearch] = useState('')
  const [toggle , setToggle] = useState(false)
 
  return (

    <div className={styles.body} style={{backgroundColor : toggle ? 'black' : 'white'}}>
      <div className={styles.titleContainer}>
        <h1 style={{color : toggle ? 'white' : 'black'}}>Notes</h1>
        <button className={styles.button} onClick={()=>setToggle(!toggle)}>Toggle Mode</button>
      </div>
     <div className={styles.inputContainer}>
     <i className='fa fa-search'></i>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className={styles.input}
        placeholder="Search ..."
      />
     </div>
    <MakeNote search={search}/>    
    </div>
  )
}

export default App
