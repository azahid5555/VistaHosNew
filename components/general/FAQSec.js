"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeadingFourAnimated from "./HeadingFourAnimated";

export default function FAQSec(props) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div className="faq_section position-relative">
      <div className="accordion-con">
        {props.questions.map((q) => (
          <div className="accordion-item-con" key={q.id}>
            <button
              className="accordion-item-button justify-content-between"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              <HeadingFourAnimated text2={q.question} />
              {activeQuestion === q.id ? (
                <i class="bi bi-plus"></i>
              ) : (
                <i class="bi bi-dash"></i>
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.3 },
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  className="answers_con"
                >
                  <p className=" Vista_para_sm">{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
