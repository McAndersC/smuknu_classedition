import styles from "./accordions.module.css"
import { useState } from "react"

const Accordion = ({question, answer}) => {

    const [open, setOpen] = useState(false);

    return <div className={`${styles.accordion} ${open ? styles.active : null}`}>

        <div className={styles.question} onClick={() => setOpen(!open)}>
            <div>{question}</div>
            <div>BTN</div>
        </div>

        <div className={styles.answer}>{answer}</div>

    </div>

}

export default Accordion