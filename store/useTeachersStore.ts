import { create } from "zustand";
import { ref, onValue } from "firebase/database";
import { db } from "@/firebase";

export interface Review {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
}

export interface Teacher {
  id: string;
  avatar_url: string;
  conditions: string[];
  experience: string;
  languages: string[];
  lesson_info: string;
  lessons_done: number;
  levels: string[];
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
  surname: string;
}

interface TeachersState {
  teachers: Teacher[];
  loading: boolean;
  fetchTeachers: () => void;
}

export const useTeachersStore = create<TeachersState>((set) => ({
  teachers: [],
  loading: true,
  fetchTeachers: () => {
    onValue(ref(db, "teachers"), (snapshot) => {
      const data = snapshot.val();
      const teachers: Teacher[] = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];
      set({ teachers, loading: false });
    });
  },
}));
