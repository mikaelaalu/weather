import React from "react";

type Props = {
  children: React.ReactNode;
};

export const H1: React.FC<Props> = ({ children }) => (
  <h1 className="text-2xl text-center"> {children}</h1>
);

export const Paragraph: React.FC<Props> = ({ children }) => (
  <p className="text-base"> {children}</p>
);
