import React from "react";
import "./Instructions.scss";

type InstructionsProps = {
  title: string;
  steps: Array<string>;
};

const Instructions = ({ title, steps }: InstructionsProps) => {
  return (
    <section className="instructions">
      <h2 className="heading-1">{title}</h2>
      {steps.map((step, index) => (
        <p key={index} className="instructions__text">{step}</p>
      ))}
    </section>
  );
};

export default Instructions;
