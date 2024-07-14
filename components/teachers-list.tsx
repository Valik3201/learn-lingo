import type { Teacher } from "@/store/useTeachersStore";
import { TeacherCard } from "@/components/teacher-card";

export function TeacherList({ teachers }: { teachers: Teacher[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {teachers.map((teacher) => (
        <li key={teacher.id}>
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}
