import './App.css'
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ButtonTest from './features/test/button-test';

function App() {
  return (
    <>
      <Router>
        <Layout style={{ minHeight: "100vh",backgroundColor: "#ffffff" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/button-test" element={<ButtonTest />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
