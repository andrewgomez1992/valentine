/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import spongebob from "./assets/spongebob.png";
import "./App.css";
import HeartsConfetti from "./HeartsMotion";

// Update fade-in variant to slow the text reveal
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 5 } },
};

// OpenCard Component – the first screen that says "Open"
function OpenCard({ onOpen }) {
  return (
    <div className="card open-card" onClick={onOpen}>
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="open-text"
      >
        Open
      </motion.h1>
    </div>
  );
}

// SpecialCard Component – displays the first special message
function SpecialCard({ onContinue, onBack }) {
  return (
    <div className="card special-card">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="special-text"
      >
        From the moment I first saw you, I knew this was going to be something
        special.
      </motion.h2>
      <div className="button-group">
        <button className="continue-btn" onClick={onContinue}>
          Continue
        </button>
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

// DatesCard Component – displays the message about looking forward to many dates
function DatesCard({ onContinue, onBack }) {
  return (
    <div className="card dates-card">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="dates-text"
      >
        I know we&apos;ve only been on a few dates but I can&apos;t wait for
        many more.
      </motion.h2>
      <div className="button-group">
        <button className="continue-btn" onClick={onContinue}>
          Continue
        </button>
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

// FairytaleCard Component – new card with the fairytale message and p.s. text
function FairytaleCard({ onContinue, onBack }) {
  const [showPS, setShowPS] = useState(false);

  const handleContinue = () => {
    if (!showPS) {
      setShowPS(true);
    } else {
      onContinue();
    }
  };

  return (
    <div className="card fairytale-card">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="fairytale-text"
      >
        This is the part where we make our fairytale come true.
      </motion.h2>
      {showPS && (
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="ps-text"
          style={{ fontSize: "1rem", marginTop: "10px" }}
        >
          You are so hot btw.
        </motion.p>
      )}
      <div className="button-group">
        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

// QuestionCard Component – asks "Will you be my valentine?"
function QuestionCard({ onYes, onNo, onBack }) {
  return (
    <div className="card question-card">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="question-text"
      >
        Will you be my valentine?
      </motion.h2>
      <div className="button-group">
        <button className="yes-btn" onClick={onYes}>
          Yes
        </button>
        <button className="no-btn" onClick={onNo}>
          No
        </button>
      </div>
      <button className="back-btn" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

// DetailsCard Component – shown when "Yes" is clicked
function DetailsCard({ onBack }) {
  return (
    <div className="card details-card">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="details-text"
      >
        FUCK YEAH!
      </motion.h2>
      <motion.p variants={fadeIn} initial="hidden" animate="visible">
        Text me this code babe lol:
      </motion.p>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="code"
      >
        MYHEART2025
      </motion.div>
      <motion.p variants={fadeIn} initial="hidden" animate="visible">
        I&apos;ll send you further details.
      </motion.p>
      <button className="back-btn" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

// RejectedStep1 Component – first rejection screen "Are you sure?"
function RejectedStep1({ onContinue, onBack }) {
  return (
    <div className="card rejected-card">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="rejected-text"
      >
        Are you sure?
      </motion.h2>
      <div className="button-group">
        <button className="continue-btn" onClick={onContinue}>
          Yes
        </button>
      </div>
      <button className="back-btn" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

// RejectedStep2 Component – second rejection screen "Seriously?"
function RejectedStep2({ onContinue, onBack }) {
  return (
    <div className="card rejected-card">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="rejected-text"
      >
        Seriously?
      </motion.h2>
      <div className="button-group">
        <button className="continue-btn" onClick={onContinue}>
          Continue
        </button>
      </div>
      <button className="back-btn" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

// RejectedStep3 Component – final rejection screen showing the image
function RejectedStep3({ onBack }) {
  return (
    <div className="card rejected-card">
      <motion.img
        src={spongebob}
        alt="Spongebob"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: "100%" }}
      />
      <button className="back-btn" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

// Main App Component with updated stage flow
function App() {
  // Stages: 'closed', 'special', 'dates', 'fairytale', 'question', 'details', 'reject1', 'reject2', 'reject3'
  const [stage, setStage] = useState("closed");

  const handleOpen = () => setStage("special");
  const handleSpecialContinue = () => setStage("dates");
  const handleDatesContinue = () => setStage("fairytale");
  const handleFairytaleContinue = () => setStage("question");
  const handleYes = () => setStage("details");
  const handleNo = () => setStage("reject1");

  const handleReject1Continue = () => setStage("reject2");
  const handleReject2Continue = () => setStage("reject3");

  // Back button logic:
  // - From "special": back goes to "closed"
  // - From "dates": back goes to "special"
  // - From "fairytale": back goes to "dates"
  // - From "question": back goes to "fairytale"
  // - From "details": back goes to "question"
  // - From "reject1": back goes to "question"
  // - From "reject2": back goes to "reject1"
  // - From "reject3": back goes to "reject2"
  const handleBack = () => {
    if (stage === "special") {
      setStage("closed");
    } else if (stage === "dates") {
      setStage("special");
    } else if (stage === "fairytale") {
      setStage("dates");
    } else if (stage === "question") {
      setStage("fairytale");
    } else if (stage === "details") {
      setStage("question");
    } else if (stage === "reject1") {
      setStage("question");
    } else if (stage === "reject2") {
      setStage("reject1");
    } else if (stage === "reject3") {
      setStage("reject2");
    }
  };

  return (
    <div className="app">
      {stage === "closed" && <OpenCard onOpen={handleOpen} />}
      {stage === "special" && (
        <SpecialCard onContinue={handleSpecialContinue} onBack={handleBack} />
      )}
      {stage === "dates" && (
        <DatesCard onContinue={handleDatesContinue} onBack={handleBack} />
      )}
      {stage === "fairytale" && (
        <FairytaleCard
          onContinue={handleFairytaleContinue}
          onBack={handleBack}
        />
      )}
      {stage === "question" && (
        <QuestionCard onYes={handleYes} onNo={handleNo} onBack={handleBack} />
      )}
      {stage === "details" && (
        <>
          <HeartsConfetti />
          <DetailsCard onBack={handleBack} />
        </>
      )}
      {stage === "reject1" && (
        <RejectedStep1 onContinue={handleReject1Continue} onBack={handleBack} />
      )}
      {stage === "reject2" && (
        <RejectedStep2 onContinue={handleReject2Continue} onBack={handleBack} />
      )}
      {stage === "reject3" && <RejectedStep3 onBack={handleBack} />}
    </div>
  );
}

export default App;
