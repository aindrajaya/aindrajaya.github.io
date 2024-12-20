import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import LazyLoad from "react-lazyload";

export const Title = ({children}) => (
  <Box>
    <Link as={NextLink} href="/works">
      Works
    </Link>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({src, alt}) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} mt={8}/>
)

export const YoutubeVideo = ({videoId}) => {
  return (
    <LazyLoad>
      <iframe
        width={560}
        height={315}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </LazyLoad>
  )
}

export const VideoPlayer = ({ src, alt }) => (
  <LazyLoad>
    <Box>
      <video src={src} controls alt={alt} />
    </Box>
  </LazyLoad>
);

export const Meta = ({children}) => {
  const color = useColorModeValue('yellow', 'green')
  return (
    <Badge colorScheme={color} mr={2}>
      {children}
    </Badge>
  )
}