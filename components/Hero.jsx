"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link as ChakraLink,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Hero({
  badgeText = 'НОУ "Новое Поколение" · ФЕРГАНА',
  titleHtml = "Образование, которое <br />открывает больше <br />возможностей",
  description = "Современная школа полного цикла с сильным преподавательским составом, современной образовательной средой и индивидуальным подходом к развитию каждого ученика.",
  applyUrl = "#",
  videoUrl = "https://youtu.be/GVJVB3wjtHc?feature=shared",
  imageUrl = "/hero-owl.webp",
  stats = [
    { value: "15+", label: "лет успешной работы", icon: "workspace_premium" },
    { value: "40+", label: "квалифицированных преподавателей", icon: "school" },
    { value: "98%", label: "поступлений в вузы", icon: "account_balance" },
    { value: "1200+", label: "выпускников", icon: "groups" },
  ],
}) {
  const isVideo = imageUrl?.endsWith(".mp4") || imageUrl?.endsWith(".webm");

  let finalImageUrl = "/hero-owl.webp";

  if (imageUrl) {
    if (isVideo) {
      finalImageUrl = imageUrl;
    } else if (
      imageUrl === "/hero-panda.png" ||
      imageUrl === "/hero-panda.webp" ||
      imageUrl === "/uploads/hero-panda.png"
    ) {
      finalImageUrl = "/hero-owl.webp";
    } else if (
      imageUrl.startsWith("http://") ||
      imageUrl.startsWith("https://")
    ) {
      finalImageUrl = imageUrl;
    } else if (
      imageUrl.startsWith("/hero-") ||
      imageUrl.startsWith("/bg.") ||
      imageUrl.startsWith("/images/")
    ) {
      finalImageUrl = imageUrl;
    } else if (imageUrl.startsWith("/")) {
      const backendBase = process.env.NEXT_PUBLIC_API_URL
        ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/?$/, "")
        : "https://api.new-generation-school.uz";
      finalImageUrl = `${backendBase}${imageUrl}`;
    } else {
      finalImageUrl = imageUrl;
    }
  }

  const targetVideoUrl =
    videoUrl && videoUrl !== "#" && videoUrl.startsWith("http")
      ? videoUrl
      : "https://youtu.be/GVJVB3wjtHc?feature=shared";

  return (
    <Box
      as="section"
      position="relative"
      zIndex={10}
      minH="100vh"
      w="100%"
      bg="#faf9f6"
      borderBottom="1px solid #e7e0d2"
      overflow="hidden"
      display="flex"
      alignItems="center"
      pt={{ base: "108px", md: "126px", lg: "136px", "2xl": "148px" }}
      pb={{ base: 12, md: 16 }}
    >
      {/* Desktop Full-Bleed Architectural Eagle Owl Backdrop */}
      <Box position="absolute" inset={0} zIndex={0} bg="#faf9f6">
        {isVideo ? (
          <video
            src={finalImageUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Box
            display={{ base: "none", lg: "block" }}
            position="absolute"
            inset={0}
            bgImage={`url('${finalImageUrl}')`}
            bgSize="cover"
            bgPosition="center 22%"
          />
        )}

        {/* Warm Editorial Ivory-to-Clear Veil (Desktop) */}
        <Box
          display={{ base: "none", lg: "block" }}
          position="absolute"
          inset={0}
          style={{
            background:
              "linear-gradient(96deg, rgba(250, 249, 246, 0.96) 0%, rgba(250, 249, 246, 0.80) 34%, rgba(250, 249, 246, 0.22) 50%, transparent 66%)",
          }}
        />

        {/* Mobile Subtle Architectural Canvas */}
        <Box
          display={{ base: "block", lg: "none" }}
          position="absolute"
          inset={0}
          style={{
            backgroundImage:
              "radial-gradient(circle at 86% 12%, rgba(152, 21, 9, 0.07) 0%, transparent 48%), radial-gradient(circle at 12% 88%, rgba(243, 234, 214, 0.85) 0%, transparent 52%), radial-gradient(rgba(51, 43, 31, 0.055) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 100% 100%, 28px 28px",
          }}
        />

        {/* Soft Warm Bottom Transition into Post-Hero Vector Canvas */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h={{ base: "140px", lg: "220px" }}
          style={{
            background:
              "linear-gradient(to top, #faf9f6 0%, rgba(250, 249, 246, 0.86) 48%, transparent 100%)",
          }}
          pointerEvents="none"
        />
      </Box>

      {/* Main Content Container */}
      <Box
        maxW={{ base: "7xl", "2xl": "1440px" }}
        mx="auto"
        px={{ base: 4, md: 8, "2xl": 8 }}
        position="relative"
        zIndex={10}
        w="full"
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
          gap={{ base: 8, lg: 10 }}
          alignItems="center"
        >
          <GridItem colSpan={{ base: 1, lg: 7 }}>
            <VStack align="start" spacing={5} maxW="2xl">
              {/* Architectural Crimson Eyebrow Pill */}
              <Flex
                align="center"
                gap={2.5}
                px={4}
                py={1.5}
                bg="rgba(255, 255, 255, 0.92)"
                backdropFilter="blur(12px)"
                boxShadow="0 4px 16px -4px rgba(51, 43, 31, 0.08)"
                rounded="full"
                border="1px solid #e7e0d2"
                w="fit-content"
              >
                <Box
                  w={2}
                  h={2}
                  rounded="full"
                  bg="#981509"
                  boxShadow="0 0 0 3px rgba(152, 21, 9, 0.14)"
                />
                <Text
                  fontSize={{ base: "11px", sm: "xs" }}
                  fontWeight="700"
                  color="#332b1f"
                  textTransform="uppercase"
                  letterSpacing="0.12em"
                >
                  {badgeText}
                </Text>
              </Flex>

              <Heading
                as="h1"
                fontSize={{ base: "32px", sm: "44px", md: "52px", lg: "62px" }}
                fontWeight="800"
                color="#332b1f"
                lineHeight="1.08"
                letterSpacing="-0.03em"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />

              <Text
                fontSize={{ base: "md", sm: "lg", md: "xl" }}
                color="#574d40"
                lineHeight="1.65"
                fontWeight="500"
                maxW="xl"
              >
                {description}
              </Text>

              <HStack
                spacing={4}
                pt={3}
                w="full"
                flexDir={{ base: "column", sm: "row" }}
                align="flex-start"
              >
                <ChakraLink
                  as={Link}
                  href={applyUrl && applyUrl !== "#" ? applyUrl : "/apply"}
                  px={9}
                  py={4}
                  bg="#981509"
                  color="#ffffff"
                  fontWeight="700"
                  rounded="full"
                  transition="all 0.25s ease"
                  boxShadow="0 10px 26px -6px rgba(152, 21, 9, 0.38)"
                  _hover={{
                    bg: "#7c1006",
                    transform: "translateY(-2px)",
                    boxShadow: "0 14px 32px -6px rgba(152, 21, 9, 0.48)",
                    textDecoration: "none",
                  }}
                  w={{ base: "full", sm: "auto" }}
                  textAlign="center"
                  fontSize={{ base: "md", md: "lg" }}
                >
                  Поступить в школу →
                </ChakraLink>
                <ChakraLink
                  as="a"
                  href={targetVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  px={8}
                  py={4}
                  bg="rgba(255, 255, 255, 0.92)"
                  backdropFilter="blur(12px)"
                  color="#332b1f"
                  fontWeight="700"
                  rounded="full"
                  border="1px solid #d5cab6"
                  boxShadow="0 4px 16px -4px rgba(51, 43, 31, 0.08)"
                  transition="all 0.25s ease"
                  _hover={{
                    bg: "#f3ead6",
                    transform: "translateY(-2px)",
                    borderColor: "#981509",
                    textDecoration: "none",
                  }}
                  w={{ base: "full", sm: "auto" }}
                  textAlign="center"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "md", md: "lg" }}
                  cursor="pointer"
                >
                  <Box
                    as="span"
                    className="material-symbols-outlined"
                    mr={2}
                    color="#981509"
                  >
                    play_circle
                  </Box>
                  Смотреть видео
                </ChakraLink>
              </HStack>
            </VStack>
          </GridItem>

          {/* Mobile & Tablet Architectural Framed Eagle Owl Mascot Showcase */}
          {!isVideo && (
            <GridItem
              display={{ base: "block", lg: "none" }}
              colSpan={1}
            >
              <Box
                position="relative"
                rounded="2xl"
                overflow="hidden"
                border="1px solid #e7e0d2"
                bg="#f3ead6"
                boxShadow="0 18px 40px -14px rgba(51, 43, 31, 0.16)"
              >
                <Box
                  as="img"
                  src={finalImageUrl}
                  alt="New Generation School Owl Mascot"
                  w="full"
                  h={{ base: "240px", sm: "300px" }}
                  objectFit="cover"
                  objectPosition="73% 16%"
                />
                <Flex
                  position="absolute"
                  bottom={3}
                  left={3}
                  align="center"
                  gap={2}
                  px={3}
                  py={1}
                  rounded="full"
                  bg="rgba(17, 16, 14, 0.82)"
                  backdropFilter="blur(8px)"
                  border="1px solid rgba(243, 234, 214, 0.18)"
                >
                  <Box w={1.5} h={1.5} rounded="full" bg="#b82316" />
                  <Text
                    fontSize="10px"
                    fontWeight="700"
                    color="#f3ead6"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                  >
                    NGS · SINCE 2019
                  </Text>
                </Flex>
              </Box>
            </GridItem>
          )}
        </Grid>

        {/* Architectural Stats Strip */}
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={{ base: 4, sm: 5, md: 6 }}
          mt={{ base: 8, md: 14 }}
          pt={{ base: 6, md: 8 }}
          borderTop="1px solid #e7e0d2"
        >
          {stats.map((stat, idx) => (
            <GridItem key={idx}>
              <Flex
                align="center"
                gap={3.5}
                p={{ base: 3, md: 3.5 }}
                rounded="2xl"
                bg="rgba(255, 255, 255, 0.82)"
                backdropFilter="blur(12px)"
                border="1px solid #e7e0d2"
                boxShadow="0 4px 16px -6px rgba(51, 43, 31, 0.06)"
              >
                <Flex
                  w={{ base: 10, md: 12 }}
                  h={{ base: 10, md: 12 }}
                  rounded="xl"
                  bg="#fbf1f0"
                  align="center"
                  justify="center"
                  color="#981509"
                  flexShrink={0}
                  border="1px solid rgba(152, 21, 9, 0.14)"
                >
                  <Box as="span" className="material-symbols-outlined" fontSize={{ base: "20px", md: "22px" }}>
                    {stat.icon}
                  </Box>
                </Flex>
                <Box minW={0}>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="800"
                    color="#332b1f"
                    lineHeight="1.15"
                    letterSpacing="-0.02em"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="11px"
                    color="#6b6154"
                    textTransform="uppercase"
                    letterSpacing="0.04em"
                    fontWeight="700"
                    lineHeight="1.25"
                    mt={0.5}
                  >
                    {stat.label}
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
