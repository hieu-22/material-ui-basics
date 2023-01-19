import React from "react"
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material"
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
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App