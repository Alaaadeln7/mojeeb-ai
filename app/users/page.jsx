import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import SectionsList from '@/components/SectionsList'
import { getSections } from "@/apis/api";

export default async function UsersPage() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["sections"],
  //   queryFn: getSections,
  // });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
      // <SectionsList />
    // </HydrationBoundary>
    <>
    <SectionsList />
    sefse</>
  );
}
