import React from 'react'
import './App.css'
import About from './pages/OtherPages/About';
import Contact from './pages/OtherPages/Contact';
import Resources from './pages/OtherPages/Resources';
import Home from '.';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootsLayout from './layouts/Rootslayout';
import SignUp from './pages/forms/SignUp';
import PersonalDashboard from './pages/Dashboard/PersonalDashboard';
import Settings from './pages/Dashboard/Settings';
import Challenges from './pages/Dashboard/Challenges';
import PostWaste from './pages/Dashboard/PostWaste';
import UserDashboard from './pages/OtherPages/UserDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootsLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resources', element: <Resources /> },
      { path: 'userDashboard', element: <UserDashboard /> },
      { path: 'personalDashboard', element: <PersonalDashboard /> },
      { path: 'signUp', element: <SignUp/> },
      
      { path: 'settings', element: <Settings/> },
      { path: 'challenges', element: <Challenges/> },
      { path: 'postWaste', element: <PostWaste/> },
      
      
    ],
  },
]);



function App() {

 return (
      <RouterProvider router={router} />
  );
}

export default App
