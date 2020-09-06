import React from 'react';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './Component/NotMatch/NotMatch';
import PostDetails from './Component/PostDetails/PostDetails';



function App() {
 
  return (
    <div >
        
        
     
       <Header></Header>
      
     <Router>
       <Switch>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="/post/:postid">
          <PostDetails></PostDetails>
         </Route>
        
         <Route  path="*">
         <NotMatch></NotMatch>
         </Route>

       </Switch>
     </Router>
    
          
    </div>
  );
}





 




export default App;
