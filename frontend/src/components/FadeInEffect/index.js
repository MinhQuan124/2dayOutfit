import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInEffect = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // kích hoạt 1 lần
    threshold: 0.2, // Kích hoạt khi 20% phần tử xuất hiện trong viewport
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInEffect;
