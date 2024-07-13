"use client";

import { useEffect } from "react";
import type { Teacher } from "@/store/useTeachersStore";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { usePaginatedData } from "@/hooks/use-paginated-data";
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
    removeFromFavorites,
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
    <main className="px-16">
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

      <h2 className="text-5xl font-extrabold">Favorites</h2>

      <ul>
        {favorites.map((teacher) => (
          <li key={teacher.id}>
            <img
              src={teacher.avatar_url}
              alt={`${teacher.name} ${teacher.surname}`}
              width={50}
            />
            <h2>
              {teacher.name} {teacher.surname}
            </h2>
            <p>{teacher.experience}</p>
            <p>Languages: {teacher.languages.join(", ")}</p>
            <p>Price per hour: ${teacher.price_per_hour}</p>
            <p>Rating: {teacher.rating}</p>
            <p>Lessons done: {teacher.lessons_done}</p>
            <div>
              <h3>Reviews:</h3>
              {teacher.reviews.map((review, reviewIndex) => (
                <div key={reviewIndex}>
                  <p>{review.comment}</p>
                  <p>
                    - {review.reviewer_name}, Rating: {review.reviewer_rating}
                  </p>
                </div>
              ))}
            </div>

            <button onClick={() => removeFromFavorites(teacher.id)}>❤️</button>
          </li>
        ))}
      </ul>

      {hasMore && (
        <Button variant={"yellow"} onClick={loadMore}>
          Load More
        </Button>
      )}
    </main>
  );
}
