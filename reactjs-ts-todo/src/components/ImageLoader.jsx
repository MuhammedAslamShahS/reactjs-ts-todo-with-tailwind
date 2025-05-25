const ImageLoader = () => {
    return (
        <div className="flex items-center bg-amber-300 mb-8">
            <img
                className="w-28 h-28 0bject-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
            />
            <span className="mx-4"> + </span>
            <img
                className="w-28 h-28 0bject-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="TypeScript Logo"
            />
        </div>
    );
};

export default ImageLoader;
