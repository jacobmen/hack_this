import Link from 'next/link'
import Head from 'next/head'
import { Card, Typography, CardActionArea, CardContent, CardHeader, CardMedia, AppBar, Toolbar, IconButton, Button, Grid, Paper } from '@material-ui/core'
import Layout from '../../components/layout'
import InfoPage from '../../components/infoPage'
import styles from '../../styles/main.module.css'

export default function Period1(props) {
    return (
        <Layout>
            <InfoPage>
                <Typography variant="h3" align="left" className={styles.title}>
                    1492-1763: The Discovery of the Americas by Columbus, Colonization, and the Royal Proclamation of 1763
                </Typography>
                <Typography variant="h4" align="left" className={styles.heading}>
                    Christopher Columbus arrives
                </Typography>
                <Typography variant="body1" align="center" >
                    First paragraph about Columbus coming to the new world and being a damn crazy genoan tyrant who was flying Spanish colors cuz no one else would
                    have him cuz he sucks so bad. He was a little bitch lol
                </Typography>
                <img src="/images/baltimore.jpg" className={styles.imagePara}/>
            </InfoPage>
        </Layout>
    );
}