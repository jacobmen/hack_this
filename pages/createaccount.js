import React from 'react';
import {useRouter} from 'next/router'
import {firebase, auth} from '../services/firebase'
import {Paper, Typography, FormControl, InputLabel, Input, Grid, Button} from '@material-ui/core'
import Layout from '../components/layout'
import styles from '../styles/main.module.scss'

export default function createAccount(props) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

    const [errorMessage, setErrorMessage] = React.useState("")

    const router = useRouter()

    const handleCreateAccount = (e) => {
        e.preventDefault()

        if (password.trim() === confirmPassword.trim()) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    router.push('./')
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                })
        } else {
            setErrorMessage("Passwords do not match")
        }
    }

    return (
        <Layout>
            <div className={styles.loginContainer}>
                <div className={styles.loginContainer__header}>
                    <Typography variant="h4">Create Account</Typography>
                    <Typography variant="subtitle1">Must have a .edu email</Typography>
                </div>
                <Paper elevation={1} className={styles.loginContainer__paper}>
                    <form onSubmit={handleCreateAccount}>
                        <Grid container direction={"column"}>
                            <FormControl margin={"normal"} required>
                                <InputLabel htmlFor="email">Email address</InputLabel>
                                <Input id="email" value={email} inputProps={{pattern: ".*edu$"}}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </FormControl>
                            <FormControl margin={"normal"} required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </FormControl>
                            <FormControl margin={"normal"} required>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input id="confirmPassword" type="password" value={confirmPassword}
                                       onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </FormControl>
                            <Button type="submit">Submit</Button>
                            <Typography variant="body1">{errorMessage}</Typography>
                        </Grid>
                    </form>
                </Paper>
            </div>
        </Layout>
    )
}