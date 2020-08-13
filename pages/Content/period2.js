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
            fetch('http://localhost:3000/api/Content/period2', {
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
                <Typography variant="caption text" align="left" className={styles.caption}>
                  Boston Massacre
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                Following this, tensions were relatively calm until 1773. In 1773, due to an overabundance of tea in British East India Company, which was a mercantile corporation, the British decided to sell the tea to the colonies at a discount. Colonists had interpreted the Tea Act to be a nefarious move by the British. Due to discounted tea being sold by the East India Company directly to the colonies, colonial tea merchants were losing sales, and other colonists believed that the Tea Act was really a means to trick the colonists into paying for imported tea so they would pay the already existing tax on it. These anti-Tea Act colonists decided to act to show their dissatisfaction. On December 16, 1773, the colonists dressed up as Native Americans and poured tea out of ships into Boston Harbor as protest against the Tea Act. While the Boston Tea Party was not approved by all future independence movement leaders, it did awaken some feelings of rebellion which influenced the inception of the independence movement. The Boston Tea Party’s more immediate result was the levying of the Coercive Acts, otherwise known as the Intolerable Acts. The Intolerable Acts were mainly focused on Massachusetts as retribution for the Boston Tea Party. Boston’s port was closed until all the spilled tea was paid for, Massachusetts households were mandated to quarter troops, judicial authority was moved to England, and the Massachusetts Constitution was ended. All in all, the measures of the acts resembled martial law in Massachusetts. While these acts were placed against the colonies in a bid to squash the rebellion, it had the opposite effect, energizing the colonies to fight against Great Britain. 
                </Typography>
                <img src="/images/p2images/TP.png" className={styles.imagePara}/>
                <Typography variant="caption text" align="left" className={styles.caption}>
                  Boston Tea Party
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                This led to the creation of the first Continental Congress. Here, representatives of 12 of the 13 colonies came together to air their grievances against the Crown, eventually drafting papers like the Olive Branch Petition to do so, requesting representation in Parliament, to which the British stated they were already virtually represented. The Association was also passed here to unite in boycotting British goods. 
                <br></br><br></br>On April 19, 1775, conflict had finally erupted. The night before, the colonists learned that the British aimed to seize an arms cache in Concord, which led to Paul Revere doing his night ride alerting the revolutionaries. The colonists positioned themselves for the battle, and fought against the British. With “the shot heard around the world”, the Revolutionary War had begun.
                </Typography>
                <img src="/images/p2images/L&C.jpg" className={styles.imagePara}/>
                <Typography variant="caption text" align="left" className={styles.caption}>
                  Lexington & Concord
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    The Revolutionary War
                </Typography>
                <Typography variant="body1" align="center" >
                  Following the Battle of Lexington and Concord, the next noteworthy battle happened in June 1775 on Breed’s Hill, the Battle of Bunker Hill. Although the colonists were defeated at the battle, they had dealt significant casualties upon the English, which renewed their morale and allowed them to continue fighting the English. Although the colonists were outnumbered and more disorganized, they had advantages against the English in provisions, training, interest and morale, and geography during the war. While smaller conflicts continued to occur, the colonies had not formally filed for independence. At the Second Continental Congress in 1775, George Washington was made Commander-in-Chief of the Continental Army, setting up a structure for the colonial fighting force. One of the texts that pushed for independence was 1776’s Common Sense by Thomas Paine, which argued for independence. Eventually, on July 4th, 1776, the leaders of the movement met and officially drafted and signed the Declaration of Independence, a statement freeing the colonies from Britain politically while continuing the war effort. 
                </Typography>
                <img src="/images/p2images/Declaration.jpg" className={styles.imagePara}/>
                <Typography variant="caption text" align="left" className={styles.caption}>
                  Signing of the Declaration of Independence
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                  The war continued on with many noteworthy battles, such as the Battle of Trenton, where Commander-in-Chief Washington crossed the Delaware River at night to attack enemy soldiers on Christmas Day, or the Battle of Saratoga, a Revolutionary victory which convinced the French to join in the war against the English for American Independence. The war’s final battle was at Yorktown in 1781, where General Cornwallis of the British Army surrendered after days of fighting. The official recognition of American Independence was made through the Treaty of Paris negotiated by colonists John Jay, Benjamin Franklin, and John Adams, ceding land as far as the Mississippi River. Thus, after a grueling war, American Independence was finally achieved.
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    A New Government
                </Typography>
                <Typography variant="body1" align="center" >
                  In 1781, after the war ended, all the colonies had ratified a new governing document and system, the Articles of Confederation. This form of government had a federal and state level system, with a goal to make sure the federal component was not too powerful, since doing so could lead to tyranny. Unfortunately, this goal would be the undoing of the Articles, since the federal government was too weak to exercise its power to fulfill its responsibility of paying off war debts. This weakness, such as no standing army or proper union, would lead to events like Shays’ Rebellion, which was an attempt by former Continental Army member Daniel Shays to obtain money for his service, and the Rebellion took a while to put down due to a lack of army. Other clauses, such as permitting states to go to war with another, needing unanimous votes to pass new laws at the federal level, and only a congressional branch of the federal government. With new territories being added to the US, as those through the Northwest Land Ordinance, a cry for a new governing document was heard. For this reason, the leaders of the new country met in Philadelphia at the Constitutional Convention to create the Constitution of the United States. 
                </Typography>
                <img src="/images/p2images/CC.jpg" className={styles.imagePara}/>
                <Typography variant="caption text" align="left" className={styles.caption}>
                  The Constitutional Convention
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                  The Constitution had focused on creating a stronger and equally balanced federal government along with states’ rights. The deciding factor was dependent on the Virginia Plan from those who were classified as Federalists and the New Jersey plan by the Anti-federalists. This called for creating the three branches of government with separation of powers, the Executive, Legislative, and Judicial branches. The Executive branch had the President, who was decided to be George Washington, who would authorize laws and lead the country by a democratic policy. The check would be by the Legislative Branch, which would pass laws through 2 chambers, one with representatives from each state being represented by population size, which was determined as ⅗ for slaves in the nation, while the other had equal representation for each state. The Judicial Branch would be home to the Supreme Court, which checked for the legality of laws. To protect the individuals of the nation, and the states, from tyranny, the Constitution also included a bill of rights, modeled after the English one drafted on the writing of John Locke in 1688. The Constitution had set up a new effective government for centuries to come, but also opened up the existence of political parties in the Federalists, who supported more power to the federal government, and the Anti-Federalists, who believed in more power to the states.
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    Writing Tips
                </Typography>
                <Typography variant="body1" align="center" >
                  Typically, LAQs will be focused on the differences between the Articles of Confederation and the Constitution, with a main focus on how they affected how their country was run or why one was worse than the other. Another possible focus is on how the tax laws angered the colonists.
                </Typography>
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
            </InfoPage>
        </Layout>
    );
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/Content/period2')
    const content = await response.json()

    return {
        props: {
            content,
        }
    }
}