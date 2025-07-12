"use client";

import React, { useState, useRef } from "react";
import Expenses from "@/components/budget-assistant/Expenses";
import Tickets from "@/components/budget-assistant/Tickets";
import Summary from "@/components/budget-assistant/Summary";
import StepProgress from "@/components/budget-assistant/StepProgress";
import { motion, AnimatePresence } from "framer-motion";
import dcTalent from "@/assets/img/logo/DC-Talent.avif";
import EventInfo from "@/components/budget-assistant/EventInfo";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import BigText from "@/components/big-text";

function BudgetAssistantForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const [step, setStep] = useState(1);

  const nextStep = () =>
    setStep((prev) => {
      const next = prev + 1;
      return next;
    });

  const prevStep = () =>
    setStep((prev) => {
      const prevValue = Math.max(prev - 1, 1);
      return prevValue;
    });

  // const [scrollPercent, setScrollPercent] = useState(0);
  // const formRef = useRef(null);

  // const handleScroll = () => {
  //   const el = formRef.current;
  //   const scrollTop = el.scrollTop;
  //   const scrollHeight = el.scrollHeight - el.clientHeight;
  //   const scrolled = (scrollTop / scrollHeight) * 100;
  //   setScrollPercent(scrolled);
  // };

  const stepVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const onSubmit = (data: any) => {
    console.log(data);
    const formData = localStorage.setItem(
      "dc-formData",
      JSON.stringify([{ name: data.name, email: data.email }])
    );
  };

  return (
    <Wrapper showBackToTop={false}>
      <HeaderEleven />
      <div className="flex items-center justify-center bg-gray-100 m-[10px] !p-[15px]">
        <div className="bg-white shadow-lg w-[600px] p-4 rounded-lg mt-40 mb-40">
          <StepProgress step={step} total={5} />
          <div className="p-8 overflow-y-auto">
            <Image
              src={dcTalent}
              className="h-[30px] w-[80px] mx-auto mb-2 mt-4"
              alt="dc-logo"
            />
            <h1 className="text-2xl text-center mb-6 font-bold text-gray-800">
              Budget Assistant
            </h1>

            <p className="text-center text-sm text-gray-500">
              Step {step} of 5
            </p>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="!text-md font-semibold text-center text-gray-700 mb-4">
                      Your Information
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-4 p-2">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Name
                        </label>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && (
                          <span className="text-red-400">Name is required</span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Email
                        </label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                          <span className="text-red-400 ">
                            Email is required
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!isValid}
                      onClick={nextStep}
                      className={`mt-6 w-full !text-white py-2 rounded ${
                        isValid
                          ? "!bg-purple-500 !hover:bg-purple-700 cursor-pointer"
                          : "!bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Next
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <EventInfo prevStep={prevStep} nextStep={nextStep} />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Tickets nextStep={nextStep} prevStep={prevStep} />
                </motion.div>
              )}
              {step === 4 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Expenses nextStep={nextStep} prevStep={prevStep} />
                </motion.div>
              )}
              {step === 5 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Summary setStep={setStep} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <BigText />
      <FooterTwo topCls="" />
    </Wrapper>
  );
}

export default BudgetAssistantForm;
