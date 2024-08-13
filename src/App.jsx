import React from 'react'

import Stack from '@mui/material/Stack'

import { Footer, Grid, Header, GridItemCard } from './components'
import img from './paulie.jpeg'
import gridConfig from './utils/config'

import './App.css'

function App() {
  const sampleData = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12]

  return (
    <Stack alignItems="center">
      <Header />
      <Grid>
        {gridConfig.map(({ title, description, image }) => (
          <GridItemCard
            key={title}
            title={title}
            description={description}
            img={image}
          />
        ))}
        {/* {sampleData.map(dataItem => (
          <GridItemCard
            key={dataItem}
            title="Title"
            description="This is a description for the piece"
            img={img}
          />
        ))} */}
      </Grid>
      <Footer />
    </Stack>
  );
}

export default App
