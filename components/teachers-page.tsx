import { useEffect } from "react";
import type { Teacher } from "@/store/useTeachersStore";
import { usePaginatedData } from "@/hooks/use-paginated-data";
import { useTeacherFilter } from "@/hooks/use-teacher-filter";
import { TeacherFilter } from "@/components/teacher-filter";
import { TeacherList } from "@/components/teachers-list";
import { NoTeachers } from "@/components/no-teachers";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function TeacherPage({
  fetchTeachers,
  loadingTeachers,
  store,
}: {
  fetchTeachers: () => void;
  loadingTeachers: boolean;
  store: Teacher[];
}) {
  const {
    filteredTeachers,
    setSelectedLanguage,
    setSelectedLevel,
    setSelectedPrice,
    languages,
    levels,
    prices,
    resetFilters,
  } = useTeacherFilter(store);

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  const { paginatedData, loadMore, hasMore } = usePaginatedData(
    filteredTeachers,
    5
  );

  return (
    <main className="md:px-16 space-y-8">
      <style jsx global>{`
        body {
          background-color: #f8f8f8 !important;
        }
        .dark body {
          background-color: #000 !important;
        }
      `}</style>

      <TeacherFilter
        setSelectedLanguage={setSelectedLanguage}
        setSelectedLevel={setSelectedLevel}
        setSelectedPrice={setSelectedPrice}
        languages={languages}
        levels={levels}
        prices={prices}
        resetFilters={resetFilters}
      />

      {loadingTeachers && (
        <Button disabled variant="ghost" className="w-full">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </Button>
      )}

      {!loadingTeachers && paginatedData.length === 0 ? (
        <NoTeachers />
      ) : (
        <TeacherList teachers={paginatedData} />
      )}

      {hasMore && (
        <div className="text-center py-8">
          <Button
            variant={"yellow"}
            onClick={loadMore}
            className="text-lg px-12 py-6"
          >
            Load More
          </Button>
        </div>
      )}
    </main>
  );
}
