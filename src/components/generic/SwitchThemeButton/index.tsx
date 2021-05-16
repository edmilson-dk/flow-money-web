import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { SwitchThemeButtonWrapper } from "src/styles/components/generic/SwitchThemeButton";

type SwitchThemeButtonProps = {
  toggleTheme: () => void;
}

export function SwitchThemeButton({ toggleTheme }: SwitchThemeButtonProps) {
  const { title } = useContext(ThemeContext);

  return (
    <SwitchThemeButtonWrapper onClick={toggleTheme}>
      {
        title === "dark" ? (
          <span>
            <img src="/svg/theme-switch-light.svg" />
          </span>
        ) : (
          <span>
            <img src="/svg/theme-switch-dark.svg" />
          </span>
        )
      }
    </SwitchThemeButtonWrapper>
  )
}