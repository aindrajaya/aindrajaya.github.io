import Head from 'next/head'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {
  ArchitectureDiagram,
  MediaFigure,
  ProcessFlow,
  VideoFacade,
  focusRing,
  useCaseStudyColors
} from '../../components/case-study'

const SITE_URL = 'https://aindrajaya.my.id'
const PAGE_URL = `${SITE_URL}/works/webgis`
const TITLE = 'WebGIS Asset Management for Port Land'
const DESCRIPTION =
  'Case study: a 2D/3D geospatial platform for managing, leasing and maintaining land plots at a fishing port in Jakarta. React, MapLibre GL, Potree, GeoServer and Docker.'

// Set to the Loom or unlisted YouTube link. Empty string = "coming soon" slot.
const VIDEO_URL = '' // TODO(owner): add VIDEO_URL

/*
 * Screenshots live in public/work/webgis/. Each must be 16:9 (e.g. 1600x900).
 * Drop the file in, then flip `ready` to true. Until then a same-size
 * placeholder is shown, so nothing shifts. Keep file names/extensions in sync.
 */
const IMG = '/work/webgis'
const media = {
  overview: {
    src: `${IMG}/01-overview.webp`,
    ready: false,
    alt: 'Two-dimensional map of the fishing port with land-parcel layers drawn over aerial imagery.',
    caption: '2D map of the port with the land-parcel layers switched on.'
  },
  view3d: {
    src: `${IMG}/02-3d-view.webp`,
    ready: false,
    alt: 'Three-dimensional point cloud view of the port with point size and brightness controls.',
    caption: '3D point cloud view, with point size and RGB brightness controls.'
  },
  detail: {
    src: `${IMG}/03-plot-detail.webp`,
    ready: false,
    alt: 'Layer manager panel listing map layers with visibility, opacity and approval status controls.',
    caption: 'Layer manager: visibility, opacity, ordering and approval status per layer.'
  },
  admin: {
    src: `${IMG}/04-admin.webp`,
    ready: false,
    alt: 'Administrator view of the platform for managing datasets and access.',
    caption: 'Admin experience, separate from the standard user view.'
  }
}
// Poster for the video facade (uses the 3D view; swap if you prefer another).
const VIDEO_POSTER = media.view3d

const META = [
  ['Client', 'PT Perikanan Indonesia (state-owned)'],
  ['Year', '2026'],
  ['Role', 'Lead engineer, requirements to infrastructure'],
  ['Stack', 'React, MapLibre GL, Potree, GeoServer, Docker']
]

const STEPS = [
  'Requirements',
  'UI design',
  'Frontend',
  'GeoServer / Docker infrastructure'
]

const FEATURES = [
  [
    '2D map',
    'MapLibre GL map with switchable basemaps and a legend.'
  ],
  [
    'Layer manager',
    'Latest orthoimagery, DTM, DSM, 0.5 m elevation contours, BPN land-use map and land-parcel map, each with opacity, ordering and visibility controls.'
  ],
  [
    'Dataset approval status',
    'Every layer shows its approval status, so users can tell QA-approved data from integration-only data.'
  ],
  [
    'Land-use comparison',
    'Compare land use across survey years (2024 vs 2026).'
  ],
  [
    '3D point cloud',
    'Potree point cloud view with point size and RGB brightness controls.'
  ],
  ['Tools', 'Measurement, print/export, and dataset/layer search.'],
  [
    'Role-based access',
    'Separate user and admin experiences.'
  ]
]

const Section = ({ id, title, children }) => (
  <Box as="section" aria-labelledby={id} mt={12}>
    <Heading as="h2" id={id} fontSize={22} mb={4}>
      {title}
    </Heading>
    {children}
  </Box>
)

const Decision = ({ title, children }) => {
  const { card, border, muted } = useCaseStudyColors()
  return (
    <Box
      as="li"
      bg={card}
      border="1px solid"
      borderColor={border}
      borderRadius="lg"
      p={4}
    >
      <Heading as="h3" fontSize={18} mb={2}>
        {title}
      </Heading>
      <Box color={muted} sx={{ p: { mb: 2 }, 'p:last-child': { mb: 0 } }}>
        {children}
      </Box>
    </Box>
  )
}

const Label = ({ children }) => {
  const color = useColorModeValue('gray.900', 'whiteAlpha.900')
  return (
    <Text as="strong" color={color}>
      {children}
    </Text>
  )
}

