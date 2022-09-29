import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const GridWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'limegreen',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gap: '1rem',
  [theme.breakpoints.up('md')]: {
    backgroundColor: 'red',
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'blue',
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'purple',
    gridTemplateColumns: 'repeat(1, 1fr)'
  },
}))

const Grid = ({ children }) => {
  return (
    <GridWrapper>
      {children}
    </GridWrapper>
  )
}

export default Grid
