import React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const GridItemCard = ({ img, title, description }) => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} onClick={() => setShowModal(!showModal)}>
      <Typography variant="h4">{title}</Typography>
      <img src={img} height="100" width="100" alt="header imge" style={{ borderRadius: '5%', objectFit: 'contain' }} />
      <CardContent>{description}</CardContent>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '5%' }}>
            <img src={img} height="400" width="250" alt="header imge" style={{ borderRadius: '5%', objectFit: 'contain' }} />
            <Typography variant="h4"  sx={{ mt: 2, fontWeight: 'bolder' }}>{title}</Typography>
            <Typography id="modal-modal-description" sx={{ textAlign: 'center' }}>{description}</Typography>
          </Box>
        </Box>
      </Modal>
    </Card>
    )
}


export default GridItemCard
