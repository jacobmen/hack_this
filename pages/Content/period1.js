import React from 'react'
import { Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, FormHelperText } from '@material-ui/core'
import Layout from '../../components/layout'
import PeriodPage from '../../components/periodPage'
import styles from '../../styles/main.module.scss'
import fetch from 'node-fetch'

export default function Period1({ content }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose one');

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

    return (
        <Layout>
            <PeriodPage
                title={"1492-1763: Discovery of the Americas by Columbus, Colonization, and the Royal Proclomation of 1763"}
                periodName={"period1"}
                content={content}
            >
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset" error={error} className={styles.formControl}>
                        <FormLabel component="legend">Which colony had the largest focus on religion?</FormLabel>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            <FormControlLabel value="incorrect1" control={<Radio/>} label="Jamestown"/>
                            <FormControlLabel value="correct" control={<Radio/>} label="Massachusetts Bay Colony"/>
                            <FormControlLabel value="incorrect2" control={<Radio/>} label="New York"/>
                            <FormControlLabel value="incorrect3" control={<Radio/>} label="Maryland"/>
                        </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                        <Button type="submit" variant="contained" color="primary" className={styles.button}>
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </PeriodPage>
        </Layout>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://historio-api.herokuapp.com/content/period1')
    const content = await response.json()

    return {
        props: {
            content,
        }
    }
}