const WebGIS = () => {
  const { muted, card, border, link, focus } = useCaseStudyColors()
  const noteBorder = useColorModeValue('blackAlpha.400', 'whiteAlpha.400')
  const ctaScheme = useColorModeValue('yellow', 'green')
  const ogImage = `${SITE_URL}${media.overview.src}`

  return (
    <Layout title={TITLE} canonical={PAGE_URL}>
      <Head>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:description" content={DESCRIPTION} key="og:description" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={ogImage} key="og:image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <Container maxW="container.md" pb={8}>
        <Box as="nav" aria-label="Breadcrumb" fontSize="sm" mb={4}>
          <Link
            as={NextLink}
            href="/works"
            color={link}
            textDecoration="underline"
            _focusVisible={focusRing(focus)}
          >
            Works
          </Link>
          <Text as="span" aria-hidden="true">
            {' / '}
          </Text>
          <Text as="span" aria-current="page">
            WebGIS
          </Text>
        </Box>

        {/* Hero */}
        <Heading as="h1" fontSize={{ base: 28, md: 36 }} lineHeight="1.2">
          {TITLE}
        </Heading>
        <Text mt={3} fontSize={{ base: 'md', md: 'lg' }} color={muted}>
          A 2D/3D geospatial platform for managing, leasing and maintaining
          land plots at Muara Baru fishing port (PPSNZJ), Jakarta.
        </Text>

        <SimpleGrid
          as="dl"
          columns={{ base: 1, sm: 2 }}
          spacingX={6}
          spacingY={3}
          mt={6}
          mb={6}
          fontSize="sm"
        >
          {META.map(([k, v]) => (
            <Box key={k}>
              <Text as="dt" color={muted} fontWeight="bold">
                {k}
              </Text>
              <Text as="dd" m={0}>
                {/* VERIFY: year (2026) and role wording */}
                {v}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <MediaFigure media={media.overview} priority />

        <Section id="problem" title="The problem">
          <Text>
            The port&apos;s land is split into many plots that are leased,
            maintained and tracked over time. The source data (aerial imagery,
            elevation models, land-parcel and land-use maps, point clouds)
            lived in separate files and formats, so there was no single place
            to see a plot&apos;s context, compare land use across years, or
            check data quality before decisions were made.
          </Text>
        </Section>

        <Section id="role" title="My role">
          <ProcessFlow steps={STEPS} />
          <Text mt={5} color={muted}>
            Led delivery end to end with a small team, from stakeholder
            requirements to a self-hosted production stack.
            {/* VERIFY: team size and wording */}
          </Text>
        </Section>

        <Section id="features" title="What the platform does">
          <SimpleGrid
            as="ul"
            listStyleType="none"
            m={0}
            p={0}
            columns={{ base: 1, sm: 2 }}
            spacing={4}
          >
            {FEATURES.map(([title, body], i) => (
              <Box
                as="li"
                key={title}
                bg={card}
                border="1px solid"
                borderColor={border}
                borderRadius="lg"
                p={4}
                gridColumn={{
                  sm: i === FEATURES.length - 1 ? '1 / -1' : undefined
                }}
              >
                <Heading as="h3" fontSize={16} mb={1}>
                  {title}
                </Heading>
                <Text fontSize="sm" color={muted}>
                  {body}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        <Section id="screens" title="Screenshots">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <MediaFigure media={media.view3d} />
            <MediaFigure media={media.detail} />
          </SimpleGrid>
          <Box mt={6} maxW={{ md: 'calc(50% - 12px)' }}>
            <MediaFigure media={media.admin} />
          </Box>
        </Section>

        <Section id="decisions" title="Key technical decisions">
          <Box as="ul" listStyleType="none" m={0} p={0} display="grid" gap={4}>
            <Decision title="MapLibre GL for the 2D map">
              <p>
                <Label>Why: </Label>open-source, WebGL-rendered vector maps with
                no per-load licensing, and full styling control over layer
                ordering and opacity.
              </p>
              <p>
                <Label>Trade-off: </Label>more styling and plugin work done
                in-house.
              </p>
              {/* VERIFY */}
            </Decision>
            <Decision title="Potree for the 3D view, separate from the 2D map">
              <p>
                <Label>Why: </Label>point clouds are too large to load at once,
                so they are served as a level-of-detail octree and streamed as
                the camera moves. Keeping 3D in its own view stops heavy
                point-cloud data from slowing the everyday 2D workflow.
              </p>
              {/* VERIFY: conversion pipeline and format */}
              {/* VERIFY: no trade-off was supplied for this decision; add one (or drop the label) */}
            </Decision>
            <Decision title="GeoServer as the geodata backbone">
              <p>
                <Label>Why: </Label>raster and vector datasets are stored on the
                server and published through GeoServer as standard OGC services
                (WMS/WFS) to the frontend, all running in Docker on self-hosted
                storage. New survey datasets can be added without frontend
                redeploys.
              </p>
              {/* VERIFY: which services, e.g. WMS/WFS/WMTS (also the "OGC services" label in the diagram) */}
              {/* VERIFY: no trade-off was supplied for this decision; add one (or drop the label) */}
            </Decision>
          </Box>
        </Section>

        <Section id="architecture" title="Architecture">
          <ArchitectureDiagram />
        </Section>

        <Section id="video" title="Walkthrough">
          <VideoFacade
            url={VIDEO_URL}
            title="WebGIS platform walkthrough"
            poster={VIDEO_POSTER.src}
            posterReady={VIDEO_POSTER.ready}
            caption="Short walkthrough of the platform (screen recording with client data removed)."
          />
          {/* VERIFY: caption claim that client data is removed from the recording */}
        </Section>

        <Box
          as="aside"
          mt={12}
          pl={4}
          borderLeft="3px solid"
          borderColor={noteBorder}
        >
          <Text fontSize="sm" color={muted} fontStyle="italic">
            Source code is private (client project); happy to walk through it
            on a call.
          </Text>
        </Box>
        <Box mt={5}>
          {/* VERIFY: contact email; the site has no contact page, address taken from package.json author */}
          <Button
            as="a"
            href="mailto:me@aindrajaya.my.id?subject=WebGIS%20case%20study"
            colorScheme={ctaScheme}
            _focusVisible={focusRing(focus)}
          >
            Get in touch
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default WebGIS
