import { colorSet } from "../utils/constants";
import { useUser } from "../context/userContext";
import { useEffect } from "react";

export default function Themechanger() {
  const {themeHandler} = useUser()
  return (
    <><div>
      {colorSet?.map((item, index) => (
        <button
          key={index}
          style={{ background: item["--primary-color"], color:item["--text-color"]}}
          onClick={() =>{themeHandler(index)} }
        >
          Color Set {index}
        </button>
      ))}
    </div>

    </>
  );
}
