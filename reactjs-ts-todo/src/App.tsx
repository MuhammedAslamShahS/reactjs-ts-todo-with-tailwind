import "./App.css";
import ImageLoader from "./components/ImageLoader";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
    return (
        <div className="h-[100vh] flex flex-col justify-center in-checked:">
            <ImageLoader />

            <div className="w-[350px]">
                <form className="mb-5">
                    <input type="text" className="w-full p-2 rounded-sm mb-2 bg-white outline-none" />
                    <Button
                        className="w-full p-2 "
                        type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                </form>
                <div className="h-52 overflow-y-auto">
                    <div className="flex justify-between items-center border border-slate-600 pl-2 mr-1 py-2">
                        <p className="text-white">JS</p>
                        <Button
                         variant="outlined" 
                         color="error" 
                         startIcon={<DeleteIcon />}
                         >
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
