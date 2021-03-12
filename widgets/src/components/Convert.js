import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    if (debounceText) {
      doTranslation();
    }
  }, [language, debounceText]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceText(text);
    }, 800);

    return () => clearTimeout(timerId);
  }, [text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
