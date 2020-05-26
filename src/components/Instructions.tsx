import React from "react";

type InstructionsProps = {
  title: string;
  steps: Array<string>;
};

const Instructions = ({ title, steps }: InstructionsProps) => {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((step, index) => (
        <p key={index}>{step}</p>
      ))}
    </section>
  );
};

export default Instructions;
