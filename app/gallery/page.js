"use client";

import {
  Box,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
  Button,
  Badge,
  HStack,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryService } from "@/utils/api";

const CATEGORIES = [
  { id: "all", label: "Все пространства" },
  { id: "campus", label: "Территория и архитектура" },
  { id: "labs", label: "STEM & IT Лаборатории" },
  { id: "classrooms", label: "Классы и аудитории" },
  { id: "sports", label: "Спортивный комплекс" },
  { id: "events", label: "Школьные события" },
];

const FALLBACK_ITEMS = [];

export default function GalleryPage() {
  const [items, setItems] = useState(FALLBACK_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    async function loadGallery() {
      if (typeof window !== "undefined") {
        try {
          const stored = localStorage.getItem("ngs_custom_gallery");
          if (stored) {
            const parsed = JSON.parse(stored);
            const hasMocks = Array.isArray(parsed) && parsed.some(it => it.url?.includes("mixkit") || it.url?.includes("/images/programs/"));
            if (!hasMocks && Array.isArray(parsed) && parsed.length > 0) {
              const enriched = parsed.map((item, idx) => ({
                ...item,
                colSpan: item.featured ? 2 : (idx % 5 === 0 ? 2 : 1),
                rowSpan: item.featured && idx % 3 === 0 ? 2 : 1,
              }));
              setItems(enriched);
            } else if (hasMocks) {
              localStorage.removeItem("ngs_custom_gallery");
            }
          }
        } catch (e) {}
      }
      try {
        const res = await galleryService.getGallery();
        if (res?.data && Array.isArray(res.data)) {
          // enrich with bento spans
          const enriched = res.data.map((item, idx) => ({
            ...item,
            colSpan: item.featured ? 2 : (idx % 5 === 0 ? 2 : 1),
            rowSpan: item.featured && idx % 3 === 0 ? 2 : 1,
          }));
          setItems(enriched);
        }
      } catch (err) {
        console.warn("Using fallback/local gallery", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadGallery();
  }, []);

  const resolveUrl = (url) => {
    if (!url) return "/images/programs/high.jpg";
    if (url.startsWith("/images/")) return url;
    if (url.startsWith("/")) {
      const base = process.env.NEXT_PUBLIC_API_URL
        ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/?$/, "")
        : "https://api.new-generation-school.uz";
      return `${base}${url}`;
    }
    return url;
  };

  const filteredItems = selectedCategory === "all"
    ? items
    : items.filter((it) => it.category === selectedCategory);

  return (
    <>
      <Navbar />

      <Box bg="#11100e" color="#f3ead6" position="relative" zIndex={10} borderBottom="2px solid #981509" pt={{ base: 28, md: 36 }} pb={{ base: 16, md: 20 }} px={{ base: 4, sm: 6, md: 12 }}>
        <Box maxW="7xl" mx="auto">
          {/* Breadcrumb */}
          <Flex align="center" gap={2} mb={4}>
            <Link href="/">
              <Text fontSize="xs" color="#a89f91" _hover={{ color: "#d4b88c" }}>Главная</Text>
            </Link>
            <Text fontSize="xs" color="#766d61">/</Text>
            <Text fontSize="xs" color="#d4b88c" fontWeight="bold">Жизнь и галерея школы</Text>
          </Flex>

          <Heading as="h1" fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }} fontWeight="900" mb={4} lineHeight="1.15">
            Современная среда New Generation School
          </Heading>

          <Text color="#a89f91" fontSize={{ base: "md", md: "xl" }} maxW="3xl" lineHeight="relaxed">
            Погрузитесь в атмосферу нашей школы: умные аудитории, передовые лаборатории робототехники, спортивный комплекс и пространства для развития талантов каждого ученика.
          </Text>
        </Box>
      </Box>

      {/* Main Gallery Area */}
      <Box position="relative" zIndex={1} py={{ base: 12, md: 16 }} px={{ base: 4, sm: 6, md: 12 }} maxW="7xl" mx="auto">
        {/* Category Filter Tabs */}
        <Flex gap={2} overflowX="auto" pb={4} mb={10}>
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              size="sm"
              variant={selectedCategory === cat.id ? "solid" : "outline"}
              bg={selectedCategory === cat.id ? "#981509" : "transparent"}
              color={selectedCategory === cat.id ? "white" : "#332b1f"}
              borderColor="rgba(51, 43, 31, 0.2)"
              _hover={{ bg: selectedCategory === cat.id ? "#981509" : "gray.100" }}
              onClick={() => setSelectedCategory(cat.id)}
              rounded="full"
              px={5}
              flexShrink={0}
            >
              {cat.label}
            </Button>
          ))}
        </Flex>

        {isLoading ? (
          <Flex justify="center" align="center" minH="300px">
            <Spinner size="xl" color="#981509" />
          </Flex>
        ) : filteredItems.length === 0 ? (
          <Box
            textAlign="center"
            py={{ base: 16, md: 24 }}
            px={6}
            bg="rgba(255, 255, 255, 0.7)"
            backdropFilter="blur(20px)"
            rounded="3xl"
            border="1px solid rgba(51, 43, 31, 0.08)"
            maxW="2xl"
            mx="auto"
          >
            <Flex
              w={16}
              h={16}
              mx="auto"
              mb={4}
              rounded="2xl"
              bg="rgba(51, 43, 31, 0.06)"
              align="center"
              justify="center"
              color="#332b1f"
            >
              <Box as="span" className="material-symbols-outlined" fontSize="32px">
                photo_library
              </Box>
            </Flex>
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} color="#332b1f" mb={2} fontWeight="bold">
              Галерея обновляется
            </Heading>
            <Text color="#6b6154" fontSize="sm" maxW="md" mx="auto" lineHeight="relaxed">
              Мы готовим актуальные фото- и видеоматериалы школы. Скоро здесь появятся новые кадры!
            </Text>
          </Box>
        ) : (
          /* Bento Grid Layout */
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={6}
            autoRows="280px"
          >
            {filteredItems.map((item, idx) => {
              const isVideo = item.type === "video";
              const colSpan = item.featured ? { base: 1, md: 2 } : { base: 1, md: 1 };
              const rowSpan = item.featured && idx % 2 === 0 ? { base: 1, md: 2 } : 1;

              return (
                <GridItem
                  key={item.id || idx}
                  colSpan={colSpan}
                  rowSpan={rowSpan}
                  position="relative"
                  rounded="3xl"
                  overflow="hidden"
                  boxShadow="0 10px 25px -5px rgba(51, 43, 31, 0.08)"
                  border="1px solid rgba(51, 43, 31, 0.08)"
                  cursor="pointer"
                  onClick={() => setLightboxItem(item)}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  role="group"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 25px 45px -10px rgba(51, 43, 31, 0.2)",
                    borderColor: "rgba(152, 21, 9, 0.6)",
                  }}
                >
                  {/* Media (Video Autoplay or Image) */}
                  {isVideo ? (
                    <video
                      src={resolveUrl(item.url)}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  ) : (
                    <Box
                      as="img"
                      src={resolveUrl(item.url)}
                      alt={item.title || "Фото школы"}
                      w="full"
                      h="full"
                      objectFit="cover"
                      transition="transform 0.5s ease"
                      _groupHover={{ transform: "scale(1.05)" }}
                    />
                  )}

                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(to top, rgba(51, 43, 31, 0.9) 0%, rgba(51, 43, 31, 0.2) 50%, transparent 100%)"
                    transition="opacity 0.3s"
                    opacity={0.85}
                    _groupHover={{ opacity: 0.95 }}
                  />

                  {/* Top Badge */}
                  <Flex position="absolute" top={4} left={4} right={4} justify="space-between" align="center" zIndex={2}>
                    <Badge
                      px={3}
                      py={1}
                      rounded="full"
                      bg={isVideo ? "rgba(239, 68, 68, 0.9)" : "rgba(51, 43, 31, 0.8)"}
                      color="white"
                      backdropFilter="blur(8px)"
                      fontSize="2xs"
                      textTransform="uppercase"
                      display="flex"
                      alignItems="center"
                      gap={1.5}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                        {isVideo ? "videocam" : "photo_camera"}
                      </span>
                      {isVideo ? "Видеозапись" : "Фотография"}
                    </Badge>

                    {item.featured && (
                      <Badge
                        px={3}
                        py={1}
                        rounded="full"
                        bg="#981509"
                        color="#ffffff"
                        fontWeight="bold"
                        fontSize="2xs"
                      >
                        ★ Избранное
                      </Badge>
                    )}
                  </Flex>

                  {/* Bottom Text Content */}
                  <Box position="absolute" bottom={0} left={0} right={0} p={6} zIndex={2} color="white">
                    <Text fontSize="2xs" fontWeight="bold" color="#981509" textTransform="uppercase" letterSpacing="wider" mb={1}>
                      {CATEGORIES.find((c) => c.id === item.category)?.label || item.category}
                    </Text>
                    <Heading as="h3" fontSize={{ base: "md", md: item.featured ? "xl" : "lg" }} fontWeight="bold" mb={1.5} lineHeight="1.3">
                      {item.title}
                    </Heading>
                    {item.caption && (
                      <Text fontSize="xs" color="#d5cab6" lineHeight="relaxed" noOfLines={2}>
                        {item.caption}
                      </Text>
                    )}
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        )}

        {/* Campus Tour Visit CTA */}
        <Box
          mt={20}
          p={{ base: 8, md: 14 }}
          rounded="3xl"
          bg="#11100e"
          color="white"
          textAlign="center"
          position="relative"
          overflow="hidden"
          boxShadow="0 25px 50px -12px rgba(51, 43, 31, 0.4)"
        >
          <Box position="absolute" top="-20%" right="-10%" w="300px" h="300px" bg="radial-gradient(circle, rgba(152, 21, 9, 0.15) 0%, transparent 70%)" pointerEvents="none" />
          <Heading size="lg" mb={3} fontWeight="bold">
            Хотите увидеть школу своими глазами?
          </Heading>
          <Text color="#a89f91" maxW="2xl" mx="auto" mb={8} fontSize="sm">
            Мы проводим индивидуальные экскурсии для родителей и детей: вы сможете зайти в учебные лаборатории, познакомиться с преподавателями и оценить атмосферу школы.
          </Text>
          <Link href="/apply">
            <Button
              size="lg"
              bg="#981509"
              color="#ffffff"
              fontWeight="bold"
              px={10}
              rounded="full"
              _hover={{ bg: "#981509", transform: "translateY(-2px)" }}
              boxShadow="0 10px 25px rgba(152, 21, 9, 0.4)"
            >
              Записаться на индивидуальный тур
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <Box
          position="fixed"
          inset={0}
          zIndex={1000}
          bg="rgba(0, 0, 0, 0.85)"
          backdropFilter="blur(8px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          onClick={() => setLightboxItem(null)}
        >
          <Box
            bg="#11100e" color="#f3ead6" position="relative" zIndex={10} borderBottom="2px solid #981509"
            rounded="3xl"
            overflow="hidden"
            border="1px solid rgba(152, 21, 9, 0.3)"
            maxW="4xl"
            w="full"
            boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            position="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              position="absolute"
              top={3}
              right={3}
              size="sm"
              rounded="full"
              bg="blackAlpha.700"
              color="white"
              zIndex={10}
              _hover={{ bg: "black" }}
              onClick={() => setLightboxItem(null)}
            >
              ✕
            </Button>
            <Box maxH="65vh" bg="black" overflow="hidden" display="flex" alignItems="center" justifyContent="center">
              {lightboxItem.type === "video" ? (
                <video
                  src={resolveUrl(lightboxItem.url)}
                  autoPlay
                  controls
                  loop
                  playsInline
                  style={{ width: "100%", maxHeight: "65vh", objectFit: "contain" }}
                />
              ) : (
                <Box
                  as="img"
                  src={resolveUrl(lightboxItem.url)}
                  alt={lightboxItem.title}
                  maxH="65vh"
                  w="full"
                  objectFit="contain"
                />
              )}
            </Box>
            <Box p={6}>
              <Text fontSize="xs" fontWeight="bold" color="#981509" textTransform="uppercase" mb={1}>
                {CATEGORIES.find((c) => c.id === lightboxItem.category)?.label || lightboxItem.category}
              </Text>
              <Heading size="md" mb={2} color="white">
                {lightboxItem.title}
              </Heading>
              {lightboxItem.caption && (
                <Text fontSize="sm" color="#a89f91" lineHeight="relaxed">
                  {lightboxItem.caption}
                </Text>
              )}
            </Box>
          </Box>
        </Box>
      )}

      <Footer />
    </>
  );
}
