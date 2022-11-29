import { Box,useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const txt = `I'm Arista Indrajaya
            I'm a full-stack software and blockchain developer based out of Depok, 
            Indonesia, and I create informative, accesible, and fast website. 
            I prever leave every bit of code I touch more performant and accessible development.

            Apart from full-stack and blockchain coding laborer, 
            I'm also passionate about listening and 
            sharing what I've learned both with my teammates and 
            the local or broader web and blockchain community. 
            I've gained so much from others sharing their skills and knowledge, 
            and willing to not only perform web development work 
            but also collaborate and helps other so we can improve our work, 
            skill, and team capability.

            I'm trying to tend to help bring out a cleared sense of purpose 
            and encourage clearer team communication, 
            resulting in better team results 
            and a higher sense of satisfaction for all involved.
            
            - think
            - learn
            - code
            - test 🥝`;
    const txtFix = `I'm Arista, Nice to meet you 👋.
    Welcome to my personal page! Please feel free to explore this site and discover some of my exciting projects 😄
    `
    const speed = 25;
    const timer = setTimeout(() => {
      typeItOut(txtFix, speed, setText, index, setIndex);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  function typeItOut(txt, speed, setText, index, setIndex) {
    if (index < txt.length) {
      setText((prevText) => prevText + txt.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
      setTimeout(() => {
        typeItOut(txt, speed, setText, index + 1, setIndex);
      }, speed);
    }
  }

  return (
    <Box
      bg={useColorModeValue('#A4907C', '#2b312d')}
      className="hero__terminal">
      <pre>
        {/* Place your demo code here */}
        <code className="shell-session demo">bonjour ~ $ {text}</code>
      </pre>
    </Box>
  );
};

export default Typewriter;
