"use client";

import { Box, Grid, GridItem, Heading, Text, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Features({
  subtitle = "Почему выбирают нас",
  title = "Сильная академическая база и забота",
  description = "Мы помогаем ученикам развивать академические знания, критическое мышление, творчество и самостоятельность.",
  items = [
    {
      title: "Сильная академическая база",
      text: "Глубокое изучение предметов, подготовка к олимпиадам и международным экзаменам.",
      icon: "workspace_premium",
    },
    {
      title: "Современная среда",
      text: "Интерактивные классы, цифровые ресурсы и технологии, которые делают обучение эффективным.",
      icon: "architecture",
    },
    {
      title: "Развитие личности",
      text: "Проектная работа, творчество, спорт и лидерские программы для всестороннего развития.",
      icon: "extension",
    },
    {
      title: "Безопасность и забота",
      text: "Безопасная среда, внимательное отношение и поддержка каждого ребенка.",
      icon: "verified_user",
    },
  ],
}) {
  return (
    <Box
      as="section"
      id="features"
      py={{ base: 14, md: 20 }}
      px={{ base: 4, sm: 6, md: 12 }}
      maxW="7xl"
      mx="auto"
      position="relative"
    >
      <Box id="about" position="absolute" top="-100px" />

      {/* Section Header */}
      <Box textAlign={{ base: "left", md: "center" }} mb={{ base: 10, md: 16 }} maxW="3xl" mx="auto">
        <Flex
          display="inline-flex"
          align="center"
          gap={2}
          px={4}
          py={1.5}
          rounded="full"
          bg="#fbf1f0"
          border="1px solid rgba(152, 21, 9, 0.2)"
          mb={4}
        >
          <Box as="span" className="material-symbols-outlined" color="#981509" fontSize="sm">
            star
          </Box>
          <Text
            as="span"
            color="#981509"
            fontWeight="700"
            fontSize="xs"
            letterSpacing="0.12em"
            textTransform="uppercase"
          >
            {subtitle || "Почему New Generation"}
          </Text>
        </Flex>

        <Heading
          as="h2"
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="800"
          color="#332b1f"
          lineHeight="1.12"
          letterSpacing="-0.025em"
          mb={4}
        >
          {title || "Школа, где образование работает на будущее"}
        </Heading>

        <Text
          color="#6b6154"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          lineHeight="relaxed"
          maxW="2xl"
          mx="auto"
        >
          {description || "Мы помогаем ученикам развивать академические знания, критическое мышление, творчество и самостоятельность в безопасной и вдохновляющей среде."}
        </Text>
      </Box>

      {/* Features Grid */}
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: 5, md: 6 }}
      >
        {items.map((item, idx) => (
          <GridItem key={idx}>
            <Box
              bg="rgba(255, 255, 255, 0.88)"
              backdropFilter="blur(14px)"
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              boxShadow="0 8px 26px -8px rgba(51, 43, 31, 0.07)"
              border="1px solid #e7e0d2"
              h="full"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              role="group"
              _hover={{
                boxShadow: "0 20px 38px -12px rgba(51, 43, 31, 0.14)",
                transform: "translateY(-5px)",
                borderColor: "#981509",
                bg: "#ffffff",
              }}
            >
              <VStack align="flex-start" spacing={5} w="full">
                {/* Icon in Card */}
                <Flex
                  w={14}
                  h={14}
                  rounded="xl"
                  bg="#11100e"
                  border="1px solid #2e2923"
                  align="center"
                  justify="center"
                  boxShadow="0 10px 20px -6px rgba(17, 16, 14, 0.35)"
                  transition="transform 0.3s"
                  _groupHover={{ transform: "scale(1.05)", bg: "#981509", borderColor: "#981509" }}
                >
                  <Box as="span" className="material-symbols-outlined" color="#f3ead6" fontSize="2xl">
                    {item.icon}
                  </Box>
                </Flex>

                <Box>
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="800"
                    color="#332b1f"
                    mb={2.5}
                    lineHeight="1.3"
                  >
                    {item.title}
                  </Heading>
                  <Text color="#6b6154" fontSize="sm" lineHeight="relaxed">
                    {item.text}
                  </Text>
                </Box>
              </VStack>

              {/* Bottom Subtle Accent Bar */}
              <Box
                mt={6}
                h="2px"
                w="28px"
                bg="#d5cab6"
                rounded="full"
                transition="all 0.3s"
                _groupHover={{ w: "56px", bg: "#981509" }}
              />
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Unified Action Button */}
      <Flex justify="center" mt={{ base: 10, md: 14 }}>
        <Box
          as={Link}
          href="/gallery"
          display="inline-flex"
          alignItems="center"
          gap={2.5}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="700"
          color="#ffffff"
          bg="#981509"
          px={{ base: 7, md: 9 }}
          py={{ base: 3.5, md: 4 }}
          rounded="full"
          boxShadow="0 10px 24px -6px rgba(152, 21, 9, 0.36)"
          transition="all 0.25s ease"
          _hover={{
            bg: "#7c1006",
            transform: "translateY(-2px)",
            boxShadow: "0 14px 30px -6px rgba(152, 21, 9, 0.46)",
            textDecoration: "none",
          }}
        >
          <span>Посмотреть нашу школу</span>
          <Box as="span" className="material-symbols-outlined" fontSize="18px">
            arrow_forward
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
