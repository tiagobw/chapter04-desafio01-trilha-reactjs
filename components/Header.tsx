import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';

export default function Header() {
  return (
    <Flex
      as="header"
      h={['50px', '100px']}
      justifyContent="center"
      alignItems="center"
      m="0 auto"
    >
      <Image src="/images/Logo.svg" alt="Picture" width={[81, 184.06]} />
    </Flex>
  );
}
