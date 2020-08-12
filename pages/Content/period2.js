import Link from 'next/link'
import Head from 'next/head'
import { Card, Typography, CardActionArea, CardContent, CardHeader, CardMedia, AppBar, Toolbar, IconButton, Button, 
    Grid, Paper, Radio, RadioGroup, FormControl, FormControlLabel,FormLabel, FormHelperText } from '@material-ui/core'
import Layout from '../../components/layout'
import InfoPage from '../../components/infoPage'
import styles from '../../styles/main.module.css'

export default function Period2(props) {
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
                    1763-1789: The Road to Revolution, Independence, and Government for the US
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    The Road to Revolution
                </Typography>
                <Typography variant="body1" align="center" >
                Following the 7 Years War, the British had faced monetary issues, due to the maintenance of their colonies and the costs of war. To remedy the issue, the British had increased taxes, and since they had an impression they had been very loose with how they treated the American colonies, they imposed large taxes on the colonies, which we’ll detail below. As it will be seen, this action by the British, coupled with the Royal Proclamation of 1763 which prevented American colonists from going beyond the line, limiting colonial expansion, would lead to Revolution. <br></br> <br></br>

                The first act passed by British Prime Minister George Grenville was known as the Sugar Act of 1764. The Sugar Act had placed a tax on imported refined sugar and molasses from non-British Carribean sources in order to raise money for the crown. This act was followed by the Currency Act of 1764, which took paper money out of circulation from the colonies, mainly due to the fact it was depreciated in value in the eyes of the British. This allowed the British to really assume control of the existing colonial money. In 1765, the British passed the Stamp Act, which taxed the colonists on English-stamped printed materials. This act of direct taxation, combined with the two aforementioned taxes, had outraged the colonists and led to rioting, the tarring and feathering of stamp agents, and the destruction of the stamped goods by colonists like the Sons of Liberty, a group formed by John and Samuel Adams to oppose the Stamp Act. Alongside these activities, the “Stamp Act Congress”, consisting of members from 9 of the colonies came together to create a statement of grievances to be sent to King George III. In 1766, after dealing with so much outrage and seeing an impact on English business, Parliament repealed the Stamp Act, and issued a new act called the Declaratory Act which stated that Britain was allowed to directly tax any of its colonies. The unity that occurred to fight the Stamp Act would foreshadow and set the stage for the Independence movement a decade later.
                </Typography>
                <img src="/images/p2images/StampAct.jpg" className={styles.imagePara}/>
                <Typography variant="caption text" align="left" className={styles.caption}>
                  Stamp Act Protest
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                In 1767, the new Prime Minister of Great Britain, Charles Townshend, decided to control the colonies through the passage of 4 laws, known as the Townshend Acts. The main act that disturbed the colonists was the taxes on a variety of goods that were imported into the colonies, since it made their way of life more difficult. Other tenets, such as beefing up the Quartering Act of 1765, and more restricted control over customs of the colonies, took away from the policy of “salutary neglect”, the hands-off approach of the Crown,  the colonists had felt prior to 1763. The Townshend Acts had caused small hostilities between the British and colonists, which culminated on March 5, 1770 with the infamous Boston Massacre. In this incident, protestors of the British measures were throwing snowballs and other materials at British soldiers, leading to Capt. Thomas Preston ordering his soldiers to fire on the crowd, killing 3 men, including sailor and former slave Crispus Attucks. Coincidentally, namely due to violence like this against British merchants and servants, Parliament had repealed the Townshend Acts on the same day. Soldiers were also removed from Boston to avoid conflict. The Boston Massacre would go on to be an event that would be remembered and a reason to fight for independence. 
                </Typography>
                <img src="/images/p2images/BM.jpg" className={styles.imagePara}/>
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
                    <Button type="submit" variant="outlined" color="primary" className={styles.button}>
                    Submit
                    </Button>
                </FormControl>
                </form>
            </InfoPage>
        </Layout>
    );
}