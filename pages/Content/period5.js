import Link from 'next/link'
import Head from 'next/head'
import { Card, Typography, CardActionArea, CardContent, CardHeader, CardMedia, AppBar, Toolbar, IconButton, Button, 
    Grid, Paper, Radio, RadioGroup, FormControl, FormControlLabel,FormLabel, FormHelperText } from '@material-ui/core'
import Layout from '../../components/layout'
import InfoPage from '../../components/infoPage'
import styles from '../../styles/main.module.scss'

export default function Period5(props) {
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
        } else if (value === 'incorrect1' || value==='incorrect2' || value==='incorrect3') {
          setHelperText('Wrong answer!');
          setError(true);
        } else {
          setHelperText('Please select an option.');
          setError(true);
        }
      };
    return (
        <Layout>
            <InfoPage>
                <Typography variant="h3" align="left" className={styles.title}>
                    1492-1763: The Discovery of the Americas by Columbus, Colonization, and the Royal Proclamation of 1763
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    
                </Typography>
                <Typography variant="body1" align="center" >
                    
                </Typography>
                <img src="/images/baltimore.jpg" className={styles.imagePara}/>
                <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" error={error} className={styles.formControl}>
                    <FormLabel component="legend">which one?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                        <FormControlLabel value="incorrect1" control={<Radio />} label="1" />
                        <FormControlLabel value="incorrect2" control={<Radio />} label="2" />
                        <FormControlLabel value="correct" control={<Radio />} label="3" />
                        <FormControlLabel value="incorrect3" control={<Radio />} label="4" />
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