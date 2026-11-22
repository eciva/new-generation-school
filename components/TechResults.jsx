"use client";

import { Box, Grid, GridItem, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

export default function TechResults({
  techSubtitle = "СОВРЕМЕННАЯ СРЕДА",
  techTitle = "Технологии, которые усиливают обучение",
  techItems = [
    { title: "Интерактивные панели", text: "Windows-среда и сенсорное управление", icon: "tv" },
    { title: "Цифровые ресурсы", text: "Доступ к учебным материалам 24/7", icon: "devices" },
    { title: "Совместная работа", text: "Проекты и командная работа в классе", icon: "group" },
    { title: "Индивидуальный подход", text: "Аналитика прогресса каждого ученика", icon: "analytics" },
  ],
  techLinkUrl = "/gallery",

  resultsSubtitle = "НАШИ ДОСТИЖЕНИЯ",
  resultsTitle = "Результаты, которыми мы гордимся",
  resultsItems = [
    { value: "100%", label: "поступление в университеты" },
    { value: "68%", label: "выпускников получают гранты и стипендии" },
    { value: "120+", label: "победителей и призёров олимпиад" },
    { value: "20+", label: "международных сертификатов" },
  ],
}) {
  return (
    <Box as="section" py={16} px={{ base: 6, md: 12 }} maxW="7xl" mx="auto">
      <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
        {/* Left Side: Tech (Obsidian Dark Card matching Server Control CRM) */}
        <GridItem>
          <Box
            bg="#11100e"
            color="#f3ead6"
            p={{ base: 8, md: 12 }}
            rounded="2xl"
            border="1px solid #2e2923"
            boxShadow="0 22px 46px -14px rgba(17, 16, 14, 0.35)"
            h="full"
            display="flex"
            flexDirection="column"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="2px"
              bg="linear-gradient(90deg, #b82316, transparent)"
            />
            <Text
              as="span"
              display="block"
              color="#d4b88c"
              fontWeight="700"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="0.14em"
              mb={2}
            >
              {techSubtitle}
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="800"
              color="#f3ead6"
              letterSpacing="-0.02em"
              mb={10}
            >
              {techTitle}
            </Heading>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8} mb={10} flex={1}>
              {techItems.map((item, idx) => (
                <VStack key={idx} align="flex-start" spacing={3}>
                  <Box
                    p={2.5}
                    bg="#191714"
                    border="1px solid #2e2923"
                    rounded="xl"
                    color="#d4b88c"
                  >
                    <Box as="span" className="material-symbols-outlined" fontSize="xl">
                      {item.icon}
                    </Box>
                  </Box>
                  <Box>
                    <Heading as="h4" fontSize="md" fontWeight="700" color="#f3ead6" mb={1}>
                      {item.title}
                    </Heading>
                    <Text fontSize="sm" color="#a89f91" lineHeight="tall">
                      {item.text}
                    </Text>
                  </Box>
                </VStack>
              ))}
            </SimpleGrid>

            <Box>
              <Box
                as={Link}
                href={techLinkUrl && techLinkUrl !== "#" ? techLinkUrl : "/gallery"}
                display="inline-flex"
                alignItems="center"
                bg="#b82316"
                color="#ffffff"
                px={7}
                py={3}
                rounded="full"
                fontWeight="700"
                fontSize="sm"
                transition="all 0.2s"
                _hover={{ bg: "#981509", transform: "translateY(-1px)" }}
              >
                Посмотреть нашу школу{" "}
                <Box as="span" className="material-symbols-outlined" ml={2} fontSize="sm">
                  arrow_forward
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>

        {/* Right Side: Results (Warm Light Architectural Card) */}
        <GridItem>
          <Box
            bg="rgba(255, 255, 255, 0.90)"
            backdropFilter="blur(14px)"
            border="1px solid #e7e0d2"
            boxShadow="0 10px 30px -10px rgba(51, 43, 31, 0.08)"
            p={{ base: 8, md: 12 }}
            rounded="2xl"
            h="full"
            display="flex"
            flexDirection="column"
          >
            <Text
              as="span"
              display="block"
              color="#981509"
              fontWeight="700"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="0.14em"
              mb={2}
            >
              {resultsSubtitle}
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="800"
              color="#332b1f"
              letterSpacing="-0.02em"
              mb={10}
            >
              {resultsTitle}
            </Heading>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={5} flex={1}>
              {resultsItems.map((item, idx) => (
                <Box
                  key={idx}
                  p={6}
                  border="1px solid #e7e0d2"
                  rounded="xl"
                  bg={idx === 0 ? "#fbf1f0" : "#faf9f6"}
                  textAlign="center"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  transition="all 0.2s"
                  _hover={{ borderColor: "#981509", bg: "#f3ead6" }}
                >
                  <Heading
                    as="h3"
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontWeight="800"
                    color={idx === 0 ? "#981509" : "#332b1f"}
                    mb={2}
                    letterSpacing="-0.03em"
                  >
                    {item.value}
                  </Heading>
                  <Text fontSize="sm" color="#6b6154" maxW="xs" fontWeight="500">
                    {item.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
