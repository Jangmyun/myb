import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";

function Write() {
  const [value, setValue] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex wrap min-h-screen w-full">
      <div className="w-full">
        <MDEditor
          value={value}
          preview={width < 1024 ? "edit" : "live"}
          onChange={setValue}
          textareaProps={{ placeholder: "Please enter Markdown text" }}
          height={600}
        />
      </div>
    </div>
  );
}

export default Write;
