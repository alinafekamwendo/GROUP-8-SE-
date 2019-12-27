import React, { Component } from 'react';
 class ProgramDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }  
   
     render(){
         
         return(
             <div>
                 
                 <h2>Variables</h2>
              
              <form>

                  <div className="form-group">
                      <label>Data elements</label>
                      <select className="form-control" id="Data elements">
                          <option>AVC</option>
                          <option>NRC</option>
                          <option>VISITS</option>
                          <option>KK</option>
                          <option>FINAL</option>
                      </select>

                  </div>

              </form>
             
           <div className="card card-body mt-5">
              <table className="table">
                  
                      <tr>
                          <th>Program</th>
                          <th>name</th>
                          <th></th>
                      
                      </tr>
                  
                  
                              <tr >
                                  <td>jambo</td>
                                  <td>chidziwisano</td>
                                  <td>
                                      <button>delete</button>
                                      <button>edit</button>
                                  </td>
                                  
                              </tr>
                       
              </table>
              <button  className="btn btn-dark btn-block mt-3">Reset</button>

      </div>
             </div>
         )}
     }
 
 export default ProgramDetails;