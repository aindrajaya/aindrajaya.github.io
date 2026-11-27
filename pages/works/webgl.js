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
  MediaFigure,
  ProcessFlow,
  VideoFacade,
  focusRing,
  useCaseStudyColors
} from '../../components/case-study'

const SITE_URL = 'https://aindrajaya.my.id'
const PAGE_URL = `${SITE_URL}/works/webgl`
const TITLE = 'High-Performance WebGL Simulation Dashboard'
const DESCRIPTION =
  'Case study: re-architecting a Three.js and Matter.js dashboard of ~7,000 simulated entities for a stable 60 FPS on desktop and mobile, with a persistent physics worker, SharedArrayBuffer transport and a Web3 wallet bridge.'

// Set to the Loom or unlisted YouTube link. Empty string = "coming soon" slot.
const VIDEO_URL = '' // TODO(owner): add VIDEO_URL
const LIVE_URL = 'https://dashboard.oddsprings.io/'

/*
 * Screenshots live in public/work/webgl/. Each must be 16:9 (e.g. 1600x900).
 * Drop the file in, then flip `ready` to true. Until then a same-size
 * placeholder is shown, so nothing shifts. Keep file names/extensions in sync.
 */
const IMG = '/work/webgl'
const media = {
  overview: {
    src: `${IMG}/01-overview.webp`,
    ready: true,
    alt: 'Simulation dashboard on a dark grid: purple cell-like entities, some loose and some packed into large clusters, under a green HUD with zoom controls and a stats panel.',
    caption: 'The live dashboard: loose entities and bonded clusters, with the HUD in the client\'s custom typeface.'
  },
  bonds: {
    src: `${IMG}/02-bonds.webp`,
    ready: true,
    alt: 'Zoomed-in view of one cluster: hundreds of glowing purple entities packed together, with fine bond lines between neighbours.',
    caption: 'Zoomed in on a cluster: entities held together by bonds, rendered from one instanced mesh.'
  },
  mobile: {
    src: `${IMG}/03-mobile.webp`,
    ready: true,
    alt: 'The same dashboard on a phone-sized screen, showing entities and clusters with a compact header and menu.',
    caption: 'Mobile: the full simulation renders with a compact, touch-friendly layout.'
  }
}
// Poster for the video facade.
const VIDEO_POSTER = media.overview

const META = [
  ['Client', 'Private client (Upwork)'],
  ['Year', '2026'],
  ['Role', 'Frontend / WebGL engineer'],
  ['Stack', 'Next.js 15, React 19, Three.js, Matter.js, Web Workers']
]

const STEPS = [
  'Performance audit',
  'Proof-of-concept sprint',
  'Engine refactor',
  'Mobile & Web3 polish'
]

const RESULTS = [
  ['~7,000', 'entities simulated and rendered'],
  ['60 FPS', 'stable on desktop and mobile'],
  ['~100 ms', 'per-message serialization removed'],
  ['5.0 / 5', 'client rating']
]

