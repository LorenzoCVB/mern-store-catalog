import React, { useEffect } from "react";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoRocket } from "react-icons/io5";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🛒
        </Text>

        {products.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight={"bold"}
            color="gray.500"
          >
            No products found 😓{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="#FF0080"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
