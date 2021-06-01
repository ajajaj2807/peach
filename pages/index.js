import { Button } from "@chakra-ui/button";
import { Box, Code, Flex, Heading, Text } from "@chakra-ui/layout";
import { useAuth } from "@/lib/auth";
import Head from "next/head";
import Icon from "@chakra-ui/icon";

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Peach</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if(document.cookie && document.cookie.includes('peach-auth')){
            window.location.href = "/dashboard"
          }
        `,
          }}
        />
      </Head>
      <Icon
        name="logo"
        size="64px"
        color="black"
        viewBox="-34 0 512 512.00081"
        boxSize="64px"
      >
        <path
          fill="currentColor"
          d="m144.003906 151.074219c-87.46875 2.257812-162.628906 78.917969-139.902344 181.183593 25.121094 113.03125 108.636719 145.335938 193.535157 172.449219 7.015625 2.242188 13.640625 4.355469 20.144531 6.523438 1.539062.511719 3.140625.769531 4.742188.769531 1.601562 0 3.203124-.257812 4.742187-.769531 6.484375-2.160157 13.0625-4.265625 20.027344-6.496094 76.128906-24.371094 167.464843-54.644531 193.648437-172.476563 14.230469-64.035156-9.613281-121.613281-58.167968-154.8125-42.0625-28.753906-96.496094-34.84375-144.078126-14.425781 6.105469-55.050781 35.839844-104.667969 82.148438-135.539062 6.890625-4.59375 8.753906-13.90625 4.15625-20.800781-4.59375-6.890626-13.90625-8.753907-20.800781-4.160157-29.589844 19.726563-54.144531 46.960938-71.015625 78.75-1.878906 3.542969-3.640625 7.136719-5.320313 10.773438-16.667969-36.003907-53.132812-61.042969-95.34375-61.042969h-90c-6.066406 0-11.535156 3.65625-13.855469 9.261719-2.320312 5.605469-1.039062 12.058593 3.25 16.347656 18.3125 16.210937 43.835938 52.734375 101.71875 76.710937 24.492188 10.144532 50.171876 15.957032 76.496094 17.347657-.6875 4.40625-1.238281 8.832031-1.65625 13.269531-20.191406-9.03125-42.09375-13.441406-64.46875-12.863281zm-64.511718-89.320313-.753907-.753906h53.785157c35.980468 0 66.125 25.472656 73.355468 59.332031-47.757812-3.863281-92.132812-24.320312-126.386718-58.578125zm286.347656 140.460938c39.828125 27.226562 56.957031 73.410156 45.816406 123.535156-22.695312 102.136719-102.820312 127.785156-173.511719 150.414062-5.378906 1.722657-10.53125 3.371094-15.625 5.039063-5.128906-1.679687-10.328125-3.339844-15.757812-5.074219-70.613281-22.550781-150.648438-48.113281-173.375-150.378906-18.742188-84.34375 44.3125-144.8125 114.160156-144.8125 65.101563 0 119.976563 52.882812 119.976563 120.0625 0 8.285156 6.714843 15 15 15 8.28125 0 15-6.714844 15-15 0-42.152344-17.609376-81.800781-47.996094-109.96875 37.5625-16.503906 81.300781-12.753906 116.3125 11.183594zm0 0"
        />
      </Icon>

      <Text mt={4} maxW="60%" textAlign="center" fontSize="large">
        <b>Peach </b> lets you recieve feedback on your sites, blogs or apps in
        just a single line of code. You also get your own dashboard to manage
        your sites with ease.
      </Text>
      <Text my={4} fontSize="s" color="gray.700">
        Inspired from <i>React-2025</i> course.
      </Text>
      {!auth?.user && (
        <Flex flexDirection="column" align="center" justify="center">
          <Button
            mt={4}
            p={2}
            width="full"
            backgroundColor="gray.900"
            color="white"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.800", transform: "scale(0.95)" }}
            paddingLeft={4}
            paddingRight={4}
            size="lg"
            onClick={(e) => auth.signinwithGithub()}
          >
            Sign In with Github
          </Button>
          <Button
            mt={4}
            p={2}
            width="full"
            backgroundColor="gray.900"
            color="white"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.800", transform: "scale(0.95)" }}
            paddingLeft={4}
            paddingRight={4}
            size="lg"
            onClick={(e) => auth.signinwithGoogle()}
          >
            Sign In with Google
          </Button>
        </Flex>
      )}
      {auth?.user && (
        <Button
          as="a"
          href="/dashboard"
          mt={4}
          p={2}
          backgroundColor="gray.900"
          color="white"
          _hover={{ bg: "gray.700" }}
          _active={{ bg: "gray.800", transform: "scale(0.95)" }}
          paddingLeft={4}
          paddingRight={4}
          size="lg"
        >
          Go to Dashboard
        </Button>
      )}
    </Flex>
  );
}
