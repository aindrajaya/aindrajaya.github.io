import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { ReactNode } from 'react';



const Logo = () => {
  const color = useColorModeValue('#efe6db', 'white')
  return (
    <svg width="35" height="34" viewBox="0 0 35 34" fill={color} xmlns="http://www.w3.org/2000/svg">
      <rect width="35" height="34" rx="5" fill={color}/>
      <path d="M15.4705 1.19129C12.1744 1.72249 9.19156 3.62934 7.36643 6.38065C6.72627 7.33407 6.03164 8.85955 5.73199 9.90832C5.43234 10.9843 5.30976 14.0217 5.51406 15.2066C5.69113 16.2282 6.45387 18.4483 6.60369 18.3666C6.64455 18.3257 7.70694 16.0102 8.93277 13.1908L11.1801 8.08319L12.692 8.06957H14.2038L17.7179 16.1328C19.652 20.5731 21.2864 24.2642 21.3409 24.3323C21.4907 24.4957 23.3567 23.5832 24.3782 22.8613C26.8435 21.0906 28.4916 18.5709 29.159 15.5063C29.4586 14.1851 29.3769 11.1886 29.0228 9.90832C28.5325 8.16491 27.4564 6.24444 26.2034 4.85517C25.5905 4.18777 24.3374 3.16624 24.1331 3.16624C24.0922 3.16624 24.0514 6.62581 24.0514 10.8617V18.5572H22.4169H20.7825V10.0445V1.54542L20.2785 1.40922C19.5022 1.20491 17.9358 0.986989 17.2412 1.00061C16.9007 1.01423 16.1107 1.09595 15.4705 1.19129Z" fill="black"/>
      <path d="M11.0711 14.7844C10.2675 16.6776 9.61377 18.2712 9.61377 18.3257C9.61377 18.3802 10.9894 18.421 12.6647 18.421H15.7157L14.2038 14.8797C13.373 12.932 12.6647 11.3385 12.6239 11.3385C12.5694 11.3385 11.8747 12.8912 11.0711 14.7844Z" fill="black"/>
      <path d="M8.60587 21.3086C9.28689 22.2075 11.2891 23.5832 12.9235 24.2642C14.7214 24.9997 17.2548 25.2993 19.2297 24.9997L19.8971 24.8907L19.148 24.8226L18.3989 24.7545L17.6225 22.9158L16.8462 21.077L12.6103 21.0361L8.37433 21.0089L8.60587 21.3086Z" fill="black"/>
      <path d="M3.14411 27.7101C3.04877 27.9553 2.74912 28.6635 2.47671 29.2765L2 30.4069H2.39499C2.6674 30.4069 2.81722 30.3252 2.8717 30.1345C2.9398 29.903 3.07601 29.8621 3.68892 29.8621C4.30184 29.8621 4.43804 29.903 4.50614 30.1345C4.56063 30.3252 4.71045 30.4069 5.0101 30.4069C5.22802 30.4069 5.39147 30.3525 5.36423 30.298C4.17926 27.356 4.12477 27.2743 3.72978 27.2743C3.41652 27.2743 3.29393 27.3696 3.14411 27.7101ZM4.08391 29.2084C4.00219 29.3309 3.43014 29.3582 3.32117 29.2356C3.28031 29.1947 3.33479 28.9087 3.45738 28.6091L3.6753 28.0506L3.90685 28.5818C4.04305 28.8678 4.11115 29.1539 4.08391 29.2084Z" fill="black"/>
      <path d="M5.80005 28.8406V30.4069H6.14056H6.48107V28.8406V27.2743H6.14056H5.80005V28.8406Z" fill="black"/>
      <path d="M7.16211 28.8406V30.4069H7.50262C7.81589 30.4069 7.82951 30.3661 7.87037 29.4263L7.91123 28.4456L8.63311 29.4263C9.19154 30.1754 9.45033 30.4069 9.69549 30.4069C10.0224 30.4069 10.0224 30.4069 10.0224 28.8406V27.2743H9.68187C9.36861 27.2743 9.35499 27.3151 9.31412 28.2277L9.27326 29.1947L8.55139 28.2277C8.00657 27.4922 7.7614 27.2743 7.50262 27.2743H7.16211V28.8406Z" fill="black"/>
      <path d="M10.7034 28.8542V30.4478L11.7385 30.3797C12.6647 30.3116 12.8145 30.2707 13.1959 29.8894C13.5364 29.5489 13.6045 29.3582 13.6045 28.8542C13.6045 27.8191 12.869 27.2743 11.4525 27.2743H10.7034V28.8542ZM12.6647 28.2549C13.155 28.9496 12.76 29.7395 11.902 29.7668L11.4525 29.794L11.4116 28.8678L11.3708 27.9553H11.9156C12.3242 27.9553 12.5149 28.037 12.6647 28.2549Z" fill="black"/>
      <path d="M14.1085 28.827V30.4069H14.5171C14.8985 30.4069 14.9257 30.3661 14.9257 29.9302C14.9257 29.5352 14.9802 29.4535 15.1981 29.4535C15.3752 29.4535 15.5795 29.6306 15.7566 29.9302C15.9881 30.3116 16.1243 30.4069 16.4512 30.4069H16.8598L16.5602 29.9302C16.2605 29.4535 16.2605 29.4263 16.5057 29.1675C16.8462 28.7861 16.819 28.0234 16.4512 27.642C16.2061 27.4105 15.9609 27.3424 15.13 27.3015L14.1085 27.247V28.827ZM15.7974 27.9961C15.9473 28.1051 16.029 28.3094 15.9881 28.5137C15.9609 28.7861 15.8655 28.8542 15.4433 28.8815L14.9257 28.9223V28.3775C14.9257 27.8872 14.9666 27.8191 15.239 27.8191C15.4161 27.8191 15.6612 27.9008 15.7974 27.9961Z" fill="black"/>
      <path d="M17.6907 28.8406L16.996 30.4069H17.3774C17.6498 30.4069 17.7996 30.3252 17.8541 30.1345C17.9222 29.903 18.0584 29.8621 18.6986 29.8621C19.3251 29.8621 19.4613 29.903 19.5158 30.1345C19.5703 30.3252 19.7065 30.4069 19.9789 30.4069C20.1968 30.4069 20.3739 30.3797 20.3739 30.3388C20.3739 30.298 20.0879 29.5897 19.7473 28.7725C19.1617 27.3832 19.0936 27.2743 18.7531 27.2743C18.3989 27.2743 18.3172 27.3968 17.6907 28.8406ZM18.9437 28.5818C19.2298 29.2628 19.2025 29.3173 18.7394 29.3173C18.5215 29.3173 18.3308 29.2492 18.3308 29.1539C18.3308 28.9768 18.6305 28.0915 18.6986 28.0915C18.7122 28.0915 18.8348 28.3094 18.9437 28.5818Z" fill="black"/>
      <path d="M20.7825 27.6148C20.7825 27.9144 20.8369 27.9553 21.2592 27.9553H21.7359V28.8406C21.7359 29.6714 21.7223 29.7259 21.4226 29.7259C21.2455 29.7259 21.0412 29.6578 20.9731 29.5897C20.8642 29.4808 20.7688 29.508 20.6326 29.6714C20.4692 29.8621 20.4964 29.9302 20.7688 30.1482C21.2047 30.5023 21.8857 30.475 22.2535 30.0937C22.5122 29.8213 22.5531 29.617 22.5531 28.5273V27.2743H21.6678C20.8097 27.2743 20.7825 27.2879 20.7825 27.6148Z" fill="black"/>
      <path d="M23.5474 28.8406L22.8528 30.4069H23.2342C23.5066 30.4069 23.6564 30.3252 23.7109 30.1345C23.779 29.903 23.9152 29.8621 24.5553 29.8621C25.1819 29.8621 25.3181 29.903 25.3725 30.1345C25.427 30.3252 25.5632 30.4069 25.8356 30.4069C26.0536 30.4069 26.2306 30.3797 26.2306 30.3388C26.2306 30.298 25.9446 29.5897 25.6041 28.7725C25.0184 27.3832 24.9503 27.2743 24.6098 27.2743C24.2557 27.2743 24.174 27.3968 23.5474 28.8406ZM24.8005 28.5818C25.0865 29.2628 25.0593 29.3173 24.5962 29.3173C24.3783 29.3173 24.1876 29.2492 24.1876 29.1539C24.1876 28.9768 24.4872 28.0915 24.5553 28.0915C24.5689 28.0915 24.6915 28.3094 24.8005 28.5818Z" fill="black"/>
      <path d="M26.3668 27.3424C26.3668 27.3832 26.612 27.8736 26.9116 28.4184C27.2658 29.0585 27.4564 29.5761 27.4564 29.903C27.4564 30.3525 27.4973 30.4069 27.797 30.4069C28.083 30.4069 28.1375 30.3388 28.1375 29.9983C28.1375 29.7668 28.3826 29.0994 28.6823 28.5001C28.9819 27.9008 29.2271 27.3832 29.2271 27.3424C29.2271 27.3015 29.0773 27.2743 28.9138 27.2743C28.6687 27.2743 28.5052 27.4377 28.2056 27.9689L27.8242 28.6635L27.4292 27.9689C27.1159 27.4377 26.9525 27.2743 26.6937 27.2743C26.5166 27.2743 26.3668 27.3015 26.3668 27.3424Z" fill="black"/>
      <path d="M30.6027 27.5331C30.4393 27.8191 29.3633 30.298 29.3633 30.3661C29.3633 30.3933 29.5403 30.4069 29.7583 30.4069C30.0307 30.4069 30.1669 30.3252 30.2214 30.1345C30.2758 29.903 30.412 29.8621 31.0386 29.8621C31.6787 29.8621 31.8149 29.903 31.883 30.1345C31.9375 30.3252 32.0874 30.4069 32.3598 30.4069H32.7547L32.1963 29.0721C31.8967 28.3503 31.597 27.642 31.5289 27.5058C31.3519 27.1925 30.7662 27.2062 30.6027 27.5331ZM31.4063 29.0721C31.4063 29.2492 31.2974 29.3173 30.9977 29.3173C30.521 29.3173 30.5074 29.2628 30.807 28.5546L31.0386 28.0234L31.2156 28.432C31.311 28.6499 31.3927 28.9496 31.4063 29.0721Z" fill="black"/>
      <path d="M13.8361 32.3138C13.8361 32.9676 13.8497 32.9948 14.2174 32.9948C14.6397 32.9948 15.0619 32.6271 15.0619 32.2729C15.0619 32.0005 14.5443 31.6328 14.1493 31.6328C13.8633 31.6328 13.8361 31.7009 13.8361 32.3138ZM14.7078 31.9869C14.9665 32.2321 14.9665 32.2593 14.7895 32.5998C14.7078 32.7496 14.5035 32.8586 14.3128 32.8586C14.0131 32.8586 13.9723 32.8041 13.9723 32.3138C13.9723 31.8643 14.0131 31.769 14.231 31.769C14.3809 31.769 14.5988 31.8643 14.7078 31.9869Z" fill="black"/>
      <path d="M16.1516 32.3138V32.9948L16.601 32.9812C17.0096 32.954 17.0096 32.954 16.6691 32.8995C16.3286 32.845 16.2878 32.7905 16.2878 32.3138C16.2878 31.8371 16.3286 31.7826 16.6691 31.7281C17.0096 31.6736 17.0096 31.6736 16.601 31.6464L16.1516 31.6328V32.3138Z" fill="black"/>
      <path d="M18.1401 32.1367C18.2627 32.4228 18.3853 32.736 18.4261 32.8177C18.5487 33.1174 18.6577 33.0221 18.9165 32.4091C19.2433 31.6055 19.2025 31.4285 18.862 32.1776L18.5759 32.7905L18.3172 32.2048C18.181 31.8916 18.0311 31.6328 17.9903 31.6328C17.9494 31.6328 18.0175 31.8643 18.1401 32.1367Z" fill="black"/>
      <path d="M20.2376 31.8371C20.0742 32.0414 20.1559 32.3138 20.4011 32.3138C20.4964 32.3138 20.4828 32.2457 20.3738 32.1095C20.2376 31.946 20.2512 31.8916 20.4283 31.8235C20.5509 31.7826 20.7416 31.7826 20.8642 31.8235C20.9731 31.8643 21.0276 31.8507 20.9867 31.769C20.8642 31.5647 20.4283 31.6055 20.2376 31.8371Z" fill="black"/>
      <path d="M20.7824 32.4091C20.8505 32.4364 20.9186 32.5726 20.9186 32.6815C20.9186 32.8314 20.8097 32.8722 20.51 32.8314C20.2513 32.7905 20.1423 32.8177 20.224 32.8995C20.4419 33.1174 20.9868 32.9539 20.9868 32.6679C20.9868 32.5181 20.905 32.3955 20.8097 32.3683C20.7143 32.3547 20.7007 32.3683 20.7824 32.4091Z" fill="black"/>
    </svg>
  );
};

export default function Footer() {
  const color = useColorModeValue('#efe6db', '#202023')
  return (
    <Box
      bg={color}
      color={useColorModeValue('gray.700', 'gray.200')}
      >
        
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('black.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('black.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Aindrajaya. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}