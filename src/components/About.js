import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"3xl"} id="about">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 7, md: 14 }}
            pb={{ base: 19, md: 36 }}
          >
            <Stack direction="row" align="center" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  01
                </Text>
                <Text whiteSpace="nowrap" fontWeight={800}>Sobre mí</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Text fontSize={"xl"} color={"gray.600"} px={4}>
              {profile.about}
            </Text>
          </Stack>
        </Container>
      </>
    );
}

