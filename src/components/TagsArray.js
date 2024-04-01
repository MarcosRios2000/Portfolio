import { useState, useEffect } from "react";

const parseTags = (mdContent) => {
  const accum = [];
  const lines = mdContent.split("\n");
  
  for (let i = 0; i < lines.length; i++) {
    const value = lines[i].trim();
    
    accum.push({
      value
    });
  }
  return accum;
};

const TagsArray = (file) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch(`/content/${file}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.text();
      })
      .then((mdContent) => {
        setTags(parseTags(mdContent));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [file]);

  return tags;
};

export default TagsArray;
