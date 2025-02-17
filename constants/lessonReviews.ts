interface ReviewMessage {
  label: string;
  homework: string;
}

export const lessonReviews = [
  { value: 5, label: "Відмінно" },
  { value: 4, label: "Добре" },
  { value: 3, label: "Задовільно" },
  { value: 2, label: "Погано" },
  { value: 1, label: "Жахливо" },
];

export const reviewMessages: Record<number, ReviewMessage> = {
  1: { label: "Потрібно багато покращень.", homework: "Виконання д/з - ❌" },
  2: { label: "Є над чим працювати.", homework: "Виконання д/з - ❌" },
  3: {
    label: "Середній рівень, варто покращувати.",
    homework: "Виконання д/з - ❌",
  },
  4: {
    label: "Добре, але є деталі для покращення.",
    homework: "Виконання д/з - ✅",
  },
  5: { label: "Відмінно! Топовий урок.", homework: "Виконання д/з - ✅" },
};
