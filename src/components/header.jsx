import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import img from '../paulie.jpeg'

const Header = () => {
  return (
    <Stack direction="row" mt={3} mb={5} spacing={3} alignItems="center">
      <img src={img} height="100" width="100" alt="header imge" />
      <Stack>
        <Typography variant="h3">Shay-K-Compilation</Typography>
        <Typography variant="caption">Art by an artist who loves all the art!</Typography>
      </Stack>
    </Stack>
  )
}

export default Header
