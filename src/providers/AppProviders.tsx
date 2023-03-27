import React from "react"
import { ThemeProvider, createTheme } from "@mui/material"
import { CssBaseline } from "@mui/material"

const theme = createTheme({
  palette: {
    mode: "dark",
  },
})

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  )
}
