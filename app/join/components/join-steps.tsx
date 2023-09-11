const stepNames = ["Gym", "Plan", "Personal Information", "Visit"];

export default function JoinSteps({ step }: { step: number }) {
  return (
    <ul className="steps">
      {stepNames.map((stepName, index) => (
        <li
          key={index}
          className={`step ${index <= step ? "step-primary" : ""}`}
        >
          {stepName}
        </li>
      ))}
    </ul>
  );
}
