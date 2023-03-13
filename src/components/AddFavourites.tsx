import { IconContext } from "react-icons";
import { HiHeart } from "react-icons/hi";
const AddFavourite = () => {
    return (
        <>
            <IconContext.Provider
                value={{
                    color: "red",
                    size: "1em",
                    style: { verticalAlign: "middle", margin: ".25em" },
                }}
            >
                <div>
                    <HiHeart />
                </div>
            </IconContext.Provider>
        </>
    );
};

export default AddFavourite;
