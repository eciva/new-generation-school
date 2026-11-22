"use client";

import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export default function LocationMap() {
  return (
    <Box
      as="section"
      id="location"
      py={12}
      px={{ base: 6, md: 12 }}
      maxW="7xl"
      mx="auto"
    >
      <Box textAlign="center" mb={14}>
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
          Контакты
        </Text>
        <Heading
          as="h2"
          fontFamily="heading"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="800"
          color="#332b1f"
          letterSpacing="-0.025em"
        >
          Наше местоположение
        </Heading>
        <Text color="#6b6154" mt={4} maxW="2xl" mx="auto" fontSize="lg">
          Приходите к нам в гости и познакомьтесь со школой лично
        </Text>
      </Box>

      <Box
        className="apple-card"
        overflow="hidden"
        h="500px"
        position="relative"
        role="group"
      >
        <Box
          as="iframe"
          src="https://yandex.uz/map-widget/v1/?ll=71.773084%2C40.370058&mode=poi&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D72235911510&z=18"
          w="100%"
          h="100%"
          border={0}
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          title="Расположение New Generation School"
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          bottom={8}
          left={8}
          w={96}
          className="glass-panel"
          p={6}
          rounded="2xl"
          boxShadow="0 20px 44px -14px rgba(51, 43, 31, 0.2)"
          border="1px solid #e7e0d2"
          pointerEvents="none"
        >
          <Flex align="flex-start" gap={4}>
            <Flex
              w={12}
              h={12}
              rounded="xl"
              bg="#981509"
              align="center"
              justify="center"
              flexShrink={0}
            >
              <Box
                as="span"
                className="material-symbols-outlined"
                color="#f3ead6"
              >
                location_on
              </Box>
            </Flex>
            <Box>
              <Text fontWeight="800" color="#332b1f" mb={1}>
                New Generation School
              </Text>
              <Text fontSize="sm" color="#6b6154">
                г. Фергана, ул. Мустакиллик, 228
              </Text>
              <Flex
                mt={4}
                align="center"
                gap={2}
                fontSize="xs"
                fontWeight="700"
                color="#1f6e43"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                <Box
                  w={2}
                  h={2}
                  rounded="full"
                  bg="#1f6e43"
                  className="pulse-dot"
                />
                Открыто сейчас
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Mobile-only Address Info Card below map */}
      <Box
        display={{ base: "block", md: "none" }}
        mt={4}
        p={5}
        bg="rgba(255, 255, 255, 0.92)"
        rounded="2xl"
        border="1px solid #e7e0d2"
        boxShadow="0 8px 20px -6px rgba(51, 43, 31, 0.08)"
      >
        <Flex align="center" gap={3}>
          <Flex
            w={10}
            h={10}
            rounded="xl"
            bg="#981509"
            align="center"
            justify="center"
            flexShrink={0}
          >
            <Box
              as="span"
              className="material-symbols-outlined"
              color="#f3ead6"
              fontSize="sm"
            >
              location_on
            </Box>
          </Flex>
          <Box>
            <Text fontWeight="800" fontSize="sm" color="#332b1f">
              New Generation School · Фергана
            </Text>
            <Text fontSize="xs" color="#6b6154">
              ул. Мустакиллик, 228
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
