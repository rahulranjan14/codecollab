//importing react
import React from 'react'

//importing packages for router (Url configuration) 
import { BrowserRouter, Switch, Route} from "react-router-dom"

//importing different pages
import Homepage from './homepage/Homepage'
import Workpage from './workpage/Workpage'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/project/:projectid" exact component={Workpage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;