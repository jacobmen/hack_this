import {Paper } from '@material-ui/core'
import styles from '../styles/main.module.scss'

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
