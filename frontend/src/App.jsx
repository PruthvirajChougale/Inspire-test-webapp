import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Tester from './components/tester';
import AllTests from './components/allTests';

function App() {
  return (
    <Router>
          <Layout style={{ minHeight: "100vh",backgroundColor: "#f3f3f3" }}>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/tester" element={<Tester />} />
                <Route path="/all-tests" element={<AllTests />} />
              </Routes>
          </Layout>
    </Router>
  );
}

export default App
