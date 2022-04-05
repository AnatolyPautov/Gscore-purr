import React, { ButtonHTMLAttributes } from "react";
import styled, { css, useTheme } from "styled-components";
import Loader from "../Loader";

const Button: React.FC<ButtonProps> = ({
  isLoading,
  disabled,
  variant = "primary",
  children,
  ...props
}) => {
  const { colors } = useTheme();
  return (
    <Root
      $variant={variant}
      $disabled={disabled}
      $isLoading={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader color={variant === "primary" ? colors.white : colors.primary} />
      ) : (
        children
      )}
    </Root>
  );
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: ButtonVariant;
}

export type ButtonVariant = "primary" | "secondary" | "text";

interface RootProps {
  $variant?: ButtonVariant;
  $disabled?: boolean;
  $isLoading?: boolean;
}

const rootBackgroundColor = css<RootProps>`
  background-color: ${({ $variant, theme: { colors } }) => {
    switch ($variant) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.white;
      case "text":
        return "transparent";
    }
  }};
`;

const rootHoverColor = css<RootProps>`
  color: ${({ $variant, $disabled, $isLoading, theme: { colors } }) => {
    if (!$disabled && !$isLoading) {
      if ($variant === "primary") {
        return colors.white;
      } else {
        return colors.system.red;
      }
    }
  }};
  background-color: ${({
    $variant,
    $disabled,
    $isLoading,
    theme: { colors },
  }) => {
    if (!$disabled && !$isLoading) {
      switch ($variant) {
        case "primary":
          return colors.system.red;
        case "secondary":
          return colors.neutral.color1;
      }
    }
  }};
`;

const Root = styled.button<RootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 58px;
  border-radius: 4px;
  min-width: 105px;
  transition: 0.3s;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};

  ${({ $variant, theme: { colors, typography } }) => css`
    color: ${$variant === "primary" ? colors.white : colors.primary};
    ${typography.title};
  `}

  ${rootBackgroundColor}
  &:hover {
    ${rootHoverColor}
  }
`;

export default Button;
