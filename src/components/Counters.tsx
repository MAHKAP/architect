import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Counters = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // starts when 30% visible
  });

  const counterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-16 bg-gray-800 text-white text-center"
    >
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Counter 1 */}
        <motion.div
          custom={0.2}
          variants={counterVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h4 className="text-4xl font-bold">
            {inView && <CountUp end={200} duration={2.5} delay={0.3} />}+
          </h4>
          <p>Projects Completed</p>
        </motion.div>

        {/* Counter 2 */}
        <motion.div
          custom={0.4}
          variants={counterVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h4 className="text-4xl font-bold">
            {inView && <CountUp end={15} duration={2.5} delay={0.6} />}+
          </h4>
          <p>Years Experience</p>
        </motion.div>

        {/* Counter 3 */}
        <motion.div
          custom={0.6}
          variants={counterVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h4 className="text-4xl font-bold">
            {inView && <CountUp end={100} duration={2.5} delay={0.9} />}+
          </h4>
          <p>Happy Clients</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Counters;
