import { Card, Typography, CardActionArea, CardContent, CardHeader, CardMedia, AppBar, Toolbar, IconButton, Button, Grid, Paper } from '@material-ui/core'
import styles from '../styles/main.module.css'

export default function InfoPage(props) {
    return (
        <main className={styles.main}>
            <div className={styles.pageContainer}>
                <Paper>
                    <div className={styles.contentContainer}>
                        {props.children}
                    </div>
                </Paper>
            </div>
        </main>
    );
}
