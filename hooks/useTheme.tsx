import { useAppSelector } from "@hooks/reduxHooks";
import { selectTheme } from "@store/features/themeSlice";

export const useTheme = () => {
  const theme = useAppSelector(selectTheme);
  const isThemeDark = theme === "dark";

  return { theme, isThemeDark };
};
