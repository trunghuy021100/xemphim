import React from 'react'
import './index.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './component/Navbar'
import Trangtru from './pages/Trangtru'
import Chitiet from './pages/Chitiet'
import Dangky from './login/Dangky'
import Dangnhap from './login/Dangnhap'
import Datghe from './datghe/Datghe'
import Footer from './component/Footer'



const App = () => {
  return (
   <Router>
     <Navbar></Navbar>
     <Switch>
       <Route exact path="/"><Trangtru></Trangtru></Route>
       <Route path="/chitiet/:maphim"><Chitiet></Chitiet></Route>
       <Route path="/dangkyvonao/"><Dangky></Dangky></Route>
       <Route path="/dangnhapvonao/"><Dangnhap></Dangnhap></Route>
       <Route path="/datghe/"><Datghe></Datghe></Route>
     </Switch>
     <Footer></Footer>
   </Router>
  )
}

export default App
