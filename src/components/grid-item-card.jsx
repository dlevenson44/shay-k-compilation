import React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const GridItemCard = ({ img, title, description }) => (
  <Card sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <Typography variant="h4">{title}</Typography>
    <img src={img} height="100" width="100" alt="header imge" />
    <CardContent>{description}</CardContent>
  </Card>
)

export default GridItemCard
