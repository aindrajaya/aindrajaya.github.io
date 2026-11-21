import { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

// Shared colour tokens for case-study pages (AA contrast on #f0e7db / #202023)
export const useCaseStudyColors = () => ({
  muted: useColorModeValue('gray.700', 'gray.300'),
  card: useColorModeValue('whiteAlpha.700', 'whiteAlpha.100'),
  border: useColorModeValue('blackAlpha.200', 'whiteAlpha.300'),
  link: useColorModeValue('#1a4fb8', '#ff8fd3'),
  focus: useColorModeValue('#1a4fb8', '#9ae6b4')
})

export const focusRing = color => ({
  outline: '3px solid',
  outlineColor: color,
  outlineOffset: '3px'
})

/* ------------------------------------------------------------------ */
/* Media                                                               */
/* ------------------------------------------------------------------ */

// All media slots share one aspect ratio, so placeholders and real images
// occupy identical space and nothing shifts when files arrive.
export const MEDIA_WIDTH = 1600
export const MEDIA_HEIGHT = 900

const Placeholder = ({ label }) => {
  const bg = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const color = useColorModeValue('gray.700', 'gray.300')
  return (
    <Flex
      align="center"
      justify="center"
      w="full"
      bg={bg}
      color={color}
      borderRadius="lg"
      fontSize="sm"
      textAlign="center"
      p={4}
      sx={{ aspectRatio: `${MEDIA_WIDTH} / ${MEDIA_HEIGHT}` }}
    >
      {label}
    </Flex>
  )
}

/**
 * A figure with an image (or a same-size placeholder until `ready` is true).
 * Expects a 16:9 file. `priority` marks the LCP image: eager + fetchpriority high.
 */
export const MediaFigure = ({ media, priority = false }) => {
  const { muted } = useCaseStudyColors()
  const { src, alt, caption, ready } = media
  return (
    <Box as="figure" m={0}>
      {ready ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          width={MEDIA_WIDTH}
          height={MEDIA_HEIGHT}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchpriority={priority ? 'high' : undefined}
          style={{ width: '100%', height: 'auto', borderRadius: 12 }}
        />
      ) : (
        <Placeholder label={`Screenshot coming soon: ${caption}`} />
      )}
      <Text as="figcaption" fontSize="sm" color={muted} mt={2}>
        {caption}
      </Text>
    </Box>
  )
}

const embedUrl = url => {
  try {
    const u = new URL(url)
    const host = u.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}?autoplay=1&rel=0`
    }
    if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      const id = u.searchParams.get('v') || u.pathname.split('/').pop()
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    }
    if (host === 'loom.com') {
      const id = u.pathname.split('/').pop()
      return `https://www.loom.com/embed/${id}?autoplay=1`
    }
  } catch (e) {
    // fall through: unsupported or empty URL
  }
  return null
}

/**
 * Click-to-load video. No third-party request is made until the button is
 * pressed. With no usable URL it renders a same-size placeholder instead.
 */
