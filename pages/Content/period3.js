import Link from 'next/link'
import Head from 'next/head'
import { Card, Typography, CardActionArea, CardContent, CardHeader, CardMedia, AppBar, Toolbar, IconButton, Button, 
    Grid, Paper, Radio, RadioGroup, FormControl, FormControlLabel,FormLabel, FormHelperText } from '@material-ui/core'
import Layout from '../../components/layout'
import PeriodPage from '../../components/periodPage'
import styles from '../../styles/main.module.scss'

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
            <PeriodPage>
                <Typography variant="h3" align="left" className={styles.title}>
                    1789-1816: The Chronicles of the US and a final war against the British for Independence
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    The Presidency of George Washington
                </Typography>
                <Typography variant="body1" align="center" >
                  Following his appointment as President of the United States at the Constitutional Convention, Washington’s presidency was mainly a time in which the beliefs and structure of the government were more solidified. To begin, Washington had appointed members of his cabinet, like John Adams as Vice President and Alexander Hamilton as Secretary of the Treasury. His presidency had also begun with the passing of the controversial Tariff Act of 1789, which was controversial since part of the reason the colonies broke away from Britain was to avoid paying tariffs. This act had placed taxes on foreign goods, mainly English, in order to allow the United States’ industries to grow and to also produce revenue for the federal government, since no other method seemed viable. Next, Washington had moved to deal with economic structure for the new nation. The plans he considered the most were from Alexander Hamilton, which emphasized more power on a strong central government over the states, with ideas like assuming state debts, a national bank, the establishment of the US Mint and the US dollar, and the proposal of an excise tax on liquor. With Hamilton’s proposals, old disagreements returned, with many of the Federalists supporting Hamilton’s views and Anti-Federalists like Thomas Jefferson being opposed to such a move that would strengthen the central government. But Washington had accepted Hamilton’s plans, even though the Anti-Federalists were less enthusiastic about it, believing it to be what the states needed. In 1793, Washington had passed the Whiskey Act, which enforced Hamilton’s excise tax idea. For Americans, namely those on the frontier, the tax was an abomination and had sowed serious anger. This anger culminated into the formation of riots that seemed like rebellion. With the existence of militias and the power given by the Constitution, Washington was able to squash the rebellion. This was significant, since the Whiskey Revolt was similar to Shays’ Rebellion earlier, except in this case, it was actually possible to deal with the revolt and showed that the Constitution had invested proper power into the central government. 
                </Typography>
                <img src="/images/p3images/WR.jpg" className={styles.imagePara}/>
                <Typography variant="caption text" align="left" className={styles.caption}>
                  The Whiskey Revolt
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                  The Washington Presidency did not just address domestic concerns though. Internationally, Washington dealt with the European countries. In 1793, Washington had declared neutrality in the ongoing French Revolutionary Wars. He also made treaties with other countries. With Spain, he commissioned Thomas Pickney to negotiate the Treaty of San Lorenzo with Spain, which allowed the US to navigate the Mississippi River. Washington also commissioned John Jay, an author of the Federalist papers, to negotiate Jay’s Treaty with Great Britain, which led to the removal of British forts in the west. Besides dealing with the European powers, Washington also had the issue of Barbary Pirates, which he used to the creation of a navy through the Naval Act of 1794 to deal with. In 1796, Washington decided not to run for another term in office, leading to an election for a new President and Vice President, who were decided to be John Adams and Thomas Jefferson respectively, two people from different political factions. In his Farewell Speech, Washington had only requested two things of the country, to not get involved in foreign conflicts, as he did not in the Neutrality Proclamation of 1793, and to avoid political parties, which he started to see emerge in the form of the Federalists and Anti-Federalists. Unfortunately, neither of these desires would be fulfilled in American History. 
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    The Adams Presidency 
                </Typography>
                <Typography variant="body1" align="center" >
                  After winning the Election of 1796, John Adams, assumed the office of President on March 4, 1796. Once Adams assumed office, he faced a dilemma: what to do about the French. In keeping with Washington’s beliefs, he decided the country should maintain neutrality in the conflict between the French and the British, although the Anti-Federalists, now known as the Democratic Republicans, and the people of the US wanted to support France due to the fact they were fighting Britain and helped them win the Revolutionary War. After giving a speech in the Senate about being prepared for a French attack while being neutral and not creating hostilities, Adams assembled a team of American diplomats, John Marshall, Charles Pickney, and Elbridge Gerry, to negotiate with the French to reduce hostilities. Upon arriving in France, the diplomats only received a short meeting with Prime Minister Talleyrand, who didn’t really care to meet, and were then told by 3 of Talleyrand’s agents, referred to as agents X,Y, and Z, that if they wanted to continue negotiations, they must pay large bribes to Talleyrand and the French Republic. Due to this, the American diplomats returned home. Once word had gotten out about this exchange, Americans were furious, with calls for war against the French in place. 
                </Typography>
                <img src="/images/p3images/XYZ.jpg" className={styles.imagePara}/>
                <Typography variant="caption text" align="left" className={styles.caption}>
                  Political cartoon of the XYZ Affair
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                  In response to the existence of possible French spies, the Federalists introduced, and Congress passed, the Alien and Sedition Acts. The Alien Acts had given the President the power to deport foreign nationals, namely the French, and increased overall citizenship requirements. The Sedition Act had penalized people who spoke ill of the administration or government. Though the acts did not have much impact on immigrants, it did hurt Republicans more due to the Sedition Acts. The discontent with the Sedition Act had led to Jefferson and James Madison drafting the Kentucky and Virginia Resolutions, which decried the Act and stated states have the right to nullify acts they find unconstitutional. With these acts in place, and the XYZ Affair, conflict between the US and France seemed inevitable. These conflicts only started after a French vessel captured a merchant vessel off of New York Harbor. Since it was obvious the US was not ready for a true war, Adams declared an unofficial war with the French, a Quasi-War. This involved not truly getting into major battles, and attempting to find diplomatic solutions to their problems. During this time, Adams, while attempting to resolve the issues diplomatically, commissioned ships to attack the French ships. Adams was also looking to establish a provisional army. In deciding on who to lead this army, cracks in the Federalist Party started to show. While many Federalists wanted Alexander Hamilton to be appointed, Adams did not trust him. Instead, Adams requested George Washington to lead, who stated he wanted to have Hamilton as a second-in-command, who would be the de facto leader of the army. Adams eventually relented, after holding out and nearly causing major issues in the party. As the Election of 1800 dawned, the Federalists put forward John Adams for reelection and Charles Pickney, while the Republicans put forward Jefferson and Aaron Burr once again. Due to mass opposition from the Republicans and divisions within the Federalist Party, Adams and Pickney both came in after Jefferson and Burr. The Election of 1800 had marked a turning point in US history. It marked the presidency of the first one-term President, and also showed the American system could support a successful change in power between parties. 
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    The Jefferson Presidency
                </Typography>
                <Typography variant="body1" align="center" >
                  After being sworn in as President on March 4, 1801, with Aaron Burr as Vice President, one of the first things Jefferson attempted to do was reverse an Adams-era act, the Judiciary Act of 1801, where Adams appointed many Federalist leaning judges in the last days of his presidency, with the Judiciary Act of 1802. This outraged the Federalists, and led to the existence of a high profile Supreme Court by plaintiff William Marbury against Secretary of State James Madison for not providing him with his commission. This case, Marbury v. Madison (1803), would be crucial for the future of the judicial branch, for it did have Madison in the wrong for not providing commission, but also did not give Marbury his post. Chief Justice John Marshall pointed out the issue with the Judiciary Act of 1789 which created the Supreme Court, and was thus able to establish Judicial Review, the ability for the Supreme Court to declare a law unconstitutional. With a change in party came changes in politics and economics. The Democratic Republicans were more about being representative of the common man than the Federalists, so suffrage was expanded to all white men rather than just the elite. On the economic side, Jefferson believed that the national debt needed to be reduced, so he set to work reducing the debt during his administration. In his presidency, Jefferson reduced the national debt by a third by reducing budgets, military spending, and abolishing the excise tax put forth by Washington. In regards to other ventures, Jefferson had abolished the importing of slaves into the US by 1808, although he let slavery in the Untied States continue. Besides these domestic changes, Jefferson had to deal with a few foreign issues as well. In 1803, Jefferson had participated in the Louisiana Purchase, where he bought the Louisiana territory from Napoleon Bonaparte, the leader of France, for $15 million. This new territory required exploration, so Jefferson commissioned the Lewis and Clark Expedition to lay claim to the Oregon territory. Throughout his presidency, Jefferson faced an issue that plagued Washington and Adams: the impressment of US sailors by the British. This came to head in 1807, when the HMS Leopard had attacked the USS Chesapeake in the Chesapeake-Leopard Affair. The British had either killed or impressed the members of the American crew. 
                </Typography>
                <img src="/images/p3images/CLA.jpg" className={styles.imagePara}/>
                <Typography variant="caption text" align="left" className={styles.caption}>
                  The Chesapeake-Leopard Affair
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                  Combined with Napoleon’s policy of destroying any ships trading with the British, the US Navy was under attack from both France and Britain. This led to Jefferson enforcing the Embargo Act of 1807, which prevented trade with Britain and France, as an alternative to war. Although the act had good intentions, it was circumvented through heavy smuggling. This Chesapeake-Leopard Affair would be one of the causes of the war of 1812 down the road. Although Jefferson had the opportunity to run for re-election in 1808, he decided to follow the precedent Washington set of serving only 2 terms, which led to his Secretary of State, James Madison, becoming the new President.
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                  The Madison Presidency and the War of 1812
                </Typography>
                <Typography variant="body1" align="center" className={styles.body}>
                  Following his inauguration, Madison had one main issue to tackle: what to do about the British. The embargoes set forth by Jefferson weren’t working the way the government hoped, and the British were still impressing US sailors. Furthermore, Madison had to also deal with the raids committed by Native Americans on colonial cities, namely Tecumseh and his brother Tenskwatawa, the leader of a pan-tribal civilization called Prophetstown that aimed to be an independent nation of the colonies. In 1811, Tenskwatawa was killed and Prophetstown was burned down in the Battle of Tippecanoe. 
                </Typography>
                <img src="/images/p3images/Tippecanoe.jpg" className={styles.imagePara}/>
                <Typography variant="body1" align="center" className={styles.body}>
                  During this time, the US was calling for war, and Madison was believing it to be the only option. Furthermore, war hawk senators like John Calhoun and Henry Clay were voted into Congress, further motivating the country to fight a war with Britain which was at the moment occupied with the Napoleonic Wars. In 1812, Madison decided to declare war against Britain, in an attempt to take Canada and convince Britain to listen to the US demands, but the initial invasion, and subsequent ones, failed. In response to this, the British decided to ally with Tecumseh and his people against the United States. Tecumseh eventually died at the Battle of the Thames in 1814, bringing an end to his vision. In 1814, the British were able to breach the country, and burned the capital to the ground, massively damaging American morale. But, this didn't end the American effort. At the Battle of Baltimore a few months later, the Americans held off a naval attack by the British at Fort Henry. This was also the battle where Francis Scott Key was inspired to write the Star-Spangled Banner, as a testament to American resolve. 
                </Typography>
                <img src="/images/p3images/baltimore.jpg" className={styles.imagePara}/>
                <Typography variant="body1" align="center" className={styles.body}>
                  Along with the victory at the Battle of Plattsburgh, and anti-war sentiments of the British public, the war started to turn in the Americans’ favor, ending with the Battle of New Orleans where Andrew Jackson led American forces to victory. The war was officially brought to an end with the Treaty of Ghent, where all prisoners were released and pre-war boundaries were restored. All in all, while the Treaty of Ghent didn’t change anything in terms of territory, it reaffirmed American independence and had created a working relationship between the US and Great Britain for years to come. Following the war, the US was relatively peaceful, marking a transition into the so-called Era of Good Feelings. It also really marked the end of the Federalists, who had lost 4 of the past 6 elections. In a last ditch attempt, they hosted the Hartford Convention to air their grievances against the war, but to no avail in revitalizing them. WIth the Election of 1816 coming up, Madison decided to stick to precedent and not run for a 3rd term, paving the way to the presidency of James Monroe. 
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    Writing Tips
                </Typography>
                <Typography variant="body1" align="center" >
                  Typically party politics come up for this period. LAQs will focus on the comparison between the two parties, such as who votes for who, the policies, and overall trends. Also here, there could be a comparison between the Revolutionary War and War of 1812. There can also be questions about political cartoons like the XYZ affair cartoon. 
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
            </PeriodPage>
        </Layout>
    );
}