import { useAppSelector } from "@hooks/reduxHooks";
import { selectTheme } from "@/lib/store/api/features/themeSlice";

export const useTheme = () => {
  const theme = useAppSelector(selectTheme);
  const isThemeDark = theme === "dark";

  return { theme, isThemeDark };
};
