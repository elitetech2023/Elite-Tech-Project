import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Notifications from './Screens/Notifications';
import Book from './Screens/WalkInBooking';
import Life from './Screens/Life';
import Login from './components/Login';
import ManageNotifications from './Screens/ManageNotifications';
import TimeMatters from './Screens/TimeMatters';
import Depression from './Screens/Depression';
import StrengthTraining from './Screens/StrengthTraining';
import LackofMotivation from './Screens/LackofMotivation';
import LimitingAcademicStress from './Screens/LimitingAcademicStress';
import PsyChadTipSheet from './Screens/PsyChadTipSheet';
import Others from './Screens/Others';
import FileUpload from './Screens/fileUpload';
import FileUploadDepression from './Screens/FileUploadDepression';
import FileUploadStrengthTraining from './Screens/fileUploadStrengthTraining';
import FileUploadMotivation from './Screens/FileUploadMotivation';
import FileUploadAcademicStress from './Screens/FileUploadAcademicStress';
import FileUploadTipSheet from './Screens/FileUploadTipSheet';
import FileUploadOthers from './Screens/FileUploadOthers';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
      
      <Routes>
        <Route  path='/forgotPassword' element={<ForgotPassword/>} />
      </Routes>

      <Sidebar>
        <Routes>
          <Route  path="/"element={<Home/>}/>
          <Route  path="/home"element={<Home/>}/>
          <Route  path="/notifications"element={<Notifications/>}/>
          <Route  path="/book"element={<Book/>}/>
          <Route  path="/life"element={<Life/>}/>
          <Route  path="/manageNotifications"element={<ManageNotifications/>}/>
          <Route  path="/block1" element={<TimeMatters />} />
          <Route  path='/depression' element={<Depression/>} />
          <Route  path='/StrengthTraining' element={<StrengthTraining/>} />
          <Route  path='/lackofMotivation' element={<LackofMotivation/>}/>
          <Route  path="/limitingAcademicStress" element={<LimitingAcademicStress />} />
          <Route  path="/psyChadTipSheet" element={<PsyChadTipSheet />} />
          <Route  path="/others" element={<Others />} />
          <Route  path="/fileUpload" element={<FileUpload />} />
          <Route  path="/fileUploadDepression" element={<FileUploadDepression />} />
          <Route  path="/fileuploadStrengthTraining" element={<FileUploadStrengthTraining />} />
          <Route  path="/fileUploadMotivation" element={<FileUploadMotivation />} />
          <Route  path="/fileUploadAcademicStress" element={<FileUploadAcademicStress />} />
          <Route  path="/fileUploadTipSheet" element={<FileUploadTipSheet />} />
          <Route  path="/fileUploadOthers" element={<FileUploadOthers />} />
        </Routes>
      </Sidebar>

      </BrowserRouter>
    
  )
}

export default App

