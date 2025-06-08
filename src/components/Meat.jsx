import { useState } from "react";
import Themes from "./Themes.jsx";

const Meat = () => {
    const themesObject = Object.keys(Themes);
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

    function handleChange() {
        setCurrentThemeIndex((prevIndex) =>
            themesObject.length - 1 == prevIndex
                ? (prevIndex = 0)
                : (prevIndex += 1)
        );
    }
    return (
        <>
            <div style={Themes[themesObject[currentThemeIndex]]}>arka plan</div>
            <div>
                <button onClick={handleChange}>
                    {Themes[themesObject[currentThemeIndex]].textContent}
                </button>
            </div>
        </>
    );
};

export default Meat;
