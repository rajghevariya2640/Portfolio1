import React, { useState } from 'react'
import PBox from '../../../Shared/PBox'
import PTypography from '../../../Shared/PTypography'
import { Tab, Tabs } from '@mui/material'
import PSubHead from '../../../Shared/PSubHead';
import PStack from '../../../Shared/PStack';
import styled from '@emotion/styled';

const CstmTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: "-1px",
  '& .MuiTab-root': {
    padding: '20px 25px',
    minWidth: 'unset',
    border: `1px solid transparent`,
    borderBottom: 'none',
    textTransform: 'none',
    '&.Mui-selected': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.border.main50,
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <PBox sx={{p:'20px', border:'1px solid', borderColor:(theme) => theme.palette.border.main50}}>
          <PTypography fontSize="14px" fontWeight="500" lineHeight="1.75">{children}</PTypography>
        </PBox>
      )}
    </div>
  );
}

const ExtraTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <PStack gap={2.5}>
      <PSubHead title="Tabs" />
      <PStack>

      <CstmTabs value={value} onChange={handleChange} aria-label='Tabs example'>
        <Tab label='Morbi eu' id='tab-0' disableRipple />
        <Tab label='Aliquam erat' id='tab-1' disableRipple />
      </CstmTabs>
      <TabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tincidunt egestas. Pellentesque scelerisque, nibh a laoreet eleifend, urna nisi facilisis purus, vel commodo ipsum elit ornare arcu. Nam sem purus, porta ut condimentum eget, vestibulum vitae est. Praesent eget purus hendrerit, congue nulla eget, vehicula urna. Fusce ultrices id quam sed tristique.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Aenean auctor pulvinar venenatis. Nam nec tristique mauris, sit amet fermentum mauris. Suspendisse dapibus pretium purus quis fermentum. Mauris nec dolor nunc. Suspendisse euismod, sem in suscipit condimentum, diam erat facilisis magna, in porttitor justo elit id erat. Praesent luctus interdum ante, id fermentum nisl viverra vel.
      </TabPanel>
      </PStack>
    </PStack>
  )
}

export default ExtraTabs
