import React from 'react'
import { useRouter } from 'next/router'

import {
    createMuiTheme,
    Button,
    responsiveFontSizes,
    CssBaseline,
    ThemeProvider,
    AppBar,
    Toolbar
} from '@material-ui/core'
import {firebase, auth} from '../services/firebase'
import Head from 'next/head'

export default function Layout(props) {
    const [signedIn, setSignedIn] = React.useState(false)

    const router = useRouter()

    const theme = responsiveFontSizes(createMuiTheme({
        palette: {
            type: 'dark',
        },
    }));

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setSignedIn(true)
            } else {
                setSignedIn(false)
            }
        })
    })

    const handleSignInButton = () => {
        if (signedIn) {
            auth.signOut()
        }

        router.push('/login')
    }
    const handleHomeButton =() => {
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>Historio</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <AppBar position="static">
                        <Toolbar>
                            <Button type="Secondary" onClick={handleHomeButton}> Historio </Button>
                            <Button onClick={handleSignInButton}>{signedIn ? "Sign Out" : "Sign In"}</Button>
                        </Toolbar>
                    </AppBar>
                    {props.children}
                </CssBaseline>
            </ThemeProvider>
        </>
    )
}