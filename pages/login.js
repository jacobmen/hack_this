import React from 'react';
import {useRouter} from "next/router";
import Link from 'next/link'
import {firebase, auth} from '../services/firebase'
import {Paper, Typography, FormControl, InputLabel, Input, Grid, Button} from '@material-ui/core'
import Layout from '../components/layout'
import styles from '../styles/main.module.scss'

export default function login(props) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [errorMessage, setErrorMessage] = React.useState("")

    const router = useRouter()

    const handleSignIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                router.push('./')
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }

    return (
        <Layout>
            <div className={styles.loginContainer}>
                <Typography variant="h4" className={styles.loginContainer__header}>Sign In</Typography>
                <Paper elevation={1} className={styles.loginContainer__paper}>
                    <form onSubmit={handleSignIn}>
                        <Grid container direction={"column"}>
                            <FormControl margin={"normal"} required>
                                <InputLabel htmlFor="email">Email address</InputLabel>
                                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </FormControl>
                            <FormControl margin={"normal"} required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </FormControl>
                            <Button type="submit">Submit</Button>
                            <Link href="./createaccount"><a>Create Account</a></Link>
                            <Typography variant="body1">{errorMessage}</Typography>
                        </Grid>
                    </form>
                </Paper>
            </div>
        </Layout>
    )
}