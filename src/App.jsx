import React from "react"
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material"
import { PhotoCamera } from "@mui/icons-material"


const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">Photo Albums</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Albums
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, vero?
                        </Typography>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" align="center">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" align="center">
                                    See my photos 1
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" align="center">
                                    See my photos 2
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App