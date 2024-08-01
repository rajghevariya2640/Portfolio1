import styled from '@emotion/styled'
import React from 'react'
// import "swiper/css"
import { Navigation } from "swiper/modules"
import { SwiperSlide } from 'swiper/react'
import PBox from '../../../Shared/PBox'
import PLink from '../../../Shared/PLink'
import PNavigation from '../../../Shared/PNavigation'
import PSubHead from '../../../Shared/PSubHead'
import PSwiper from '../../../Shared/PSwiper'
import Client1 from '../../../assets/images/png/About/Client1.png'
import Client2 from '../../../assets/images/png/About/Client2.png'
import Client3 from '../../../assets/images/png/About/Client3.png'
import Client4 from '../../../assets/images/png/About/Client4.png'
import Client5 from '../../../assets/images/png/About/Client5.png'
import Client6 from '../../../assets/images/png/About/Client6.png'
import Client7 from '../../../assets/images/png/About/Client7.png'

const ClientWrapper = styled(PBox)(({ theme }) => ({
    marginTop: 48,
    '& .swiper': {
        marginTop: 40,
        paddingBottom: 50,
        '& .swiper-slide': {
            display: 'flex',
            justifyContent: 'center',
            '& a': {
                maxWidth: 100,
            },
        },
    },
}))

const Client = () => {
    const clients = [
        {
            image: Client1,
            link: "https://lesscss.org/",
        },
        {
            image: Client2,
            link: 'https://www.adobe.com/',
        },
        {
            image: Client3,
            link: 'https://github.com/',
        },
        {
            image: Client4,
            link: 'https://open.spotify.com/',
        },
        {
            image: Client5,
            link: 'https://elements.envato.com/',
        },
        {
            image: Client6,
            link: 'https://wordpress.com/',
        },
        {
            image: Client7,
            link: 'https://jquery.com/',
        },
    ]
  return (
    <ClientWrapper>
          <PSubHead title='Clients' />
          <PSwiper
              spaceBetween={10}
              navigation={{
                        nextEl: '.clientNext',
                        prevEl: '.clientPrev',
              }} modules={[Navigation]}
              breakpoints={{
                    900:{
                        slidesPerView: 5,
                    },
                    600:{
                        slidesPerView: 4,
                    },
                    485:{
                        slidesPerView: 3,
                    },
                    0:{
                        slidesPerView: 2,
                    },
                }}
          >
              <PNavigation prevClass="clientPrev" nextClass="clientNext" color={(theme) => theme.palette.secondary.main200} />
              {
                  clients?.map((client,clientIndex) => {
                  return(
              <SwiperSlide key={clientIndex}>
                  <PLink to={client?.link}>
                      <img src={client?.image} alt={`${clientIndex + 1}`} />
                  </PLink>
              </SwiperSlide>
                  )
                  })
              }
          </PSwiper>
    </ClientWrapper>
  )
}

export default Client
