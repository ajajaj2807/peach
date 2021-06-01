import useSWR from "swr";

import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import fetcher from "utils/fetcher";
import SiteTableSkeleton from "@/components/SkeletonTable";
import { useAuth } from "@/lib/auth";
import FeedbackTable from "@/components/FeedbackTable";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";

export default function MyFeedback() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
          <FeedbackTableHeader />
        <SiteTableSkeleton />;
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
        <FeedbackTableHeader />
      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
}
