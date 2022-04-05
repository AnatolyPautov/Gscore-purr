import React from "react";
import styled, { css } from "styled-components";

const Loader: React.FC<LoaderProps> = ({
  color = "white",
  size = 24,
  className,
}: LoaderProps) => {
  return (
    <StyledSpinner className={className && className} color={color} size={size}>
      <div className="loader"></div>
    </StyledSpinner>
  );
};

export interface LoaderProps {
  color?: string;
  size?: number;
  className?: string;
}

const StyledSpinner = styled.div<LoaderProps>`
  .loader,
  .loader:after {
    border-radius: 50%;
    ${({ size }) => css`
      width: ${size}px;
      height: ${size}px;
    `}
  }
  .loader {
    margin: 0 auto;
    font-size: 1px;
    position: relative;
    text-indent: -9999em;
    border-top: ${({ color }) => `2px solid ${color};`};
    border-right: ${({ color }) => `2px solid ${color};`};
    border-bottom: ${({ color }) => `2px solid ${color};`};
    border-left: 2px solid transparent;
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