export const VideoFacade = ({ url, title, poster, posterReady, caption }) => {
  const [active, setActive] = useState(false)
  const { muted, focus } = useCaseStudyColors()
  const src = embedUrl(url)
  const box = { sx: { aspectRatio: `${MEDIA_WIDTH} / ${MEDIA_HEIGHT}` } }

  let content
  if (!src) {
    content = <Placeholder label="Video walkthrough coming soon" />
  } else if (active) {
    content = (
      <Box w="full" borderRadius="lg" overflow="hidden" {...box}>
        <iframe
          src={src}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ width: '100%', height: '100%', border: 0 }}
        />
      </Box>
    )
  } else {
    content = (
      <Box
        as="button"
        type="button"
        onClick={() => setActive(true)}
        aria-label={`Play video: ${title}`}
        position="relative"
        display="block"
        w="full"
        borderRadius="lg"
        overflow="hidden"
        bg="blackAlpha.700"
        _focusVisible={focusRing(focus)}
        {...box}
      >
        {posterReady && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt=""
            width={MEDIA_WIDTH}
            height={MEDIA_HEIGHT}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        <Flex
          position="absolute"
          inset={0}
          align="center"
          justify="center"
          aria-hidden="true"
        >
          <Flex
            w="72px"
            h="72px"
            borderRadius="full"
            bg="#ffffff"
            color="#202023"
            align="center"
            justify="center"
            boxShadow="lg"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </Flex>
        </Flex>
      </Box>
    )
  }

  return (
    <Box as="figure" m={0}>
      {content}
      <Text as="figcaption" fontSize="sm" color={muted} mt={2}>
        {caption}
      </Text>
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* Process flow                                                        */
/* ------------------------------------------------------------------ */

export const ProcessFlow = ({ steps }) => {
  const { card, border, muted } = useCaseStudyColors()
  return (
    <Flex
      as="ol"
      listStyleType="none"
      m={0}
      p={0}
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 6, md: 4 }}
    >
      {steps.map((step, i) => (
        <Box
          as="li"
          key={step}
          position="relative"
          flex="1"
          bg={card}
          border="1px solid"
          borderColor={border}
          borderRadius="lg"
          px={4}
          py={3}
        >
          <Text fontSize="xs" color={muted} fontWeight="bold">
            Step {i + 1}
          </Text>
          <Text fontWeight="bold">{step}</Text>
          {i < steps.length - 1 && (
            <Box
              aria-hidden="true"
              position="absolute"
              color={muted}
              lineHeight={1}
              fontSize="lg"
              bottom={{ base: '-1.35rem', md: 'auto' }}
              left={{ base: '50%', md: 'auto' }}
              right={{ md: '-1.15rem' }}
              top={{ md: '50%' }}
              transform={{
                base: 'translateX(-50%) rotate(90deg)',
                md: 'translateY(-50%)'
              }}
            >
              →
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  )
}

/* ------------------------------------------------------------------ */
/* Architecture diagram (inline SVG, theme-aware)                      */
/* ------------------------------------------------------------------ */

export const ArchitectureDiagram = () => {
  const stroke = useColorModeValue('#4a4a52', '#c8c8d0')
  const text = useColorModeValue('#1a1a1d', '#f2f2f4')
  const sub = useColorModeValue('#3a3a40', '#c8c8d0')
  const fill = useColorModeValue('#ffffffb3', '#2b2b30')
  const accent = useColorModeValue('#dff1ef', '#1f3d3b')

  const Node = ({ x, y, w, h, title, subtitle, bg = fill }) => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={bg}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <text
        x={x + w / 2}
        y={y + (subtitle ? h / 2 - 3 : h / 2 + 5)}
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill={text}
      >
        {title}
      </text>
      {subtitle && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 15}
          textAnchor="middle"
          fontSize="12"
          fill={sub}
        >
          {subtitle}
        </text>
      )}
    </g>
  )

  const Arrow = ({ x1, y1, x2, y2 }) => (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth="1.5"
      markerEnd="url(#arrowhead)"
    />
  )

  return (
    <Box
      as="svg"
      viewBox="0 0 410 460"
      role="img"
      aria-labelledby="arch-title arch-desc"
      w="full"
      maxW="460px"
      h="auto"
      mx="auto"
      display="block"
      fontFamily="inherit"
    >
      <title id="arch-title">WebGIS platform architecture</title>
      <desc id="arch-desc">
        Survey data (imagery, DTM and DSM, parcels, point clouds) goes to server
        storage. From there, GeoServer publishes OGC services to the MapLibre 2D
        map, and Potree octree files are streamed to the Potree 3D view. Both
        views are part of the React app, used by users and admins.
      </desc>
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
        </marker>
      </defs>

      <Node
        x={55}
        y={10}
        w={300}
        h={56}
        title="Survey data"
        subtitle="Imagery, DTM/DSM, parcels, point clouds"
      />
      <Arrow x1={205} y1={66} x2={205} y2={94} />
      <Node x={55} y={96} w={300} h={56} title="Server storage" subtitle="Raster, vector and point-cloud files" />

      <Arrow x1={107} y1={152} x2={107} y2={184} />
      <Arrow x1={303} y1={152} x2={303} y2={184} />
      <Node x={14} y={186} w={186} h={64} title="GeoServer" subtitle="OGC services" bg={accent} />
      <Node x={210} y={186} w={186} h={64} title="Potree octree files" subtitle="Level-of-detail tiles" bg={accent} />

      <Arrow x1={107} y1={250} x2={107} y2={282} />
      <Arrow x1={303} y1={250} x2={303} y2={282} />
      <rect
        x="6"
        y="284"
        width="398"
        height="88"
        rx="10"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <text x="205" y="302" textAnchor="middle" fontSize="12" fontWeight="700" fill={sub}>
        React app
      </text>
      <Node x={14} y={310} w={186} h={52} title="MapLibre 2D" />
      <Node x={210} y={310} w={186} h={52} title="Potree 3D" />

      <Arrow x1={205} y1={372} x2={205} y2={398} />
      <Node x={55} y={400} w={300} h={50} title="Users and admins" />
    </Box>
  )
}

