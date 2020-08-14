import {
    Typography,
    Button,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormHelperText
} from '@material-ui/core'
import Layout from '../../components/layout'
import PeriodPage from '../../components/periodPage'
import styles from '../../styles/main.module.scss'
import fetch from "node-fetch";
import React from "react";

export default function Period5({content}) {
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
                title={"1816-1848"}
                periodName={"period5"}
                content={content}
            >
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
            </PeriodPage>
        </Layout>
    );
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/Content/period5')
    const content = await response.json()

    return {
        props: {
            content,
        }
    }
}