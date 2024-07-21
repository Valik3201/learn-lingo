import { create } from "zustand";
import {
  ref,
  set as setFB,
  get as getFB,
  child,
  remove,
} from "firebase/database";
import { db } from "@/firebase";
import { useAuthStore } from "./useAuthStore";
import type { Teacher } from "./useTeachersStore";

interface FavoriteState {
  favorites: Teacher[];
  loading: boolean;
  fetchFavorites: () => Promise<void>;
  addToFavorites: (teacher: Teacher) => Promise<void>;
  removeFromFavorites: (teacherId: string) => Promise<void>;
  isFavorite: (teacherId: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoriteState>((set, get) => ({
  favorites: [],
  loading: true,
  fetchFavorites: async () => {
    const { user } = useAuthStore.getState();
    if (!user) {
      set({ loading: false });
      return;
    }

    try {
      const snapshot = await getFB(
        child(ref(db), `users/${user.uid}/favorites`)
      );
      if (snapshot.exists()) {
        const favoritesData = snapshot.val();
        const favorites: Teacher[] = [];

        for (const teacherId in favoritesData) {
          favorites.push(favoritesData[teacherId]);
        }
        set({ favorites, loading: false });
      } else {
        set({ favorites: [], loading: false });
      }
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
  addToFavorites: async (teacher: Teacher) => {
    const { user } = useAuthStore.getState();
    if (!user) return;

    const userFavoritesRef = ref(
      db,
      `users/${user.uid}/favorites/${teacher.id}`
    );

    await setFB(userFavoritesRef, teacher);

    set((state) => ({
      favorites: [...state.favorites, teacher],
    }));
  },
  removeFromFavorites: async (teacherId: string) => {
    const { user } = useAuthStore.getState();
    if (!user) return;

    const userFavoritesRef = ref(
      db,
      `users/${user.uid}/favorites/${teacherId}`
    );

    await remove(userFavoritesRef);

    set((state) => ({
      favorites: state.favorites.filter((teacher) => teacher.id !== teacherId),
    }));
  },
  isFavorite: (teacherId: string) => {
    return get().favorites.some((teacher) => teacher.id === teacherId);
  },
  clearFavorites: () => {
    set({ favorites: [] });
  },
}));
