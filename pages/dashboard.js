import { Button } from "@chakra-ui/button";
import useSWR from "swr";
import { Box, Code, Flex, Heading, Text } from "@chakra-ui/layout";

import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import fetcher from "utils/fetcher";
import SiteTableSkeleton from "@/components/SkeletonTable";
import { useAuth } from "@/lib/auth";
import SiteTable from "@/components/SiteTable";

export default function Dashboard() {
  const auth = useAuth();
  const { data } = useSWR("/api/sites", fetcher);

  // console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />;
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      { data.sites ? <SiteTable  sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
}
