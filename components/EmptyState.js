import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import AddSiteModal from "./AddSiteModal";
import DashboardShell from "./DashboardShell";

const EmptyState = () => {
  return (
    <DashboardShell>
      <Flex
        align="center"
        direction="column"
        justify="center"
        borderRadius="8px"
        p={16}
        width="100%"
        backgroundColor="white"
      >
        <Heading mb={2} size="lg">
          You haven't added any sites.
        </Heading>
        <Text mb={4}>Welcome 👋 Let's get started</Text>
        <AddSiteModal />
      </Flex>
    </DashboardShell>
  );
};

export default EmptyState;
