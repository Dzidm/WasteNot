import React from 'react'
import './App.css'
import About from './pages/OtherPages/About';
import Contact from './pages/OtherPages/Contact';
import Resources from './pages/OtherPages/Resources';
import Home from '.';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootsLayout from './layouts/RootsLayout';
import SignUp from './pages/forms/SignUp';
import UserDashboard from './pages/OtherPages/UserDashboard';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/donorDashboard/Overview';
import Challenges from './pages/donorDashboard/Challenges';
import Settings from './pages/donorDashboard/Settings';
import PostWaste from './pages/donorDashboard/PostWaste';
import DonorListings from './pages/OtherPages/DonorListings';
import SingleListings from './pages/OtherPages/SingleListings';
import Article1 from './pages/resourcesMaterial/Article1';
import Article2 from './pages/resourcesMaterial/Article2';
import Article3 from './pages/resourcesMaterial/Article3';
import Article4 from './pages/resourcesMaterial/Article4';
import Article5 from './pages/resourcesMaterial/Article5';



function App() {
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
      { path: 'signUp', element: <SignUp/> },
      { path: 'listings', element: <DonorListings/> },
      { path: 'listings/:id', element: <SingleListings/> },
      { path: 'userDashboard', element: <UserDashboard /> },



      { path: 'article1', element: <Article1 /> },
      { path: 'article2', element: <Article2 /> },
      { path: 'article3', element: <Article3 /> },
      { path: 'article4', element: <Article4 /> },
      { path: 'article5', element: <Article5 /> },




    
    ],
  },

  {path: '/dashboard', 
       element: <DashboardLayout/>,
       children: [{index: true, element:<Overview/>},

      { path: 'settings', element: <Settings/> },
      { path: 'challenges', element: <Challenges/> },
      { path: 'postWaste', element: <PostWaste/> },

       ]
      },
]);

return (
      <RouterProvider router={router} />
  );

}



export default App
