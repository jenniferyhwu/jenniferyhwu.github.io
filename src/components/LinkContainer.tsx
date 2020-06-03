import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: inherit;
`;

const LinkContainer: React.FC<ComponentPropsWithoutRef<"a">> = ({
  children,
  ...rest
}) => (
  <Link {...rest} target="_blank">
    {children}
  </Link>
);

export default LinkContainer;
