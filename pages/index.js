import Head from 'next/head'
import Link from 'next/link'
import { Card, Typography, CardActionArea, CardContent, CardHeader, AppBar, Toolbar, IconButton, Button, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <Typography variant="h2" align="center" className={styles.title}>
          APHistory Assistant
        </Typography>

        <Typography variant="subtitle1" align="center" className={styles.description}>
          Must Coood
        </Typography>

        <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing={2}>
          <Grid item container direction="column" justify="space-between" alignItems="stretch" spacing={5} xs={10} sm={5}>
            <Typography variant="h4" align="center">Discovery and Independence</Typography>
            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period1">
                  <CardActionArea>
                    <CardHeader title="1492-1763" />
                    <CardContent>
                      <Typography variant="subtitle1">Discovery of the Americas by Columbus, colonization, and the Royal Proclomation of 1763</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>

            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period2">
                  <CardActionArea>
                    <CardHeader title="1763-1789" />
                    <CardContent>
                      <Typography variant="subtitle1">The Road to Revolution, Independence, and Government for the US</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>

            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period3">
                  <CardActionArea>
                    <CardHeader title="1789-1816" />
                    <CardContent>
                      <Typography variant="subtitle1">The Chronicles of the US and a Final War against the British for Independence</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          </Grid>

          <Grid item container direction="column" justify="space-between" alignItems="stretch" spacing={5} xs={10} sm={5}>
            <Typography variant="h4" align="center">The Antebellum Era and Civil War</Typography>
            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period4">
                  <CardActionArea>
                    <CardHeader title="1816-1848" />
                    <CardContent>
                      <Typography variant="subtitle1">The Story of US politics, economics, and society post-British</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>

            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period5">
                  <CardActionArea>
                    <CardHeader title="1848-1860" />
                    <CardContent>
                      <Typography variant="subtitle1">The Road to the Civil War, chronicling political tensions and societal tensions</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>

            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period6">
                  <CardActionArea>
                    <CardHeader title="1860-1865" />
                    <CardContent>
                      <Typography variant="subtitle1">The Civil War</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </Layout>
  )
}