const PROBLEMS = [
  [
    'Physics rebuilt from scratch',
    'The Matter.js engine was created, run for 15 steps and destroyed on every calculation. With ~7,000 bodies that meant 1–2 s of work per run and heavy garbage-collection churn.'
  ],
  [
    'Costly worker transport',
    'Physics already ran in a Web Worker, but every message serialized Map → Array → Map, adding about 100 ms of overhead, and a long calculation could not be cancelled when new data arrived.'
  ],
  [
    'Wrong first frame',
    'The UI could render before the full data set arrived, so the first frames showed collisions, missing connections, ordering errors and cells jumping into place.'
  ],
  [
    'Broken on mobile',
    'Frustum culling was disabled on the instanced meshes, so the GPU processed off-screen geometry; entities did not render properly on phones and touch gestures and scrolling misbehaved.'
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

const Card = ({ as = 'li', title, children, ...rest }) => {
  const { card, border, muted } = useCaseStudyColors()
  return (
    <Box
      as={as}
      bg={card}
      border="1px solid"
      borderColor={border}
      borderRadius="lg"
      p={4}
      {...rest}
    >
      <Heading as="h3" fontSize={title.length > 30 ? 18 : 16} mb={2}>
        {title}
      </Heading>
      <Box
        color={muted}
        fontSize="sm"
        sx={{ p: { mb: 2 }, 'p:last-child': { mb: 0 } }}
      >
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

/* ------------------------------------------------------------------ */
/* Architecture diagram (inline SVG, theme-aware)                      */
/* ------------------------------------------------------------------ */

const EngineDiagram = () => {
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

  const Arrow = ({ x1, y1, x2, y2, dashed }) => (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth="1.5"
      strokeDasharray={dashed ? '4 3' : undefined}
      markerEnd="url(#webgl-arrowhead)"
    />
  )

  return (
    <Box
      as="svg"
      viewBox="0 0 410 470"
      role="img"
      aria-labelledby="webgl-arch-title webgl-arch-desc"
      w="full"
      maxW="460px"
      h="auto"
      mx="auto"
      display="block"
      fontFamily="inherit"
    >
      <title id="webgl-arch-title">Simulation engine architecture</title>
      <desc id="webgl-arch-desc">
        The backend data stream feeds a persistent Matter.js engine in a Web
        Worker, which uses a spatial hash grid for collisions. The worker writes
        positions into a SharedArrayBuffer. On the main thread, the Three.js
        render loop reads that buffer into instanced meshes once a full frame of
        data is ready. The canvas runs cross-origin isolated; a separate,
        non-isolated wallet bridge route handles Web3 wallet connections and
        hands the session back through a cookie.
      </desc>
      <defs>
        <marker
          id="webgl-arrowhead"
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
        h={52}
        title="Backend data stream"
        subtitle="~7,000 entities, 15 ms updates"
      />
      <Arrow x1={205} y1={62} x2={205} y2={90} />

      <Node
        x={55}
        y={92}
        w={300}
        h={64}
        title="Web Worker"
        subtitle="Persistent Matter.js engine + spatial hash grid"
        bg={accent}
      />
      <Arrow x1={205} y1={156} x2={205} y2={184} />

      <Node
        x={55}
        y={186}
        w={300}
        h={52}
        title="SharedArrayBuffer"
        subtitle="Zero-copy positions, write-locked"
        bg={accent}
      />
      <Arrow x1={205} y1={238} x2={205} y2={266} />

      <rect
        x="6"
        y="268"
        width="398"
        height="104"
        rx="10"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <text x="205" y="286" textAnchor="middle" fontSize="12" fontWeight="700" fill={sub}>
        Main thread (cross-origin isolated)
      </text>
      <Node
        x={14}
        y={296}
        w={186}
        h={64}
        title="Three.js loop"
        subtitle="Renders when frame is complete"
      />
      <Node x={210} y={296} w={186} h={64} title="InstancedMesh" subtitle="Culling on, one draw call" />

      <Arrow x1={107} y1={372} x2={107} y2={404} dashed />
      <Node
        x={14}
        y={406}
        w={186}
        h={54}
        title="/wallet-bridge"
        subtitle="Non-isolated route"
      />
      <Arrow x1={200} y1={433} x2={238} y2={433} />
      <Node x={240} y={406} w={156} h={54} title="Wallet" subtitle="Phantom, Brave" />
    </Box>
  )
}

const WebGL = () => {
  const { muted, card, border, link, focus } = useCaseStudyColors()
  const noteBorder = useColorModeValue('blackAlpha.400', 'whiteAlpha.400')
  const ctaScheme = useColorModeValue('yellow', 'green')
  // Until the overview screenshot exists, fall back to the layout's default og:image.
  const ogImage = media.overview.ready ? `${SITE_URL}${media.overview.src}` : null

  return (
    <Layout title={TITLE} canonical={PAGE_URL}>
      <Head>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:description" content={DESCRIPTION} key="og:description" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:url" content={PAGE_URL} />
        {ogImage && <meta property="og:image" content={ogImage} key="og:image" />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={DESCRIPTION} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
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
            WebGL
          </Text>
        </Box>

        {/* Hero */}
        <Heading as="h1" fontSize={{ base: 28, md: 36 }} lineHeight="1.2">
          {TITLE}
        </Heading>
        <Text mt={3} fontSize={{ base: 'md', md: 'lg' }} color={muted}>
          Re-architecting a physics-driven Three.js dashboard of ~7,000
          simulated entities so it loads without stalling, renders correctly
          from the first frame, and holds 60 FPS on desktop and mobile.
        </Text>
        <Text mt={3} fontSize="sm">
          <Link
            href={LIVE_URL}
            color={link}
            textDecoration="underline"
            isExternal
            _focusVisible={focusRing(focus)}
          >
            View the live dashboard
          </Link>{' '}
          <Text as="span" color={muted}>
            (it takes around 10 seconds to load the full simulation)
          </Text>
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
                {/* VERIFY: year (2026) */}
                {v}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <MediaFigure media={media.overview} priority />

        <SimpleGrid
          as="dl"
          columns={{ base: 2, md: 4 }}
          spacing={4}
          mt={8}
        >
          {RESULTS.map(([value, label]) => (
            <Box
              key={label}
              bg={card}
              border="1px solid"
              borderColor={border}
              borderRadius="lg"
              p={4}
              display="flex"
              flexDirection="column-reverse"
            >
              <Text as="dt" fontSize="sm" color={muted}>
                {label}
              </Text>
              <Text as="dd" m={0} fontSize={{ base: 22, md: 24 }} fontWeight="bold">
                {value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Section id="problem" title="The problem">
          <Text mb={4}>
            The client&apos;s dashboard, built with Next.js 15, React 19 and
            vanilla Three.js, already reached up to ~180 FPS on desktop once it
            had loaded. Getting there was the issue: a slow, janky start,
            incorrect first frames and a mobile experience that was largely
            broken. An audit traced it to four root causes.
          </Text>
          <SimpleGrid
            as="ul"
            listStyleType="none"
            m={0}
            p={0}
            columns={{ base: 1, sm: 2 }}
            spacing={4}
          >
            {PROBLEMS.map(([title, body]) => (
              <Card key={title} title={title}>
                <p>{body}</p>
              </Card>
            ))}
          </SimpleGrid>
        </Section>

        <Section id="role" title="How I worked">
          <ProcessFlow steps={STEPS} />
          <Text mt={5} color={muted}>
            Rather than patching symptoms in the UI, I started with a scoped
            performance sprint to prove that a zero-copy transport and a
            stateful worker would remove the start-up lag, before committing to
            the full refactor. Race conditions and rendering traps were
            documented in short Loom videos, so the client could see why the
            main thread was rendering too early. When mobile wallet connections
            failed, I traced the conflict to the security headers and set out a
            fix before building it.
          </Text>
        </Section>

        <Section id="decisions" title="Key technical decisions">
          <Box as="ul" listStyleType="none" m={0} p={0} display="grid" gap={4}>
            <Card title="A persistent physics engine instead of a rebuild per run">
              <p>
                <Label>What: </Label>the Matter.js engine now lives for the
                whole session inside the worker and is updated incrementally,
                with a spatial hash grid for collision checks instead of
                O(N²) comparisons.
              </p>
              <p>
                <Label>Why: </Label>no more creating and clearing 7,000 bodies
                on every calculation, so the 1–2 s initialisation lag and the
                garbage-collection spikes are gone.
              </p>
            </Card>
            <Card title="Zero-copy transport with SharedArrayBuffer">
              <p>
                <Label>What: </Label>the worker writes entity positions straight
                into shared memory that the render loop reads, replacing the
                Map → Array → Map serialization on every message.
              </p>
              <p>
                <Label>Trade-off: </Label>SharedArrayBuffer requires the page to
                be cross-origin isolated (COOP/COEP headers), which later
                clashed with Web3 wallet pop-ups.
              </p>
            </Card>
            <Card title="Write-locks and a promise bridge between threads">
              <p>
                <Label>What: </Label>an atomic write-lock on the shared buffer
                plus a promise-based handshake, so the UI only renders once the
                full 7,000-entity frame has arrived.
              </p>
              <p>
                <Label>Why: </Label>this removed the race conditions behind
                black grids, missing connections and cells jumping on load, and
                keeps the visual state in step with the physics state.
              </p>
            </Card>
            <Card title="Organic layout from Gaussian repulsion">
              <p>
                <Label>What: </Label>the rigid, grid-like starting positions were
                replaced by Gaussian-random repulsion with feathered boundaries.
              </p>
              <p>
                <Label>Why: </Label>a natural &quot;petri dish&quot; look the
                client wanted, while keeping coordinates deterministic enough
                for the physics and bond rendering.
              </p>
            </Card>
            <Card title="A non-isolated wallet bridge for Web3">
              <p>
                <Label>What: </Label>a separate <code>/wallet-bridge</code> route
                runs without cross-origin isolation, completes the handshake
                with wallets such as Phantom and Brave, stores the session in a
                domain-wide cookie and sends the user back to the isolated 3D
                canvas.
              </p>
              <p>
                <Label>Why: </Label>the high-performance canvas keeps its
                SharedArrayBuffer, and wallet connections persist across
                subdomains, with loading states covering the canvas remount.
              </p>
            </Card>
          </Box>
        </Section>

        <Section id="architecture" title="Architecture">
          <EngineDiagram />
        </Section>

        <Section id="outcome" title="The outcome">
          <Box as="ul" pl={5} sx={{ li: { mb: 2 } }}>
            <li>
              A stable 60 FPS on mobile and desktop for ~7,000 active entities,
              running against a 15 ms backend data stream.
            </li>
            <li>
              Correct first frames: no collisions, missing connections or
              jumping cells on load.
            </li>
            <li>
              Mobile fixed: frustum culling restored, scaling issues resolved,
              and touch gestures and scrolling working.
            </li>
            <li>
              Bond rendering corrected so signals travel to the midpoint of a
              connection instead of passing through it, and the client&apos;s
              custom typography applied.
            </li>
            <li>
              Wallet connections that survive the cross-origin isolation the
              engine depends on.
            </li>
          </Box>
          {/* VERIFY: measured load time after the refactor, if you have it, would make a strong extra stat */}
        </Section>

        <Section id="screens" title="Screenshots">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <MediaFigure media={media.bonds} />
            <MediaFigure media={media.mobile} />
          </SimpleGrid>
        </Section>

        <Section id="video" title="Walkthrough">
          <VideoFacade
            url={VIDEO_URL}
            title="WebGL simulation dashboard walkthrough"
            poster={VIDEO_POSTER.src}
            posterReady={VIDEO_POSTER.ready}
            caption="Short walkthrough of the dashboard running at full entity count."
          />
        </Section>

        <Section id="feedback" title="Client feedback">
          <Box
            as="figure"
            m={0}
            bg={card}
            border="1px solid"
            borderColor={border}
            borderRadius="lg"
            p={5}
          >
            <Text as="blockquote" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
              &ldquo;Outstanding experience! Highly recommended!&rdquo;
            </Text>
            <Text as="figcaption" mt={3} fontSize="sm" color={muted}>
              Client review on Upwork, 5.0 / 5. Endorsed as Committed to
              Quality, Solution Oriented and Clear Communicator. The client
              went on to ask me to build the platform&apos;s main landing page.
            </Text>
          </Box>
        </Section>

        <Box
          as="aside"
          mt={12}
          pl={4}
          borderLeft="3px solid"
          borderColor={noteBorder}
        >
          <Text fontSize="sm" color={muted} fontStyle="italic">
            Source code is private (client project), but the dashboard itself
            is live; happy to walk through the code on a call. For a public example of the same stack, see my{' '}
            <Link
              href="https://3d-rendering-high-performance.vercel.app/"
              color={link}
              textDecoration="underline"
              isExternal
              _focusVisible={focusRing(focus)}
            >
              3D rendering performance demo
            </Link>
            .
          </Text>
        </Box>
        <Box mt={5}>
          <Button
            as="a"
            href="mailto:me@aindrajaya.my.id?subject=WebGL%20case%20study"
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

export default WebGL
