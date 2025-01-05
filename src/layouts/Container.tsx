import React from "react";

type Props = {
  children: React.ReactNode;
};

const Contanier = ({ children }: Props) => {
  return (
    <section className="tools-container">
      <div className="tools-container-inner">{children}</div>
    </section>
  );
};

export default Contanier;
