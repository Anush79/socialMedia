import { colorSet } from "../utils/constants";
export default function Themechanger() {
  const changeTheme = (index) => {
    const root = document.documentElement;
    Object.keys(colorSet[index]).forEach((colorKey) => {
      root.style.setProperty(colorKey, colorSet[index][colorKey]);
    });
  };

  return (
    <><div>
      {colorSet?.map((item, index) => (
        <button
          key={index}
          style={{ background: item["--primary-color"], color:item["--text-color"]}}
          onClick={() => changeTheme(index)}
        >
          Color Set {index}
        </button>
      ))}
    </div>

    </>
  );
}
