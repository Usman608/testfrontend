import './App.css';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Appointment from './components/Appointment';

const Path = {
  home: '/',
  appointment: '/appointment',
};

const routes = [
  {
    path: Path.home,
    element: <SignIn />,
  },
  {
    path: Path.appointment,
    element: <Appointment />,
  },
];

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Box>
  );
}

export default App;
