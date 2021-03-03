// import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#f26a2e" : "#077bf1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "28px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#877bfa" : "#f26a2e")};
    transform: translateY(-2px);
  }
`
