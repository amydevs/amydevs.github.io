import { useTheme } from "next-themes";

function ThemeSwitch({
  children
}: {
    children: (theme: ReturnType<typeof useTheme>) => JSX.Element;
}) {
  const theme = useTheme();
  const childrenExec = children(theme);
  return childrenExec;
}

export default ThemeSwitch;