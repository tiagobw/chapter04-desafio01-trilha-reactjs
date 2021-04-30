import { Flex, Heading, Text } from '@chakra-ui/layout';

interface NumberAndTextProps {
  numberOfCountries: number;
  text: string;
}

export default function NumberAndText({
  numberOfCountries,
  text,
}: NumberAndTextProps) {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems={['flex-start', 'center']}
      >
        <Heading
          as="h2"
          fontSize="4rem"
          fontWeight="600"
          lineHeight="5rem"
          color="highlight.900"
        >
          {numberOfCountries}
        </Heading>
        <Text
          fontSize={["1.7rem", "2rem"]}
          fontWeight={["400", "600"]}
          lineHeight="3rem"
          color="dark.700"
        >
          {text}
        </Text>
      </Flex>
    </>
  );
}
