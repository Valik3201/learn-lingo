import { useState } from "react";
import type { Teacher } from "@/store/useTeachersStore";

export const useTeacherFilter = (teachers: Teacher[]) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const filteredTeachers = teachers.filter((teacher) => {
    return (
      (!selectedLanguage || teacher.languages.includes(selectedLanguage)) &&
      (!selectedLevel || teacher.levels.includes(selectedLevel)) &&
      (!selectedPrice || teacher.price_per_hour <= Number(selectedPrice))
    );
  });

  const resetFilters = () => {
    setSelectedLanguage(null);
    setSelectedLevel(null);
    setSelectedPrice(null);
  };

  const languages = Array.from(
    new Set(teachers.flatMap((teacher) => teacher.languages))
  ).sort((a, b) => a.localeCompare(b));
  const levels = Array.from(
    new Set(teachers.flatMap((teacher) => teacher.levels))
  );
  const prices = Array.from(
    new Set(teachers.map((teacher) => teacher.price_per_hour))
  ).sort((a, b) => a - b);

  return {
    filteredTeachers,
    selectedLanguage,
    setSelectedLanguage,
    selectedLevel,
    setSelectedLevel,
    selectedPrice,
    setSelectedPrice,
    resetFilters,
    languages,
    levels,
    prices,
  };
};
