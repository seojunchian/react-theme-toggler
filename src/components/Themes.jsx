import { FaRegMoon, FaMoon, FaSpotify, FaFacebook } from "react-icons/fa";

const Themes = {
    light: {
        textContent: <FaRegMoon></FaRegMoon>,
        color: "#000",
        backgroundColor: "#828282",
    },
    dark: {
        textContent: <FaMoon></FaMoon>,
        color: "#FFF",
        backgroundColor: "#000",
    },
    spotify: {
        textContent: <FaSpotify></FaSpotify>,
        color: "#FFF",
        backgroundColor: "#1DB954",
    },
    facebook: {
        textContent: <FaFacebook></FaFacebook>,
        color: "#FFF",
        backgroundColor: "#4267B2",
    },
};

export default Themes;
