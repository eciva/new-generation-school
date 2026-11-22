"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  VStack,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/#about", label: "О нас" },
  { href: "/#programs", label: "Программы" },
  { href: "/#testimonials", label: "Отзывы" },
  { href: "/news", label: "Новости" },
  { href: "/apply", label: "Подать заявку" },
];

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="#11100e"
      color="#f3ead6"
      mt={12}
      position="relative"
      zIndex={10}
      borderTop="2px solid #981509"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        w={96}
        h={96}
        bg="rgba(184, 35, 22, 0.12)"
        rounded="full"
        filter="blur(72px)"
        transform="translate(45%, -45%)"
        pointerEvents="none"
      />
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 6, md: 12 }}
        py={20}
        position="relative"
        zIndex={10}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(12, 1fr)",
          }}
          gap={{ base: 12, lg: 8 }}
          mb={16}
        >
          <GridItem
            colSpan={{ base: 1, lg: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Flex
              align="center"
              gap={3}
              mb={6}
              bg="#191714"
              p={3.5}
              rounded="2xl"
              border="1px solid #2e2923"
            >
              <Box
                as="img"
                alt="Logo"
                src="/ЛОГО.png"
                h={12}
                w="auto"
                filter="brightness(0) invert(1)"
              />
              <Box>
                <Text
                  fontFamily="heading"
                  fontWeight="800"
                  fontSize="xl"
                  lineHeight="tight"
                  color="#f3ead6"
                >
                  New Generation
                </Text>
                <Text
                  fontSize="10px"
                  textTransform="uppercase"
                  letterSpacing="0.18em"
                  color="#d4b88c"
                  fontWeight="700"
                >
                  School · Fergana
                </Text>
              </Box>
            </Flex>
            <Text
              color="#a89f91"
              lineHeight="relaxed"
              mb={8}
              maxW="sm"
              fontSize="sm"
            >
              Где каждый успешен! Мы создаем среду для раскрытия талантов и
              развития навыков будущего.
            </Text>
            <Flex gap={3}>
              <IconButton
                as="a"
                href="https://www.instagram.com/nou_novoye_pokoleniye/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                w={10}
                h={10}
                rounded="full"
                bg="#191714"
                border="1px solid #2e2923"
                color="#f3ead6"
                minW="auto"
                transition="all 0.2s"
                _hover={{ bg: "#b82316", borderColor: "#b82316", color: "#ffffff", transform: "translateY(-2px)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </IconButton>
              <IconButton
                as="a"
                href="https://youtube.com/channel/UCEjTS5_xiCZtYDOvW0RETFg?si=2hab2OcMbtHCWs8f"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                w={10}
                h={10}
                rounded="full"
                bg="#191714"
                border="1px solid #2e2923"
                color="#f3ead6"
                minW="auto"
                transition="all 0.2s"
                _hover={{ bg: "#b82316", borderColor: "#b82316", color: "#ffffff", transform: "translateY(-2px)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </IconButton>
            </Flex>
          </GridItem>

          <GridItem colSpan={{ base: 1, lg: 2 }} colStart={{ lg: 6 }}>
            <Heading
              as="h4"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.12em"
              fontWeight="700"
              mb={6}
              color="#d4b88c"
            >
              Навигация
            </Heading>
            <VStack align="start" gap={3.5}>
              {navItems.map((item) => (
                <ChakraLink
                  as={Link}
                  key={item.href}
                  href={item.href}
                  color="#a89f91"
                  fontSize="sm"
                  fontWeight="500"
                  _hover={{ color: "#f3ead6", textDecoration: "none" }}
                >
                  {item.label}
                </ChakraLink>
              ))}
            </VStack>
          </GridItem>

          <GridItem
            colSpan={{ base: 1, lg: 4 }}
            colStart={{ lg: 9 }}
            bg="#191714"
            p={8}
            rounded="2xl"
            border="1px solid #2e2923"
          >
            <Heading
              as="h4"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.12em"
              fontWeight="700"
              mb={6}
              color="#f3ead6"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Box w={2} h={2} rounded="full" bg="#b82316" />
              Контакты
            </Heading>
            <VStack align="stretch" gap={5}>
              <Flex align="flex-start" gap={4}>
                <Flex
                  w={10}
                  h={10}
                  rounded="xl"
                  bg="rgba(184, 35, 22, 0.14)"
                  border="1px solid rgba(184, 35, 22, 0.28)"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Box
                    as="span"
                    className="material-symbols-outlined"
                    fontSize="sm"
                    color="#d4b88c"
                  >
                    location_on
                  </Box>
                </Flex>
                <ChakraLink
                  href="/#location"
                  color="#d6cec0"
                  fontSize="sm"
                  _hover={{ color: "#f3ead6", textDecoration: "none" }}
                >
                  г. Фергана, улица Мустакиллик, дом 228
                </ChakraLink>
              </Flex>
              <Flex align="flex-start" gap={4}>
                <Flex
                  w={10}
                  h={10}
                  rounded="xl"
                  bg="rgba(184, 35, 22, 0.14)"
                  border="1px solid rgba(184, 35, 22, 0.28)"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Box
                    as="span"
                    className="material-symbols-outlined"
                    fontSize="sm"
                    color="#d4b88c"
                  >
                    call
                  </Box>
                </Flex>
                <Box>
                  <Text
                    as="a"
                    href="tel:+998913259565"
                    display="block"
                    color="#f3ead6"
                    fontSize="sm"
                    fontWeight="700"
                    _hover={{ color: "#d4b88c" }}
                  >
                    +998 (91) 325-95-65
                  </Text>
                  <Text
                    as="a"
                    href="tel:+998930417140"
                    display="block"
                    color="#a89f91"
                    fontSize="xs"
                    fontWeight="500"
                    _hover={{ color: "#f3ead6" }}
                    mt={0.5}
                  >
                    +998 (93) 041-71-40 (запасной)
                  </Text>
                  <Text fontSize="xs" color="#766d61" mt={1}>
                    Пн-Пт: 08:00-17:00, Сб: 08:00-14:00
                  </Text>
                </Box>
              </Flex>
              <Flex align="flex-start" gap={4}>
                <Flex
                  w={10}
                  h={10}
                  rounded="xl"
                  bg="rgba(184, 35, 22, 0.14)"
                  border="1px solid rgba(184, 35, 22, 0.28)"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Box
                    as="span"
                    className="material-symbols-outlined"
                    fontSize="sm"
                    color="#d4b88c"
                  >
                    mail
                  </Box>
                </Flex>
                <Text
                  color="#d6cec0"
                  fontSize="sm"
                  userSelect="all"
                >
                  new_generation_school@mail.ru
                </Text>
              </Flex>
            </VStack>
          </GridItem>
        </Grid>

        <Flex
          borderTop="1px solid #2e2923"
          pt={8}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color="#766d61">
            © 2026 New Generation School. Все права защищены. Created by Eciva.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
