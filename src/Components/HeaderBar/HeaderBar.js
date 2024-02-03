import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

function HeaderBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1">Pokemon</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar