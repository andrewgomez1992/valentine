import { motion } from "framer-motion";

function HeartsConfetti() {
  const hearts = Array.from({ length: 30 });

  return (
    <div className="hearts-confetti">
      {hearts.map((_, index) => {
        const randomX = Math.random() * 100; // Value between 0 and 100
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        const randomScale = 0.5 + Math.random();

        return (
          <motion.div
            key={index}
            className="heart"
            initial={{ y: "10%", opacity: 0, scale: randomScale }}
            animate={{ y: "110%", opacity: 1 }}
            transition={{
              delay: randomDelay,
              duration: randomDuration,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            style={{ left: `${randomX}vw` }} // Use viewport units here
          >
            ❤️
          </motion.div>
        );
      })}
    </div>
  );
}

export default HeartsConfetti;
