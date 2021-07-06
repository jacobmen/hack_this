import React from 'react'
import {auth} from "../services/firebase";
import { Typography, TextField, Button, Paper } from '@material-ui/core'
import styles from '../styles/main.module.scss'
import fetch from 'node-fetch'

export default function PeriodPage(props) {
    const [editing, setEditing] = React.useState(false)
    const [signedIn, setSignedIn] = React.useState(false)

    const [sections, setSections] = React.useState(props.content.sections)

    const setSectionTitleAtIndex = (index) => (e) => {
        let updatedSections = [...sections]
        updatedSections[index].title = e.target.value
        setSections(updatedSections)
    }

    const setSectionBodyAtIndex = (index) => (e) => {
        let updatedSections = [...sections]
        updatedSections[index].body = e.target.value
        setSections(updatedSections)
    }

    auth.onAuthStateChanged((user) => {
        if (user === null) {
            setEditing(false)
        }
    })

    const handleEditButton = () => {
        if (!editing) {
            if (signedIn) {
                setEditing(true)
            }
        } else {
            fetch(`https://historio-api.herokuapp.com/content/${props.periodName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sections: sections
                })
            })
                .then((response) => {
                    setEditing(false)
                    console.log(response)
                })

        }
    }

    React.useEffect(() => {
        if (auth.currentUser) {
            setSignedIn(true)
        } 
    })

    return (
        <main className={styles.main}>
            <div className={styles.pageContainer}>
                <Paper>
                    <div className={styles.contentContainer}>
                        <Typography variant="h3" align="left" className={styles.title}>
                            {props.title}
                        </Typography>
                        {signedIn &&
                        <Button variant="contained"
                                onClick={handleEditButton}>{editing ? "Save and Stop Editing" : "Edit"}</Button>
                        }
                        {sections.map((section, index) => (
                            <div className={styles.contentSection} key={index}>
                                {editing &&
                                <>
                                    <TextField multiline fullWidth value={section.title} onChange={setSectionTitleAtIndex(index)} classes={styles.contentHeading} />
                                    <TextField multiline fullWidth value={section.body} onChange={setSectionBodyAtIndex(index)} classes={styles.contentBody} />
                                </>
                                }
                                {!editing &&
                                <>
                                    <Typography variant="h4" align="left" className={styles.contentHeading}>
                                        {section.title}
                                    </Typography>
                                    <Typography variant="body1" align="left" className={styles.contentBody}>
                                        {section.body}
                                    </Typography>
                                </>
                                }
                                {section.image !== "" &&
                                <img alt="" src={section.image} className={styles.imagePara} />
                                }
                            </div>
                        ))}
                        {props.children}
                    </div>
                </Paper>
            </div>
        </main>
    );
}
