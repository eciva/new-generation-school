"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Programs({
  subtitle = "НАШИ ПРОГРАММЫ",
  title = "Образование на каждом этапе развития",
  description = "Мы сопровождаем ученика на протяжении всего школьного пути — от первых шагов в обучении до поступления в университет.",
  items = [
    {
      title: "Дошколята",
      age: "5-7 лет",
      text: "Играя познаем мир, развиваем речь, логику, творчество и мягкую социализацию перед школой.",
      imageUrl: "/images/programs/preschool.jpg",
      tag: "01",
      link: "/programs",
    },
    {
      title: "Начальная школа",
      age: "1-4 классы",
      text: "Закладываем прочную академическую базу, любознательность и осознанную любовь к обучению.",
      imageUrl: "/images/programs/primary.jpg",
      tag: "02",
      link: "/programs",
    },
    {
      title: "Средняя школа",
      age: "5-9 классы",
      text: "Углубляем знания, развиваем критическое мышление, командные проекты и олимпиадные навыки.",
      imageUrl: "/images/programs/middle.jpg",
      tag: "03",
      link: "/programs",
    },
    {
      title: "Старшая школа",
      age: "10-11 классы",
      text: "Интенсивная подготовка к международным экзаменам, олимпиадам и поступлению в топовые вузы мира.",
      imageUrl: "/images/programs/high.jpg",
      tag: "04",
      link: "/programs",
    },
  ],
}) {
  return (
    <Box
      as="section"
      id="programs"
      py={16}
      px={{ base: 6, md: 12 }}
      maxW="7xl"
      mx="auto"
    >
      <Flex
        justify="space-between"
        align="flex-end"
        mb={12}
        flexWrap="wrap"
        gap={4}
      >
        <Box maxW="2xl">
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
            {subtitle}
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            color="#332b1f"
            letterSpacing="-0.02em"
          >
            {title}
          </Heading>
        </Box>
        <Link href="/programs">
          <Flex
            align="center"
            px={5}
            py={2.5}
            rounded="full"
            bg="rgba(255, 255, 255, 0.88)"
            border="1px solid #e7e0d2"
            color="#332b1f"
            fontWeight="700"
            fontSize="sm"
            transition="all 0.2s"
            _hover={{ bg: "#f3ead6", borderColor: "#981509", color: "#981509" }}
          >
            Все программы
            <Box
              as="span"
              className="material-symbols-outlined"
              ml={1.5}
              fontSize="sm"
            >
              arrow_forward
            </Box>
          </Flex>
        </Link>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {items.map((item, idx) => {
          const itemTitle = (item?.title || "").toLowerCase();
          let finalImageUrl = "/images/programs/preschool.jpg";
          if (itemTitle.includes("дошкол") || idx === 0) {
            finalImageUrl = "/images/programs/preschool.jpg";
          } else if (itemTitle.includes("начальн") || idx === 1) {
            finalImageUrl = "/images/programs/primary.jpg";
          } else if (itemTitle.includes("средн") || idx === 2) {
            finalImageUrl = "/images/programs/middle.jpg";
          } else if (itemTitle.includes("старш") || idx === 3) {
            finalImageUrl = "/images/programs/high.jpg";
          }

          return (
            <GridItem key={idx}>
              <Box
                bg="rgba(255, 255, 255, 0.90)"
                backdropFilter="blur(12px)"
                rounded="2xl"
                overflow="hidden"
                boxShadow="0 8px 24px -8px rgba(51, 43, 31, 0.08)"
                border="1px solid #e7e0d2"
                h="full"
                transition="all 0.3s ease"
                _hover={{
                  boxShadow: "0 18px 36px -10px rgba(51, 43, 31, 0.14)",
                  transform: "translateY(-4px)",
                  borderColor: "#981509",
                }}
                display="flex"
                flexDirection="column"
              >
                <Box position="relative" h="200px" w="full" bg="#f3ead6">
                  <Box
                    as="img"
                    src={finalImageUrl}
                    alt={item.title}
                    loading="lazy"
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={4}
                    bg={idx % 2 === 0 ? "#981509" : "#11100e"}
                    color="#f3ead6"
                    px={3}
                    py={1}
                    borderBottomRadius="md"
                    fontWeight="800"
                    fontSize="xs"
                    letterSpacing="0.08em"
                  >
                    {item.tag || `0${idx + 1}`}
                  </Box>
                </Box>
                <VStack align="flex-start" p={6} spacing={3} flex={1}>
                  <Flex justify="space-between" w="full" align="center" gap={2}>
                    <Heading
                      as="h3"
                      fontSize="lg"
                      fontWeight="800"
                      color="#332b1f"
                    >
                      {item.title}
                    </Heading>
                    <Text
                      fontSize="xs"
                      color="#981509"
                      bg="#fbf1f0"
                      px={2.5}
                      py={0.5}
                      rounded="full"
                      fontWeight="700"
                      whiteSpace="nowrap"
                    >
                      {item.age}
                    </Text>
                  </Flex>
                  <Text color="#6b6154" fontSize="sm" lineHeight="relaxed" flex={1}>
                    {item.text}
                  </Text>
                </VStack>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
