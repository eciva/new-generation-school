"use client";

import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";

export default function Testimonials({
  subtitle = "Отзывы",
  titleHtml = "Слова родителей <br />\n<span style=\"font-size: 1.875rem; font-weight: 500; color: #6b6154;\">ключ к счастливым детям.</span>",
  items = [
    {
      name: "Марина К.",
      role: "Мама ученика 5 класса",
      text: "Мы искали школу, где ребенок будет не только получать знания, но и с радостью идти на уроки. NGS превзошла все ожидания!",
      variant: "light",
      avatarLetter: "М",
    },
    {
      name: "Рустам А.",
      role: "Папа выпускницы",
      text: "Благодаря сильной подготовке дочь поступила в топовый вуз на грант. Огромное спасибо всему преподавательскому составу.",
      variant: "dark",
      avatarLetter: "Р",
    },
    {
      name: "Дильдора У.",
      role: "Мама ученицы 2 класса",
      text: "Очень нравится современный подход и то, как преподаватели общаются с детьми. Ребенок стал более открытым и самостоятельным.",
      variant: "light",
      avatarLetter: "Д",
    },
  ],
}) {
  const safeTitleHtml = (titleHtml || "").replace(/#64748B/gi, "#6b6154");

  return (
    <Box
      as="section"
      id="testimonials"
      py={20}
      position="relative"
    >
      <Box maxW="7xl" mx="auto" px={{ base: 6, md: 12 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ md: "flex-end" }}
          mb={16}
          gap={6}
        >
          <Box>
            <Text
              as="span"
              display="block"
              color="#981509"
              fontWeight="700"
              letterSpacing="0.14em"
              textTransform="uppercase"
              fontSize="xs"
              mb={2}
            >
              {subtitle}
            </Text>
            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="800"
              color="#332b1f"
              lineHeight="1.1"
              letterSpacing="-0.025em"
              dangerouslySetInnerHTML={{ __html: safeTitleHtml }}
            />
          </Box>
        </Flex>

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {items.map((t, idx) =>
            t.variant === "dark" ? (
              <Box
                key={idx}
                bg="#11100e"
                color="#f3ead6"
                border="1px solid #2e2923"
                rounded="2xl"
                p={8}
                boxShadow="0 22px 46px -14px rgba(17, 16, 14, 0.35)"
                position="relative"
                overflow="hidden"
                transform={{ md: "translateY(-1rem)" }}
              >
                <Box position="absolute" top={0} left={0} right={0} h="2px" bg="#b82316" />
                <Box
                  as="span"
                  className="material-symbols-outlined"
                  position="absolute"
                  top={8}
                  right={8}
                  fontSize="5xl"
                  color="rgba(243, 234, 214, 0.08)"
                >
                  format_quote
                </Box>
                <Box position="relative" zIndex={10}>
                  <Text
                    color="#d6cec0"
                    lineHeight="relaxed"
                    mb={8}
                    minH="120px"
                  >
                    {t.text}
                  </Text>
                  <Flex
                    align="center"
                    gap={4}
                    pt={6}
                    borderTop="1px solid #2e2923"
                  >
                    <Flex
                      w={12}
                      h={12}
                      rounded="full"
                      align="center"
                      justify="center"
                      color="#ffffff"
                      bg="#b82316"
                      fontWeight="800"
                    >
                      {t.avatarLetter || t.name.charAt(0)}
                    </Flex>
                    <Box>
                      <Text as="h6" fontWeight="700" color="#f3ead6" fontSize="sm">
                        {t.name}
                      </Text>
                      <Text fontSize="xs" color="#a89f91">
                        {t.role}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ) : (
              <Box
                key={idx}
                bg="rgba(255, 255, 255, 0.90)"
                backdropFilter="blur(12px)"
                rounded="2xl"
                border="1px solid #e7e0d2"
                boxShadow="0 8px 24px -8px rgba(51, 43, 31, 0.07)"
                p={8}
                position="relative"
              >
                <Box
                  as="span"
                  className="material-symbols-outlined"
                  position="absolute"
                  top={8}
                  right={8}
                  fontSize="5xl"
                  color="rgba(51, 43, 31, 0.06)"
                >
                  format_quote
                </Box>
                <Box position="relative" zIndex={10}>
                  <Text
                    color="#574d40"
                    lineHeight="relaxed"
                    mb={8}
                    minH="120px"
                  >
                    {t.text}
                  </Text>
                  <Flex align="center" gap={4} pt={6} borderTop="1px solid #e7e0d2">
                    <Flex
                      w={12}
                      h={12}
                      rounded="full"
                      bg="#fbf1f0"
                      border="1px solid rgba(152, 21, 9, 0.16)"
                      align="center"
                      justify="center"
                      color="#981509"
                      fontWeight="800"
                    >
                      {t.avatarLetter || t.name.charAt(0)}
                    </Flex>
                    <Box>
                      <Text as="h6" fontWeight="700" color="#332b1f" fontSize="sm">
                        {t.name}
                      </Text>
                      <Text fontSize="xs" color="#6b6154">
                        {t.role}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
}
