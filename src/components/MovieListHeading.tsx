interface HeadingProps {
    heading: string;
}

const MovieListHeading: React.FC<{ props: HeadingProps }> = ({ props }) => {
    return (
        <div className="flex flex-row justify-between pr-3 pl-3 flex-wrap pt-4">
            <h1 className="text-5xl uppercase font-serif tracking-tight text-transparent bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text hover:text-white transition-all duration-700 focus:outline-none">
                {props.heading}
            </h1>
        </div>
    );
};

export default MovieListHeading;
