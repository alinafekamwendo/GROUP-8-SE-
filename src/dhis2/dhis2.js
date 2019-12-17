import React,{Component}from 'react'
import './dhis2.css'
//import dhis_icon from '../dhis2_icons/dhis2.jpg'

class Dhis2 extends Component{

render(){
    return(
        <div>
        <div id="navtab">
        <ul class="nav nav-tabs" >
        <li class="active">
       
          <a href="#" class="title">DHIS2</a>
        </li>
        
      </ul></div><br/>
      <h1 > 
      Program Rule Variable
    </h1>
    <br/>
    <form  className="programForm">
    <input  placeholder="program {*}"></input>
    <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      select
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Link 1</a>
      <a class="dropdown-item" href="#">Link 2</a>
      <a class="dropdown-item" href="#">Link 3</a>
    </div>
  </div> 
    </form>
    <br/>
        <div id="wrapper">
        
    <div class="container">
    
    <div>
      <form className="form1"><br></br>
      <input   placeholder="program value{*}"/>
     <br/>
     <input   placeholder="program value{*}"/>
     <br/>
     <button >create</button>
     </form> 
     </div>
      
     <form className="form2"><br></br>
     <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Program
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
    <a class="dropdown-item" href="#">Link 3</a>
  </div>
  </div>
     <br/>
     
     <br/>
     <button >reset</button>
     </form> 
      
    </div>

</div>

        
        
        
        </div>
        
    )
}


}

export default Dhis2;