import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheets} from '@material-ui/styles'
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'

const theme = responsiveFontSizes(createMuiTheme())

class HistorioDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="theme-color" content={theme.palette.primary.main}/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
                    />
                    <style jsx global>
                        {`
                          html,
                          body {
                            height: 100%;
                            width: 100%;
                          }
                          *,
                          *:after,
                          *:before {
                            box-sizing: border-box;
                          }
                          body {
                            font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                            font-size: 1rem;
                            margin: 0;
                          }
                        `}
                    </style>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

HistorioDocument.getInitialProps = async (context) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = context.renderPage

    context.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App {...props} />)
        })

    const initialProps = await Document.getInitialProps(context)

    return {
        ...initialProps,
        styles: [
            <React.Fragment key="styles">
                {initialProps.styles}
                {sheets.getStyleElement()}
            </React.Fragment>
        ]
    }
}

export default HistorioDocument