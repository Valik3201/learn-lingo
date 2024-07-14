"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useTeachersStore } from "@/store/useTeachersStore";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { TeacherPage } from "@/components/teachers-page";

export default function Page() {
  const {
    teachers: teachersStore,
    loading: loadingTeachers,
    fetchTeachers,
  } = useTeachersStore();

  const { fetchFavorites, loading: loadingFavorites } = useFavoritesStore();
  const { user } = useAuthStore();

  useEffect(() => {
    fetchTeachers();
    if (user) {
      fetchFavorites();
    }
  }, [fetchTeachers, fetchFavorites, user]);

  const isLoading = loadingTeachers || (user ? loadingFavorites : false);

  return (
    <TeacherPage
      fetchTeachers={fetchTeachers}
      loadingTeachers={isLoading}
      store={teachersStore}
    />
  );
}
