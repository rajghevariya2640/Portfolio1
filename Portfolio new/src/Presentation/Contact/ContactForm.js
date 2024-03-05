import styled from '@emotion/styled'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import PBox from '../../Shared/PBox'
import PButton from '../../Shared/PButton'
import PGridContainer from '../../Shared/PGridContainer'
import PGridItem from '../../Shared/PGridItem'
import PStack from '../../Shared/PStack'
import PSubHead from '../../Shared/PSubHead'
import PTextfield from '../../Shared/PTextfield'

const FormMain = styled(PBox)(({ theme }) => ({
  maxWidth: 1050,
  margin: '0 auto',
  marginTop: 50
}))

const ContactForm = () => {

  const themeValue = localStorage.getItem('themeMode')
  return (
    <FormMain>
      <form>
        <PSubHead title='How Can I Help You?' />
        <PBox sx={{ marginTop: '25px' }}>
          <PGridContainer spacing={3.75}>
            <PGridItem xs={12} md={6}>
              <PStack gap={2.5}>
                <PTextfield variant='standard' placeholder='Full Name' />
                <PTextfield variant='standard' placeholder='Email Address' />
                <PTextfield variant='standard' placeholder='Subject' />
              </PStack>
            </PGridItem>
            <PGridItem xs={12} md={6}>
              <PStack>
                <PTextfield
                  variant='standard'
                  placeholder='Message'
                  multiline
                  rows={6.9} />
              </PStack>
            </PGridItem>
          </PGridContainer>
          <PBox sx={{marginTop: '20px'}}>
            <ReCAPTCHA sitekey='6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI' theme={themeValue === 'light' ? 'light' : 'dark'} />
          </PBox>
          <PButton variant='outlined' sx={{marginTop: '20px'}}>
            Send message
          </PButton>
        </PBox>
      </form>
    </FormMain>
  )
}

export default ContactForm
