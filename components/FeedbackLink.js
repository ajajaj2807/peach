import { Flex, Link } from "@chakra-ui/layout";

export default function FeedbackLink({ siteId }) {
  return (
    <Flex justifyContent="space-between" mb={4}>
      <Link fontWeight="bold" fontSize="sm">
        Leave a comment
      </Link>
      <Link fontSize="xs" color="blackAlpha.500">
        Powered by Peach
      </Link>
    </Flex>
  );
}
