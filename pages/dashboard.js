import { Button } from "@chakra-ui/button";
import { Box, Code, Flex, Heading, Text } from "@chakra-ui/layout";
import { useAuth } from "@/lib/auth";
import Head from "next/head";
import Icon from "@chakra-ui/icon";
import EmptyState from "@/components/EmptyState";

export default function Dashboard() {
  const auth = useAuth();

  if(!auth.user){
      return 'Please Log in to continue'
  }

  return <EmptyState/>
  
}

