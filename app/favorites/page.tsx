"use client";

import { useFavoritesStore } from "@/store/useFavoritesStore";
import { TeacherPage } from "@/components/teachers-page";

export default function Page() {
  const {
    favorites: favoritesStore,
    fetchFavorites,
    loading: loadingFavorites,
  } = useFavoritesStore();

  return (
    <TeacherPage
      fetchTeachers={fetchFavorites}
      loadingTeachers={loadingFavorites}
      store={favoritesStore}
    />
  );
}
