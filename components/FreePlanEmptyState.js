import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/layout";
import React from "react";
import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box borderRadius="8px" p={8} width="100%" backgroundColor="white">
        <Heading size="md">Get feedback on your sites</Heading>
        <Text>Start today, then grow with us 🌱</Text>
        <Button>Upgrade to Starter</Button>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
