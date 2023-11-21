import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { RouteList } from "../utilis/RouteList";


const AppRouter = () => {
return(

    <Router>
        <Routes>
            {
                RouteList.map((element,i)=> {
                    return <Route key={i} path={element.path} element={element.element}/>
                })
            }
        </Routes>
    </Router>

)



}

export default AppRouter