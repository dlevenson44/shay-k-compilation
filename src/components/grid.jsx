import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const GridWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gap: '1rem',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  },
}))

const Grid = ({ children }) => {
  return (
    <GridWrapper sx={{ mb: 5 }}>
      {children}
    </GridWrapper>
  )
}

export default Grid
