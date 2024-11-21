import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta, VideoPlayer } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="chainx">
    <Container>
      <Title>
        Chainx - Smart Contract Security Scanner <Badge>2024</Badge>
      </Title>
      <P>
        The ChainX Smart Contract Security Scanner was built using Node.js and Express to create a powerful API. This API allows for easy file uploads and processes those files with a robust vulnerability scanner. A database stores vulnerability patterns and potentially archives scan results for future analysis. The API is deployed on a cloud server with a dedicated domain name for easy accessibility.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://docs.chainx.id/">
            https://docs.chainx.id/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blockchain (Ethereum, Solidity), API, Express, Could Service , Node.js</span>
        </ListItem>
      </List>
      <VideoPlayer src="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1731082837/profile/portfolio/890387443404328960/znmsorv45yaft7o9c3og.mp4" alt="Video for ChainX Demo"/>
      <WorkImage src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/5e523eb3332175b7932b122a7154b1af?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQgd5s1tzXn3cAKfjrVvddkP6DINVXMcC2SqS/nQ6tRgIgKM7K6odAF7YH9%2BVZ7rx/Z/Rv%2BUOvUcmS%2BC7iDotNbwUq1gQIm///////////ARAAGgw3Mzk5MzkxNzM4MTkiDMB4HU2aMGhiJNS0pCqqBLEYXLhfbMS9VQ1lxCiuPWTcmCgoHYvoYdMM0y6/wcQV1H%2BhLG2zkiIKmINpnIG4UfmDvYiUKB%2BNG4VnlkpVftQJjX%2BvFdHiJoHTT2/cdlXjthUEn7E/p/Ciy27VD030ZUrYIqBngTTCDhlnvqhmApZwGEf6a07Hi7RO3du4MimI9USBcJPje3aURKU6yJyYXvBD/X5sp/oD8QmUvPrXqd1ak925F%2BNqlVLLnetgy6erCldez48AFdkjVpgilm7r0Mo7WR7GmXZO5nomnAQvqLLD06t/0nFjlk9oMrgLmjzxkT/yoteA83KdiOzP2GSgkqQG1oi%2BQcxy4OmB2hZC5U413XMlHjwFBQOYns42ERKoktDymEuN25XUhcDuT6l8%2BNFq%2BPsrGgNr0uZZYSCvJRG/yc0f9cOAG58bF99PVCsOyRp1KB6kLyM5Zw4qM0FmA47V0aDaEtO0UHcqVK6ZGOLcl0xcftACC2FkcrUigv0K7HDEq3%2B9qMn/eXX1ItwAXUXa4D4JPPr6P3p661VcRIN1AAtdUoGKrtmEIOJ15NY0BgDX4WFEcBTNegoD9OQv9ASKv3ZxVXP8Eafpz0hFjvxLy/aWLfacDrJMFJKRg0h5fpU0DFlLV7oyxVbkRMuGwg4Kzj9Y%2Bx66G/ozJ5M28qD%2BbqhNx5HdNVMZZuhs9Eh%2B9UM12L6WMga8X8sgpDxhJy5qye8eM3rrXnDBm3SnkIh%2BXzWyt0nUpQYxMLat%2BrkGOqcB9Oi53auovpcqKP43D1zqZYuQJJRC3pdjvrqMaVpu40qLymZb%2BcjmsRLNii5dkRJsLZ%2BX4gy2eRwN0euqgRKZxfyEgRsa5ifcMtrKPx2vNNVx9wvw0fkUIFrapQjF2eq42iTQS4NdFJcJvSCW6ZLvCHHAol/7A5WZPe%2BIz0%2B9RphET1m5mh1swF7qEkyO2tbqB3gakFpJf4nth4114oE/E/6/VX4cj4Q=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241121T021657Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW572WX7J33/20241121/us-west-2/s3/aws4_request&X-Amz-Signature=6d2a23782c72c84034d6c2fa206d813b359bf59b4f509ddc2d88c327857d4514" alt="ChainX"/>
      <WorkImage src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/681c047692552f3780406d7b40e7ffd6?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDwsXE%2BpJqOJi31G07Zlwh5LsYlW6DQUG8bLg93FmIAwQIhAOi3UANMU/RG5sa2Qr9ebkGYUS3pjwWcVnWhFRKzezhkKtYECJv//////////wEQABoMNzM5OTM5MTczODE5IgzKbOjFafH/MSwDdvAqqgQVCTBLaWdTQV727eq7k%2BufdLvfZyxv6sZ1oT%2BOMbi%2B66JZHZPs23mrbgdej6iEpNe8c1I1i4oxRpGv%2B%2B/HgEbk18uOaiHs1sojEutJ9zc8LW0YaTnC%2B0I/5YtvhtZA6PbFSzNwqGeHRBwobKuVYKQjJM7%2BCKOgcVTRecP8GP7wpi2RCQoV1qBch1aZVtCvzlq8EqBdcISK6nVgvh5qHYgMJvRyr8C1RGjDAr9YH95WhnJohiw9b%2ByhPF96wCA9TWA8okGk/PWbecxyszOdoB/RqDNjbHk1sBs31E8yiivWFiNiovQUdlJTls7C2bsfX1GsS%2BLuuq%2Bf3c4LWzq9x7FpxKl2yu77Jd5EAvI4ywbm01Z2XaDwEyAC/VOuwz%2BGc8IDcwBdvSWpUVLXAPIUvgmAvREanbi3BHJ3pX6myxp1iEEPaiSnukuQlBAzzS%2B8jbMhvAY5UGq9Bzqm7kE1WUBAc8g1y75/52oKjLG7MRfjcZ7LkGJNu4DUWgf1QeiD43rTGHmGlOxs5no4cSeJwVBqHzxgo6me2HKucfxmUf1YDxWN2kSne521MiRrnxjfIbXGqAMC9hrnarQDtZYBGJ8uVJK4RDIy5%2BE7zEPMuzHMnSCQPOWGavk%2B6izq3z4hQxG5KtE6njKMxJAytz9Yd2I5O%2BcpsFUW68PhM6QWOLyr8K1VZ4zbFlOBUKW5NdSeaI0EkLA6ELdwt/6aHYkltZXcLun6gk1PYYgibTCQm/q5BjqmAbqS74QdfmoO5PKpIy6P21I9geFPLU4D2qBcL7krc0W5sN3IJ0IVpwEeX4pUjGRaqnH7oBFnSEjYVG2/Azo1r1zyYHnkrCyeJFbvcjMshHFSI9EDEqtZ5ZHXopUAwxR%2BfpRhH7hV65B1rK%2BUuu28Jjv9LnePoZPhOEQtMgMmEzXtKF4Fy98pcw6LrDE0UriBXmRxKeAJRTtmJF0HxRMP3ihrVcsLqJU=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241121T021720Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5SFCL4VIN/20241121/us-west-2/s3/aws4_request&X-Amz-Signature=6ade4a50dedcf14afb3335695e7afbd833b1a7a9532e65c4fc6a5d440881e107" alt="ChainX"/>
    </Container>
  </Layout>
)

export default Work;
