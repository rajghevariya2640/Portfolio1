import { Typography } from '@mui/material'

const PTypography = ({children, className, variant, ...props}) => {
  return (
    <Typography className={`${className || ''}`} variant={variant || 'body1'} {...props}>
      {children}
    </Typography>
  )
}

export default PTypography
