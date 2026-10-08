import { Box,useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
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
