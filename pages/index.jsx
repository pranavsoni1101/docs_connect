import Home from "./home/index";
import { useSession } from "next-auth/react";


const App = () => {
    
    const {data: session, status} = useSession();
    console.log("session", session);
    return(
        <Home />
    )
}

export default App;