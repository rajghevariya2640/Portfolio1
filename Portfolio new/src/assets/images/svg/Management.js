import styled from '@emotion/styled'
import React from 'react'

const ManagementMain = styled('svg')(({ theme }) => ({
  fill: theme.palette.icon.main100
}))

const Management = ({color}) => {
  return (
    <ManagementMain
      height='42px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 490 490'>
      <g>
        <g>
          <g>
            <path d='M418.246,71.754C371.975,25.482,310.448,0,245,0S118.025,25.482,71.754,71.754C25.483,118.025,0,179.552,0,245
                    				s25.483,126.975,71.754,173.246C118.025,464.518,179.552,490,245,490s126.974-25.483,173.246-71.754
                    				C464.518,371.975,490,310.448,490,245S464.517,118.026,418.246,71.754z M404.104,404.104C361.61,446.598,305.105,470,245,470
                    				c-60.106,0-116.61-23.402-159.104-65.896C43.402,361.61,20,305.105,20,245S43.402,128.39,85.896,85.896S184.894,20,245,20
                    				c60.105,0,116.61,23.402,159.104,65.896S470,184.895,470,245C470,305.105,446.598,361.61,404.104,404.104z' />
            <path d='M245,40c-28.989,0-57.003,5.922-83.264,17.601c-25.381,11.288-47.876,27.367-66.855,47.785
                    				C59.491,143.397,40,192.98,40,245c0,53.442,20.427,103.964,57.493,142.232c18.884,19.63,41.084,35.069,65.984,45.889
                    				C189.253,444.321,216.681,450,245,450c54.775,0,106.261-21.318,144.972-60.028C428.682,351.261,450,299.775,450,245
                    				C450,131.963,358.037,40,245,40z M382.708,368.566l-35.637-35.637l-14.143,14.143l35.637,35.637
                    				c-31.516,28.345-71.212,44.781-113.565,47.02V380h-20v49.732c-43.625-2.296-84.226-19.591-116.109-49.477l33.181-33.185
                    				l-14.143-14.141l-32.91,32.914C78.094,334.836,62.46,296.112,60.274,255H110v-20H60.277
                    				c2.128-39.815,16.932-77.588,42.393-108.187l35.258,35.258l14.143-14.143l-35.807-35.807
                    				c15.641-15.194,33.63-27.367,53.599-36.247c20.655-9.186,42.522-14.421,65.136-15.61V110h20V60.273
                    				c44.742,2.395,85.306,20.766,116.094,49.491l-38.165,38.165l14.143,14.143l37.904-37.904
                    				c26.002,30.081,42.491,68.598,44.752,110.833H380v20h49.729C427.49,297.354,411.054,337.05,382.708,368.566z' />
            <path d='M345,214.999h-25.824c-0.166-0.414-0.334-0.824-0.505-1.231l18.298-18.297c1.875-1.875,2.929-4.419,2.929-7.071
                    				c0-2.652-1.054-5.195-2.929-7.071l-28.301-28.301c-1.876-1.875-4.419-2.929-7.071-2.929c-2.652,0-5.196,1.054-7.071,2.929
                    				l-18.297,18.298c-0.407-0.171-0.817-0.339-1.231-0.505V145c0-5.522-4.478-10-10-10h-40c-5.523,0-10,4.478-10,10v25.821
                    				c-0.413,0.165-0.824,0.334-1.231,0.505l-18.297-18.298c-1.875-1.875-4.419-2.929-7.071-2.929c-2.652,0-5.196,1.054-7.071,2.929
                    				l-28.3,28.301c-3.905,3.906-3.905,10.238,0,14.143l18.298,18.297c-0.171,0.408-0.339,0.818-0.505,1.231H145
                    				c-5.523,0-10,4.478-10,10v40c0,5.522,4.477,10,10,10h25.823c0.165,0.413,0.334,0.823,0.505,1.231l-18.298,18.297
                    				c-1.878,1.878-2.931,4.425-2.929,7.08c0.002,2.655,1.06,5.2,2.941,7.075l28.3,28.2c3.9,3.887,10.211,3.888,14.114,0.002
                    				l18.314-18.234c0.41,0.175,0.821,0.346,1.23,0.513V345c0,5.522,4.477,10,10,10h40c5.522,0,10-4.478,10.001-10v-25.823
                    				c0.414-0.166,0.824-0.334,1.231-0.505l18.297,18.298c1.876,1.875,4.419,2.929,7.071,2.929c0.003,0,0.006,0,0.009,0
                    				c2.655-0.002,5.2-1.06,7.075-2.941l28.2-28.301c3.887-3.901,3.889-10.212,0.002-14.114l-18.219-18.298
                    				c0.174-0.412,0.344-0.827,0.512-1.246H345c5.522,0,10-4.478,10-10v-40C355,219.477,350.522,214.999,345,214.999z M335,255.002
                    				h-22.901c-4.401,0-8.286,2.878-9.567,7.089c-1.28,4.209-2.862,8.047-4.703,11.406c-2.13,3.889-1.445,8.717,1.685,11.86
                    				l16.172,16.241l-14.099,14.148l-16.216-16.217c-3.142-3.141-7.979-3.833-11.876-1.699c-3.359,1.841-7.197,3.423-11.406,4.703
                    				c-4.211,1.281-7.089,5.166-7.089,9.567V335h-19.999v-22.9c0-4.424-2.906-8.322-7.146-9.584
                    				c-3.742-1.114-7.508-2.675-11.513-4.774c-3.867-2.027-8.603-1.309-11.696,1.772l-16.242,16.172l-14.148-14.099l16.216-16.216
                    				c3.14-3.142,3.833-7.978,1.7-11.874c-1.842-3.362-3.424-7.2-4.705-11.409c-1.282-4.21-5.166-7.088-9.567-7.088H155v-20h22.899
                    				c4.401,0,8.285-2.878,9.567-7.088c1.281-4.209,2.864-8.047,4.705-11.409c2.133-3.896,1.441-8.732-1.7-11.874L174.242,188.4
                    				l14.158-14.158l16.229,16.229c3.142,3.141,7.98,3.833,11.876,1.699c3.359-1.841,7.197-3.423,11.406-4.703
                    				c4.211-1.281,7.089-5.166,7.089-9.567V155h20v22.9c0,4.401,2.878,8.286,7.089,9.567c4.209,1.28,8.047,2.862,11.406,4.703
                    				c3.897,2.134,8.734,1.443,11.876-1.699l16.229-16.229l14.158,14.16l-16.229,16.229c-3.141,3.142-3.834,7.98-1.699,11.876
                    				c1.841,3.359,3.423,7.197,4.703,11.406c1.281,4.211,5.166,7.089,9.567,7.089H335V255.002z' />
            <path d='M245,210c-19.299,0-35,15.701-35,35s15.701,35,35,35s35-15.701,35-35S264.299,210,245,210z M245,260
                    				c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S253.271,260,245,260z' />
          </g>
        </g>
      </g>
    </ManagementMain>
  )
}

export default Management
