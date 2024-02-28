import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        borderRadius: '0',
        color: theme.palette.text.main,
        fontSize: 12,
        fontFamily: 'poppins',
        fontWeight: 300,
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.border.main200,
            }
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.border.main200,
            }
        },
        '&.MuiInputBase-adornedEnd': {
            padding: '0',
            '& svg': {
                stroke: theme.palette.icon.main50,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    stroke: theme.palette.primary.main,
                    cursor: 'pointer'
                },
            },
        },
        '& .MuiInputBase-input': {
            padding: "8px",
            paddingLeft: '10px',
            '&::placeholder': {
                color: theme.palette.text.main,
                opacity: 1,
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.border.main400,
            borderWidth: 1,
        },
    },
}))

const PTextfield = ({children, className, ...props}) => {
  return (
    <CustomTextField className={`${className || ''}`} {...props}>
      {children}
    </CustomTextField>
  )
}

export default PTextfield
