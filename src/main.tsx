/* eslint-disable import-helpers/order-imports */
import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CssBaseline from '@mui/material/CssBaseline'

import './index.css'

import App from './App'
import theme from './styles/theme'
import 'dayjs/locale/pt-br'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'} >
        <App />
      </LocalizationProvider>
    </ThemeProvider> 
  </React.StrictMode>,
)
