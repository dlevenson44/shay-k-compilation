import React from 'react'


import { Header, Grid, GridItem, Footer } from './components'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Grid>
        <GridItem>ONE</GridItem>
        <GridItem>TWO</GridItem>
        <GridItem>THREE</GridItem>
        <GridItem>FOUR</GridItem>
        <GridItem>FIVE</GridItem>
        <GridItem>SIX</GridItem>
        <GridItem>SEVEN</GridItem>
        <GridItem>EIGHT</GridItem>
        <GridItem>NINE</GridItem>
        <GridItem>TEN</GridItem>
        <GridItem>ELEVEN</GridItem>
        <GridItem>TWELVE</GridItem>
      </Grid>
      <Footer />
    </div>
  );
}

export default App
