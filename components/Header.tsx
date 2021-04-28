import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Header() {
  return (
    <Flex
      as="header"
      w="1440px"
      h="100px"
      justifyContent="center"
      alignItems="center"
      m="0 auto"
    >
      <Image src="/images/Logo.svg" alt="Picture" width="auto" height={45.92} />
    </Flex>
  );
}
