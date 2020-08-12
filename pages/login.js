import React from 'react';
import { firebase, auth } from '../services/firebase'
import { Paper, Typography } from '@material-ui/core'
import Layout from '../components/layout'
import styles from '../styles/main.module.scss'

export default function login(props) {
    return (
        <Layout>
            <div className={styles.loginContainer}>
                <Typography variant="h4" className={styles.loginContainer__header}>Sign In</Typography>
                <Paper elevation={1} className={styles.loginContainer__paper}>

                </Paper>
            </div>
        </Layout>
    )
}