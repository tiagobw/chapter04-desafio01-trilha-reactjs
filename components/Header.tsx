import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

export default function Header() {
  const { pathname } = useRouter();
  const isContinentPage = pathname.includes('continents');

  return (
    <Flex
      position="relative"
      as="header"
      w={['350px', '1160px']}
      h={['50px', '100px']}
      justifyContent="center"
      alignItems="center"
      m="0 auto"
    >
      {isContinentPage && (
        <Link href={`/`}>
          <Image
            cursor="pointer"
            position="absolute"
            left="0"
            src="/images/leftArrow.svg"
            alt="Arrow pointing to the left"
            width={['7px', '14px']}
            height={['14px', '28px']}
            transition="filter 0.2s"
            _hover={{ filter: 'opacity(65%)' }}
          />
        </Link>
      )}
      <Link href={`/`}>
        <Image
          cursor="pointer"
          src="/images/Logo.svg"
          alt="Picture"
          width={[81, 184.06]}
        />
      </Link>
    </Flex>
  );
}
