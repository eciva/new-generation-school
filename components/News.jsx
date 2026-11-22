"use client";

import { Box, Heading, Text, Flex, VStack, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function News({
  subtitle = "СОБЫТИЯ И НОВОСТИ",
  title = "Будьте в курсе школьной жизни",
  allLink = "/news",
  limit = 3,
}) {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.new-generation-school.uz/api";
        const res = await fetch(`${apiUrl}/news?pageSize=${limit}&page=1`);
        if (res.ok) {
          const json = await res.json();
          setNewsList(json.data || []);
        }
      } catch (err) {
        console.error("Failed to fetch news", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [limit]);

  const formatDateParts = (dateString) => {
    if (!dateString) return ["", ""];
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const months = ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"];
    const month = months[date.getMonth()];
    return [day, month];
  };

  return (
    <Box as="section" id="news" py={16} px={{ base: 6, md: 12 }} maxW="7xl" mx="auto">
      <Flex justify="space-between" align="flex-end" mb={12} flexWrap="wrap" gap={4}>
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
        <Link href={allLink}>
          <Flex
            align="center"
            px={6}
            py={2.5}
            bg="rgba(255, 255, 255, 0.88)"
            border="1px solid #e7e0d2"
            rounded="full"
            color="#332b1f"
            fontWeight="700"
            fontSize="sm"
            transition="all 0.2s"
            _hover={{ bg: "#f3ead6", borderColor: "#981509", color: "#981509" }}
          >
            Все события
            <Box as="span" className="material-symbols-outlined" ml={2} fontSize="sm">
              arrow_forward
            </Box>
          </Flex>
        </Link>
      </Flex>

      <VStack spacing={6} align="stretch" w="full" mx="auto">
        {loading ? (
          <Flex justify="center" align="center" h="200px">
            <Spinner size="xl" color="#981509" />
          </Flex>
        ) : (
          newsList.map((item, idx) => {
            const finalImageUrl = item.coverImage
              ? item.coverImage.startsWith("/")
                ? (process.env.NEXT_PUBLIC_API_URL
                    ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/?$/, "")
                    : "https://api.new-generation-school.uz") + item.coverImage
                : item.coverImage
              : "/bg.png";

            const [day, month] = formatDateParts(item.date || item.createdAt);

            return (
              <Box
                key={item.id || idx}
                border="1px solid #e7e0d2"
                rounded="2xl"
                overflow="hidden"
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                bg="rgba(255, 255, 255, 0.90)"
                backdropFilter="blur(14px)"
                boxShadow="0 8px 24px -8px rgba(51, 43, 31, 0.07)"
                _hover={{
                  boxShadow: "0 18px 36px -10px rgba(51, 43, 31, 0.13)",
                  borderColor: "#981509",
                }}
                transition="all 0.25s ease"
              >
                <Box w={{ base: "100%", md: "30%" }} position="relative" minH={{ base: "210px", md: "auto" }} bg="#f3ead6">
                  <Box
                    as="img"
                    src={finalImageUrl}
                    alt={item.title}
                    loading="lazy"
                    w="full"
                    h="full"
                    objectFit="cover"
                    position="absolute"
                    top={0}
                    left={0}
                  />
                  <Box
                    position="absolute"
                    top={4}
                    left={4}
                    bg="#11100e"
                    border="1px solid #2e2923"
                    px={3}
                    py={2}
                    rounded="lg"
                    boxShadow="0 6px 16px rgba(17, 16, 14, 0.35)"
                    textAlign="center"
                  >
                    <Text fontSize="sm" fontWeight="800" color="#f3ead6" lineHeight="1">
                      {day}
                    </Text>
                    <Text fontSize="10px" fontWeight="700" color="#d4b88c" lineHeight="1" mt={1} letterSpacing="0.08em">
                      {month}
                    </Text>
                  </Box>
                </Box>
                <VStack w={{ base: "100%", md: "70%" }} p={6} align="flex-start" justify="center" spacing={3}>
                  <Heading as="h4" fontSize="lg" fontWeight="800" color="#332b1f" lineHeight="1.3">
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color="#6b6154" noOfLines={3} lineHeight="relaxed">
                    {item.excerpt || item.body?.substring(0, 150) || "Нет описания"}
                  </Text>
                  <Link href={item.externalUrl ? item.externalUrl : `/news/${item.slug || item.id}`}>
                    <Flex
                      align="center"
                      color="#981509"
                      fontWeight="700"
                      fontSize="sm"
                      _hover={{ color: "#7c1006" }}
                      mt={2}
                    >
                      Читать{" "}
                      <Box as="span" className="material-symbols-outlined" ml={1} fontSize="sm">
                        arrow_forward
                      </Box>
                    </Flex>
                  </Link>
                </VStack>
              </Box>
            );
          })
        )}
      </VStack>
    </Box>
  );
}
