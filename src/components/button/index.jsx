import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  background-color: rgba(55, 55, 55, 0.5);
  color: rgba(174, 174, 174, 1);
  font-weight: bold;
  font-size: ${({ small }) => (small ? "24px" : "32px")};
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid rgba(55, 55, 55, 0.5);
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}