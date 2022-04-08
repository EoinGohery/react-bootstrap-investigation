
import './App.css';
import { Button, Alert, Accordion, Modal, Carousel, Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomPage';
import { ContactPage } from './pages/ContactPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { UserNavBar } from './components/UserNavBar';
import { UserDetailPage } from './pages/UserDetailPage';
import { UserListPage } from './pages/UserListPage';

function App() {
  return (
    <>
      <UserNavBar></UserNavBar>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/users" element={<UserListPage />}></Route>
          <Route path="/user/id:" element={<UserDetailPage />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
