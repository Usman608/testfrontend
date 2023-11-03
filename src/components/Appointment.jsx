import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
const SignIn = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'];
  const startTime = '9am'; 
  const endTime = '1pm'; 

  return (
    <div>
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <img src={require('./logo.png')} alt="Pic Not found" width="10%" height="10%" style={{ marginRight: 'auto' }} />
         
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <table style={{ margin: 'auto', border: '1px solid black', borderCollapse: 'collapse', borderRadius: '10%' }}>
          <thead>
            <tr>
              <th></th>
              {days.map((day, index) => (
                <th key={index} style={{ border: '1px solid black', padding: '8px' }}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px', fontWeight: 'bold' }}>{time}</td>
                {days.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    style={{
                      border: '1px solid black',
                      padding: '8px',
                      backgroundColor: time === startTime || time === endTime ? 'red' : 'white',
                    }}
                  >
                    {/* Add data cells for each day here */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SignIn;
