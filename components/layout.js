import { createMuiTheme, responsiveFontSizes, CssBaseline, ThemeProvider, AppBar, Toolbar } from '@material-ui/core'
import Head from 'next/head'

export default function Layout(props) {
    const theme = responsiveFontSizes(createMuiTheme({
        palette: {
            type: 'dark',
        },
    }));

    return (
        <>
            <Head>
                <title>Historio</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <AppBar position="static"><Toolbar></Toolbar></AppBar>
                    {props.children}
                </CssBaseline>
            </ThemeProvider>
        </>
    )
}