import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({children, href, title, thumbnail}) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image 
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        width={300}
        height={300}
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({children, id, title, thumbnail}) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursos="pointer"
    >
      <Image 
        src={thumbnail}
        alt={title}
        loading="eager"
        className="grid-item-thumbnail"
        placeholder="blur"
        width={280}
        height={170}
        blurDataURL="data:image/png;base64"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>    
)

export const GridItemStyle = () => (
  <Global 
    styles={`
      .grid-item-thumbnail{
        border-radius: 12px;
      }
    `}
  />
)