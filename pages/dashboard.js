import { Button } from "@chakra-ui/button";
import useSWR from "swr";
import { Box, Code, Flex, Heading, Text } from "@chakra-ui/layout";

import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import fetcher from "utils/fetcher";
import SiteTableSkeleton from "@/components/SkeletonTable";
import { useAuth } from "@/lib/auth";
import SiteTable from "@/components/SiteTable";
import SiteTableHeader from "@/components/SiteTableHeader";
import Head from "next/head";

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />;
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
}
