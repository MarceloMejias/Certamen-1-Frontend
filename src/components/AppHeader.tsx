import { AppBar, Toolbar, Typography } from '@mui/material'

function AppHeader() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: '#2e2e2e', color: '#e9eee8' }}
    >
      <Toolbar>
        <div className="container d-flex align-items-center justify-content-between">
          <Typography component="div" variant="h6">
            Anillo Único
          </Typography>
          <Typography component="p" variant="body2" className="text-end">
            Uno para dominarlos a todos
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader