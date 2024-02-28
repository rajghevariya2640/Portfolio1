import React from 'react'
import PPageHead from './PPageHead'
import { CssBaseline } from '@mui/material'
import PBox from './PBox'
import SideBar from '../Presentation/Sidebar/SideBar'
// import { theme } from '../Theme/Theme'

const PageLayout = ({children, pageHeading, subHeading, notHome}) => {
  return (
      <CssBaseline>
      {/* <SideBar /> */}
    
        <PBox
          sx={{
            marginLeft: "175px",
            padding: "50px 70px",
            backgroundColor: (theme)=>theme.palette.secondary.main,
            height: "100vh",
            overflowX: "auto",
            "&::-webkit-scrollbar": { width: 4, position: "absolute", left: 0 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: (theme)=>theme.palette.secondary.main300,
              padding: 0,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: (theme)=>theme.palette?.white?.main,
              padding: 0,
            },
          }}
        >
          <PPageHead pageHead={pageHeading} subHead={subHeading} notHome={notHome} />
          {children}
          </PBox>
          </CssBaseline>
  )
}

export default PageLayout