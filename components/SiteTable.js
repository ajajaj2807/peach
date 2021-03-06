import { Box, Link } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { format, parseISO } from "date-fns";
import { defaultConfig } from "next/dist/next-server/server/config-shared";
import React from "react";
import { Table, Td, Th, Tr } from "./Table";
import NextLink from "next/link";

const SiteTable = ({ sites }) => (
  <Table>
    <thead>
      <Tr>
        <Th>Name</Th>
        <Th>Site Link</Th>
        <Th>Feedback Link</Th>
        <Th>Date Created</Th>
        <Th> </Th>
      </Tr>
    </thead>
    <tbody>
      {sites.map((site) => (
        <Box as="tr" key={site.url}>
          <Td fontWeight="medium">{site.name}</Td>
          <Td>{site.url}</Td>
          <Td>
            <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
              <Link variant="blue" color="#3c2adf" fontWeight="medium">View</Link>
            </NextLink>
          </Td>
          <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
        </Box>
      ))}
    </tbody>
  </Table>
);

export default SiteTable;
