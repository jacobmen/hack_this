import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Card, Typography, CardActionArea, CardContent, CardHeader, CardMedia, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Layout from '../components/layout'
import styles from '../styles/main.module.scss'

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <Typography variant="h1" align="center">
          Historio
        </Typography>
        <Typography variant="subtitle1" align="center" className={styles.description}>
          History by students for students
          <br></br>Created by Jacob Men, Abhilash Raghuram, Amrith Ravikumar, and Rohan Vasavada
        </Typography>

        <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing={2}>
          <Grid item container direction="column" justify="space-between" alignItems="stretch" spacing={5} xs={10} sm={10} md={5}>
            <Typography variant="h4" align="center">Discovery and Independence</Typography>
            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period1">
                  <CardActionArea>
                    <CardHeader title="1492-1763" />
                    <CardContent>
                      <Typography variant="subtitle1">Discovery of the Americas by Columbus, Colonization, and the Royal Proclomation of 1763</Typography>
                      <CardMedia image="/images/jamestown.jpg" className={styles.card__image} />
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
                      <CardMedia image="/images/teaparty.png" className={styles.card__image} />
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          </Grid>

          <Grid item container direction="column" justify="space-between" alignItems="stretch" spacing={5} xs={10} sm={10} md={5}>
            <Typography variant="h4" align="center">The New Nation and Antebellum Era</Typography>
            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period3">
                  <CardActionArea>
                    <CardHeader title="1789-1816" />
                    <CardContent>
                      <Typography variant="subtitle1">The Chronicles of the US and a final war against the British for Independence</Typography>
                      <CardMedia image="/images/baltimore.jpg" className={styles.card__image} />
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period4">
                  <CardActionArea>
                    <CardHeader title="1816-1848" />
                    <CardContent>
                      <Typography variant="subtitle1">US politics, economics, and society after the War of 1812</Typography>
                      <CardMedia image="/images/clay.jpg" className={styles.card__image} />
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>

            {/*
            <Grid item>
              <Card className={styles.card}>
                <Link href="/Content/period5">
                  <CardActionArea>
                    <CardHeader title="1848-1860" />
                    <CardContent>
                      <Typography variant="subtitle1">The Road to the Civil War, chronicling political and societal tensions</Typography>
                      <CardMedia image="/images/brown.jpg" className={styles.card__image} />
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
                      <CardMedia image="/images/lincoln.jpg" className={styles.card__image} />
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            */}
          </Grid>
        </Grid>
      </main>
    </Layout>
  )
}
