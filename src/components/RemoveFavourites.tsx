import { IconContext } from "react-icons";
import { MdRemoveCircle } from "react-icons/md";
const RemoveFavourites = () => {
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
                    <MdRemoveCircle />
                </div>
            </IconContext.Provider>
        </>
    );
};

export default RemoveFavourites;
