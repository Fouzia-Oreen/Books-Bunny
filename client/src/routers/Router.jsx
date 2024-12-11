import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    { 
        path : "/", 
        element: <App />, 
        children: [
            { path : "/", element: <div className="bg-color_2">Hello Home</div> }
        ]}
])

export default router;