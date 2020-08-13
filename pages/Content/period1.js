import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {auth} from "../../services/firebase";
import {
    Card, Typography, Input, CardActionArea, CardContent, CardHeader, CardMedia, AppBar, Toolbar, IconButton, Button,
    Grid, Paper, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, FormHelperText
} from '@material-ui/core'
import Layout, {AuthContext} from '../../components/layout'
import InfoPage from '../../components/infoPage'
import styles from '../../styles/main.module.scss'
import fetch from 'node-fetch'

export default function Period1({content}) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose one');

    const [editing, setEditing] = React.useState(false)
    const [signedIn, setSignedIn] = React.useState(false)

    const [sections, setSections] = React.useState(content.sections)

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

    const handleEditButton = () => {
        if (!editing) {
            if (signedIn) {
                setEditing(true)
            }
        } else {
            fetch('http://localhost:3000/api/Content/period1', {
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

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'correct') {
            setHelperText('Correct!');
            setError(false);
        } else if (value === 'incorrect1' || value === 'incorrect2' || value === 'incorrect3') {
            setHelperText('Wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    React.useEffect(() => {
        if (auth.currentUser) {
            setSignedIn(true)
        } else {
            setSignedIn(false)
        }
    })

    return (
        <Layout>
            <InfoPage>
                <Typography variant="h3" align="left" className={styles.title}>
                    1492-1763: Discovery of the Americas by Columbus, Colonization, and the Royal Proclomation of 1763
                </Typography>
                <img alt="Battle of Baltimore" src="/images/baltimore.jpg" className={styles.imagePara}/>
                <Button variant="contained"
                        onClick={handleEditButton}>{editing ? "Save and Stop Editing" : "Edit"}</Button>
                {sections.map((section, index) => (
                    <div className={styles.contentSection} key={index}>
                        {editing &&
                        <>
                            <Input value={section.title} onChange={setSectionTitleAtIndex(index)}/>
                            <Input value={section.body} onChange={setSectionBodyAtIndex(index)}/>
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
                    </div>
                ))}
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset" error={error} className={styles.formControl}>
                        <FormLabel component="legend">which one?</FormLabel>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            <FormControlLabel value="incorrect1" control={<Radio/>} label="1"/>
                            <FormControlLabel value="incorrect2" control={<Radio/>} label="2"/>
                            <FormControlLabel value="correct" control={<Radio/>} label="3"/>
                            <FormControlLabel value="incorrect3" control={<Radio/>} label="4"/>
                        </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                        <Button type="submit" variant="contained" color="primary" className={styles.button}>
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </InfoPage>
        </Layout>
    );
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/Content/period1')
    const content = await response.json()

    return {
        props: {
            content,
        }
    }
}