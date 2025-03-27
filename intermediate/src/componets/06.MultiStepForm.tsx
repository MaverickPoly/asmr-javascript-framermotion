import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "Provide your email",
    type: "email",
    placeholder: "Your email...",
    name: "email",
  },
  {
    title: "Provide your username",
    type: "text",
    placeholder: "Your username...",
    name: "username",
  },
  {
    title: "Provide your password",
    type: "password",
    placeholder: "Your password...",
    name: "password",
  },
  {
    title: "Confirm your password",
    type: "password",
    placeholder: "Confirm password...",
    name: "confirmPassword",
  },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((currentStep + 1) % steps.length);
  const prevStep = () =>
    setCurrentStep((currentStep - 1 + steps.length) % steps.length);

  return (
    <div className="max-w-lg w-full p-6 rounded-lg shadow-lg flex flex-col gap-3 bg-neutral-900">
      <motion.div
        key={currentStep}
        className="flex flex-col relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">
          {steps[currentStep].title}
        </h1>

        <input
          type={steps[currentStep].type}
          placeholder={steps[currentStep].placeholder}
          name={steps[currentStep].name}
          className="rounded-lg p-3 border-2 border-neutral-600 outline-none focus:border-neutral-300"
        />
      </motion.div>

      <div className="flex gap-3 mt-7">
        <button
          className="px-4 py-2 rounded-lg flex-1 bg-neutral-800 cursor-pointer hover:bg-neutral-700"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 rounded-lg flex-1 bg-neutral-800 cursor-pointer hover:bg-neutral-700"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
