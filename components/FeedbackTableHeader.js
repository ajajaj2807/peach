import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/breadcrumb";
  import { Flex, Heading } from "@chakra-ui/layout";
  
  const FeedbackTableHeader = () => (
    <>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="gray.700" fontSize="sm">
            Feedbacks
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent={"space-between"}>
        <Heading mb={4} color="black">
          My Feedbacks
        </Heading>
      </Flex>
    </>
  );
  
  export default FeedbackTableHeader;
  