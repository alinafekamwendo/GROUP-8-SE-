import React, { Component } from 'react';

class ProgramInput extends Component {

        

    render(){
        return(
            <div>
            <form>

                            <div className="form-group">

                                <select className="form-control" id="program">
                                    <option>HIV</option>
                                    <option>AIDS</option>
                                    <option>MALARIA</option>
                                    <option>SPHYLIS</option>
                                    <option>GONORRHEA</option>
                                </select>

                            </div>

                        </form>
                        <div className="card card-body">
                        <h2 className="card-header">prgram rule details</h2>

                        <form autoComplete="off">
                            
                                <label>Program</label>
                                    
                                    <input
                                        
                                        className="form-control"
                                        name="program"
                                        placeholder=" Program(*)"
                                    />
                            
                                <label>Name</label>
                                    
                                    <input
                                        
                                        className="form-control"
                                        name="name"
                                        type="text"
                                        placeholder="program name(*)"
                                    /> 
                            <button  className="btn btn-dark btn-block mt-3">Create</button>
                        </form>
                    </div>
                    </div>

        );
    }
}
export default ProgramInput;