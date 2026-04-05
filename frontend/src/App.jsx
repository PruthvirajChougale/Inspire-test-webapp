import { useState } from 'react'
//import './App.css'
import axios from 'axios'
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Tester from './components/tester';

function App() {
  return (
    <Router>
          <Layout style={{ minHeight: "100vh", background: "#fff" }}>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/tester" element={<Tester />} />
              </Routes>
          </Layout>
    </Router>
  );
}

export default App
