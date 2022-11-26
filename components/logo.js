import Link from "next/link";
import {Text, useColorModeValue} from "@chakra-ui/react";
import Iconsai from "./icons/iconsai";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight:bold;
  font-size: 18px;
  display: inline-flex;
  align-items:center;
  height:30px;
  line-height:20spx;
  padding:10px 10px 0px 10px;
  
  > svg {
    transition: 200ms ease ;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Iconsai />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c, sans-serif'
          fontWeight="bold"
          ml={3}
        >
          A Indrajaya
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo;