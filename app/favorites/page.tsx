"use client";

import { useEffect } from "react";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { usePaginatedData } from "@/hooks/use-paginated-data";
import type { Teacher } from "@/store/useTeachersStore";
import { TeacherCard } from "@/components/teacher-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const {
    favorites: favoritesStore,
    fetchFavorites,
    loading: loadingFavorites,
  } = useFavoritesStore();

  const {
    paginatedData: favorites,
    loadMore,
    hasMore,
  } = usePaginatedData<Teacher>(favoritesStore, 5);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <main className="md:px-16 space-y-8">
      <style jsx global>{`
        body {
          background-color: #f8f8f8 !important;
        }
      `}</style>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="space-y-2">
          <Label className="text-[#8A8A89]">Languages</Label>
          <Select>
            <SelectTrigger className="w-[221px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ua">Ukrainian</SelectItem>
                <SelectItem value="pl">Polish</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-[#8A8A89]">Level of knowledge</Label>
          <Select>
            <SelectTrigger className="w-[221px]">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent className="w-[221px]">
              <SelectGroup>
                <SelectItem value="a1">A1 Beginner</SelectItem>
                <SelectItem value="a2">A2 Elementary</SelectItem>
                <SelectItem value="b1">B1 Intermediate</SelectItem>
                <SelectItem value="b2">B2 Upper-Intermediate</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-[#8A8A89]">Price</Label>
          <Select>
            <SelectTrigger className="w-[221px] md:w-[124px]">
              <SelectValue placeholder="Select price" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10 $</SelectItem>
                <SelectItem value="20">20 $</SelectItem>
                <SelectItem value="30">30 $</SelectItem>
                <SelectItem value="40">40 $</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loadingFavorites && <p className="text-right">Loading...</p>}

      <ul className="flex flex-col gap-8">
        {favorites.map((teacher) => (
          <li key={teacher.id}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="text-center py-8">
          <Button
            variant={"yellow"}
            onClick={loadMore}
            className="text-lg px-12 py-6 w-full sm:w-fit"
          >
            Load More
          </Button>
        </div>
      )}
    </main>
  );
}
