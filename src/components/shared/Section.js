import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({children, id}) {
    const ref=useRef(null);
    const isInView = useInView(ref, { once: true});
    return ( 
        <section 
            id={id} 
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
              }}
        >
            {children}
        </section>
     );
}

export default Section;