import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'blue',
  color: 'white',
  padding: '1rem',
  minHeight: '4rem',
}))

const GridItem = ({ children }) => (
  <Item>{children}</Item>
)

export default GridItem
