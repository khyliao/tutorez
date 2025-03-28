export const roles = {
  superadmin: "Суперадміністратор",
  admin: "Адміністратор",
  tutor: "Викладач",
  student: "Студент",
};

export function getRoleName(role: keyof typeof roles): string {
  return roles[role] || "Невідомо";
}
