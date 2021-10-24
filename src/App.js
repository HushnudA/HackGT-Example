import { render } from '@testing-library/react';
import React, { useCallback, useState } from 'react';
import Select from 'react-select';
import { ReactDOM  } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Subheader from './Components/Subheader';
    

 
function App() 
{
  const statusLocations = [
    {
      value: 0,
      label: "ATDC (Tech Square)"
    },
    {
      value: 1,
      label: "Catholic Center"
    },
    {
      value: 2,
      label: "CRC"
    },
    {
      value: 3,
      label: "Crecine Residence Hall"
    },
    {
      value: 4,
      label: "Exhibiton Hall"
    },
    {
      value: 5,
      label: "Field"
    },
    {
      value: 6,
      label: "Folk"
    },
    {
      value: 7,
      label: "GLC"
    },
    {
      value: 8,
      label: "GT Connector"
    },
    {
      value: 9,
      label: "Klaus"
    },
    {
      value: 10,
      label: "North Ave South"
    },
    {
      value: 11,
      label: "Skiles"
    },
    {
      value: 12,
      label: "Smith"
    }
  ];

  const [status, setStatus] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0]);
  
 
  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedSet, setSelectedSet] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }

  // handle onChange event of the dropdown
  const handleChange2 = e => {
    setSelectedSet(e);
  }

  const defaultValues = {
    building: "",
    room: 0,
    rating: 0,
  };

  function resetStatus() {
    const temp = [...status];
    temp[selectedOption.value] = 0;
    setStatus(temp);
  }
  
  function setStatusToOne() {
    const temp = [...status];
    temp[selectedSet.value] = 1;
    console.log({...status[selectedSet.value]});
    setStatus(temp);
  }
 
  return (
    
    <div className="">

      <br></br>
      <Header/>
      <br></br>
      <Subheader/>
      <br></br><br></br>

      
      <div class = "container">
        <div class = "row">
          <div class="col">
           <h1 align="center"> Map of Ping Pong Tables </h1>
            <p align="center">
            <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1kZCZEnpTN6BoSs2fmV2sOsXnr-fmBDp-" width="768" height="576"></iframe>
            </p>
          </div>
          <div class="col">
            <br></br><br></br><br></br><br></br><br></br><br></br>
              <div class="center">
                <h4 align="center">Know of a table? Fill out the info below!</h4>
                <Form/>
              </div>
          </div>
        </div>
      </div>
      
      
      <div class="row">
        <div class = "col">
          <h4 align="center"> Check if someone is playing at a table!</h4>
          <Select
            placeholder="Select Option"
            value={selectedOption} // set selected value
            options={statusLocations} // set list of the data
            onChange={handleChange} // assign onChange function
            />
          <div class="align-self-center">
            {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
              {status[selectedOption.value] === 0 &&
                <button align="center" type="button" class="btn btn-static btn-danger" onClick={setStatusToOne}>
                  Vacant
                </button>
              }
              {status[selectedOption.value] === 1 &&
                <div class="inline-buttons">
                  <div class = "danger">
                  <button align="center" type="button" class="btn btn-static btn-success" onClick={setStatusToOne}>
                  In Play
                  </button> 
                  </div>
                  
                  <button align="center" type="button" class="btn btn-primary" onClick={resetStatus}>Reset Status</button>
                </div>
              }
            </div>}
          </div>
        </div>
        
        <div class="col">
        <h4 align="center">Let site visitors know you're at a table!</h4>
          <Select
          placeholder="Set Option"
          value={selectedSet} // set selected value
          options={statusLocations} // set list of the data
          onChange={handleChange2} // assign onChange function
          />

          {selectedSet && <div style={{ marginTop: 20, lineHeight: '25px' }}>
            {status[selectedSet.value] === 0 &&
              <div>
                <button align="center" type="button" class="btn btn-static btn-danger" onClick={setStatusToOne}>
                  Status: Vacant
                </button>
                <button align="center" type="button" class="btn btn-primary" onClick={setStatusToOne}>
                  Play!
                </button> 
              </div>
            }
          </div>}
        </div>
      </div>
    </div>
  );
}
 
export default App;