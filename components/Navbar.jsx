"use client";

import {
  Box,
  Badge,
  Flex,
  HStack,
  Text,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#about", label: "О нас" },
  { href: "/programs", label: "Программы" },
  { href: "/#ai", label: "EmpasisAI", isAi: true, hidden: true },
  { href: "/teachers", label: "Преподаватели", hidden: true },
  { href: "/universities", label: "Университеты" },
  { href: "/gallery", label: "Галерея" },
  { href: "/news", label: "Новости" },
  { href: "/#location", label: "Контакты" },
];

const visibleNavLinks = navLinks.filter((link) => !link.hidden);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const onToggle = () => setIsOpen((prev) => !prev);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        w="full"
        zIndex={50}
        py={{ base: 3, md: 4 }}
        px={{ base: 4, sm: 6, md: 8, xl: 12 }}
      >
        <Flex
          className="glass-panel"
          rounded="full"
          maxW={{ base: "full", xl: "7xl", "2xl": "1440px" }}
          mx="auto"
          px={{ base: 4, md: 6, "2xl": 8 }}
          py={2.5}
          align="center"
          justify="space-between"
          boxShadow="0 10px 30px -8px rgba(51, 43, 31, 0.1)"
        >
          {/* Brand */}
          <ChakraLink
            as={Link}
            href="/"
            display="flex"
            alignItems="center"
            gap={3}
            flexShrink={0}
            role="group"
            _hover={{ textDecoration: "none" }}
          >
            <Box
              as="img"
              src="/ЛОГО.png"
              alt="New Generation School Logo"
              h="10"
              w="auto"
              style={{ maxHeight: "40px", maxWidth: "160px", width: "auto", height: "40px" }}
              objectFit="contain"
              transition="transform 0.2s"
              _groupHover={{ transform: "scale(1.05)" }}
            />
            <Box
              display={{ base: "none", sm: "flex" }}
              lineHeight="1.2"
              flexDirection="column"
            >
              <Text
                fontFamily="heading"
                fontWeight="800"
                color="#332b1f"
                lineHeight="tight"
                letterSpacing="-0.02em"
                whiteSpace="nowrap"
              >
                New Generation
              </Text>
              <Text
                fontSize="10px"
                textTransform="uppercase"
                letterSpacing="0.16em"
                color="#981509"
                fontWeight="700"
                whiteSpace="nowrap"
              >
                School
              </Text>
            </Box>
          </ChakraLink>

          {/* Nav Links (Desktop) */}
          <HStack
            display={{ base: "none", xl: "flex" }}
            gap={{ xl: 0.5, "2xl": 1.5 }}
            bg="rgba(243, 234, 214, 0.52)"
            rounded="full"
            p={1}
            border="1px solid #e7e0d2"
            flexShrink={0}
          >
            {visibleNavLinks.map((link) => {
              const isActive = link.href === pathname;
              return (
                <ChakraLink
                  as={Link}
                  key={link.href}
                  href={link.href}
                  whiteSpace="nowrap"
                  fontWeight={isActive || link.isAi ? "700" : "600"}
                  fontSize={{ xl: "xs", "2xl": "sm" }}
                  px={{ xl: 2.5, "2xl": 3.5 }}
                  py={1.5}
                  rounded="full"
                  color={isActive ? "#981509" : "#332b1f"}
                  bg={isActive ? "#ffffff" : "transparent"}
                  border={isActive ? "1px solid #e7e0d2" : "1px solid transparent"}
                  boxShadow={isActive ? "0 2px 8px rgba(51, 43, 31, 0.06)" : "none"}
                  transition="all 0.2s"
                  display="inline-flex"
                  alignItems="center"
                  gap={1}
                  _hover={{
                    bg: "#ffffff",
                    color: "#981509",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </ChakraLink>
              );
            })}
          </HStack>

          {/* Trailing Action */}
          <HStack gap={{ base: 2, md: 3, "2xl": 4 }} flexShrink={0}>
            <HStack display={{ base: "none", "2xl": "flex" }} gap={2} mr={1} flexShrink={0}>
              <Box
                as="span"
                className="material-symbols-outlined"
                color="#981509"
                fontSize="xl"
              >
                call
              </Box>
              <Box>
                <Text
                  as="a"
                  href="tel:+998913259565"
                  fontWeight="700"
                  fontSize="xs"
                  color="#332b1f"
                  display="block"
                  lineHeight="1.2"
                  _hover={{ color: "#981509" }}
                >
                  +998 (91) 325-95-65
                </Text>
                <Text
                  as="a"
                  href="tel:+998930417140"
                  fontSize="11px"
                  fontWeight="600"
                  color="#6b6154"
                  display="block"
                  lineHeight="1.2"
                  _hover={{ color: "#981509" }}
                >
                  +998 (93) 041-71-40
                </Text>
              </Box>
            </HStack>
            <ChakraLink
              as={Link}
              href="/apply"
              display={{ base: "none", sm: "inline-flex" }}
              alignItems="center"
              justifyContent="center"
              whiteSpace="nowrap"
              flexShrink={0}
              px={{ base: 4, xl: 6 }}
              py={2.5}
              bg="#981509"
              color="#ffffff"
              fontWeight="700"
              fontSize="sm"
              rounded="full"
              transition="all 0.2s"
              boxShadow="0 8px 20px -6px rgba(152, 21, 9, 0.36)"
              _hover={{ bg: "#7c1006", textDecoration: "none", transform: "translateY(-1px)" }}
            >
              Подать заявку
            </ChakraLink>
            <Flex
              as="button"
              type="button"
              onClick={onToggle}
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
              display={{ base: "flex", xl: "none" }}
              align="center"
              justify="center"
              flexShrink={0}
              w={10}
              h={10}
              color="#332b1f"
              bg="#ffffff"
              rounded="full"
              border="1px solid #e7e0d2"
              cursor="pointer"
              transition="all 0.2s"
              _active={{ transform: "scale(0.94)" }}
              _hover={{ bg: "#f3ead6", borderColor: "#d5cab6" }}
            >
              <Box
                as="span"
                className="material-symbols-outlined"
                fontSize="24px"
                lineHeight="1"
              >
                {isOpen ? "close" : "menu"}
              </Box>
            </Flex>
          </HStack>
        </Flex>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <Box
            display={{ base: "block", xl: "none" }}
            bg="rgba(250, 249, 246, 0.98)"
            backdropFilter="blur(18px)"
            mt={2}
            rounded="2xl"
            p={5}
            boxShadow="0 22px 46px -14px rgba(51, 43, 31, 0.22)"
            border="1px solid #e7e0d2"
            maxH="calc(100vh - 100px)"
            overflowY="auto"
          >
            <VStack spacing={1.5} align="stretch">
              {visibleNavLinks.map((link) => {
                const isActive = link.href === pathname;
                return (
                  <ChakraLink
                    as={Link}
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    color={isActive ? "#981509" : "#332b1f"}
                    bg={isActive ? "#fbf1f0" : "transparent"}
                    border={isActive ? "1px solid rgba(152, 21, 9, 0.2)" : "1px solid transparent"}
                    fontWeight={isActive ? "700" : "600"}
                    fontSize="md"
                    px={4}
                    py={3}
                    rounded="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    transition="all 0.15s ease"
                    _hover={{ bg: "#f3ead6", textDecoration: "none" }}
                  >
                    <Flex align="center" gap={2}>
                      <Text>{link.label}</Text>
                    </Flex>
                    {link.isAi && (
                      <Badge bg="#981509" color="#ffffff" fontSize="10px" px={2} py={0.5} rounded="full" fontWeight="bold">
                        AI
                      </Badge>
                    )}
                    {isActive && !link.isAi && (
                      <Box w={2} h={2} rounded="full" bg="#981509" />
                    )}
                  </ChakraLink>
                );
              })}

              <Box pt={4} mt={2} borderTop="1px solid #e7e0d2">
                <Box mb={4} px={4} py={3} bg="#ffffff" border="1px solid #e7e0d2" rounded="xl">
                  <Flex alignItems="center" gap={3} mb={2.5}>
                    <Box as="span" className="material-symbols-outlined" fontSize="18px" color="#981509">
                      call
                    </Box>
                    <Box>
                      <Text fontSize="11px" color="#6b6154" fontWeight="600">Основной номер:</Text>
                      <Text
                        as="a"
                        href="tel:+998913259565"
                        fontSize="sm"
                        fontWeight="700"
                        color="#332b1f"
                        display="block"
                      >
                        +998 (91) 325-95-65
                      </Text>
                    </Box>
                  </Flex>
                  <Flex alignItems="center" gap={3}>
                    <Box as="span" className="material-symbols-outlined" fontSize="18px" color="#6b6154">
                      phone_forwarded
                    </Box>
                    <Box>
                      <Text fontSize="11px" color="#6b6154" fontWeight="600">Запасной номер:</Text>
                      <Text
                        as="a"
                        href="tel:+998930417140"
                        fontSize="sm"
                        fontWeight="700"
                        color="#332b1f"
                        display="block"
                      >
                        +998 (93) 041-71-40
                      </Text>
                    </Box>
                  </Flex>
                </Box>

                <ChakraLink
                  as={Link}
                  href="/apply"
                  onClick={onClose}
                  display="block"
                  textAlign="center"
                  px={6}
                  py={3.5}
                  bg="#981509"
                  color="#ffffff"
                  fontWeight="700"
                  fontSize="md"
                  rounded="full"
                  boxShadow="0 8px 20px -6px rgba(152, 21, 9, 0.4)"
                  transition="all 0.2s"
                  _hover={{ textDecoration: "none", bg: "#7c1006", transform: "translateY(-1px)" }}
                  _active={{ transform: "scale(0.98)" }}
                >
                  Подать заявку
                </ChakraLink>
              </Box>
            </VStack>
          </Box>
        )}
      </Box>
    </>
  );
}
