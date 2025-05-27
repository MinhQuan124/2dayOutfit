import { motion } from "framer-motion";

const SpinnerLoading = () => (
  <motion.div
    className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
);

export default SpinnerLoading;
