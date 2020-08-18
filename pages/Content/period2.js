import React from 'react'
import { Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, FormHelperText } from '@material-ui/core'
import Layout from '../../components/layout'
import PeriodPage from '../../components/periodPage'
import styles from '../../styles/main.module.scss'
import fetch from 'node-fetch'

export default function Period2({ content }) {
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
                title={"1763-1789: The Road to Revolution, Independence, and Government for the US"}
                periodName={"period2"}
                content={content}
            >
                <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" error={error} className={styles.formControl}>
                    <FormLabel component="legend">Why did the Articles of Confederation fail?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                        <FormControlLabel value="incorrect1" control={<Radio />} label="The states had rebelled against it" />
                        <FormControlLabel value="incorrect2" control={<Radio />} label="The federal government became a monarchy" />
                        <FormControlLabel value="correct" control={<Radio />} label="The Federal Government was too weak to enforce laws" />
                        <FormControlLabel value="incorrect3" control={<Radio />} label="The states had absolved it" />
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
    const response = await fetch('https://historio-api.herokuapp.com/content/period2')
    const content = await response.json()

    return {
        props: {
            content,
        },
        revalidate: 15
    }
}
