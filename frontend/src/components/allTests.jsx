import { useEffect, useState } from "react";
import Header from "./header";
import {Row, Col, Divider, Tag, Button} from "antd";
import axios from "axios";
import "../App.css";
function AllTests(){
    const [current, setCurrent] = useState("All");
    const [fullScreen, setFullScreen] = useState(false);
    const [test, setTest] = useState([{name:"a",date:"xx-xx-xxxx",time:"xx:xx pm",status:"Live"},{name:"b",status:"Live"},{name:"aa",date:"xx-xx-xxxx",time:"xx:xx pm",status:"Live"},{name:"bb",date:"xx-xx-xxxx",time:"xx:xx pm",status:"Old"},{name:"aaa",date:"xx-xx-xxxx",time:"xx:xx pm",status:"New"},{name:"aaaa",date:"xx-xx-xxxx",time:"xx:xx pm",status:"Live"},{name:"ab",date:"xx-xx-xxxx",time:"xx:xx pm",status:"Live"}]);
    const testData = async(label) => {
        try{
            const res = await axios.get(`http://localhost:5000/test/${label}`,{
                withCredentials:true
            });
            setTest(res.data);
        }
        catch(e){
            console.error(e.message);
            
        }
    }
    useEffect(() => {
    const handleFullScreenChange = () => {
      const currentlyFull = !!document.fullscreenElement;
      
      setFullScreen(currentlyFull);

      if (!currentlyFull) {
        console.log("User has exited full screen (Esc pressed or button clicked)");
      } else {
        console.log("User entered full screen");
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange); // For Safari
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);    // For Firefox

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
    };
  }, []);
    const handleTest = async(testId) => {
        const elem = document.documentElement; // Targets the whole page
        if (elem.requestFullscreen) {
        elem.requestFullscreen();
        }
    }
    return(
        <>
            <Header />
            <div className="test-container">
                <Row gutter={0} >
                    <div style={{
                        width:"auto",
                        backgroundColor:"#fff",
                        display:"flex",
                        flexDirection:"row",
                        borderRadius:"20px"}}>
                    {["All", "Upcoming", "Live", "Past"].map((label) => (
                    <Col key={label}>
                        <div style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: label === current ? "#1890ff" : "#fff", // Active state logic
                        color: label === current ? "#fff" : "#555",
                        //border: "1px solid #d9d9d9",
                        cursor: "pointer",
                        fontWeight: 500,
                        transition: "all 0.3s",
                        textAlign: "center",
                        //boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}
                        onClick={()=>(setCurrent(label),testData(current))}
                        >
                        {label}
                        </div>
                    </Col>
                    ))}
                    </div>
                </Row>
                <Divider style={{}}/>
                <div style={{ padding: "10px" , overflowY:"auto"}}>
      {test.map((t) => (
        <Row 
          key={t.name} 
          align="middle" 
          gutter={[16, 0]} // Adds 16px horizontal spacing between columns
          style={{ 
            background: '#fff', 
            marginBottom: '12px', 
            padding: '15px 20px', 
            borderRadius: '8px',
            border: '1px solid #f0f0f0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}
        >
          {/* Name Column */}
          <Col xs={24} sm={6}>
            <div style={{ fontWeight: '600', color: '#1890ff' }}>{t.name}</div>
          </Col>

          {/* Date Column */}
          <Col xs={12} sm={4}>
            <div style={{ color: '#595959' }}>{t.date}</div>
          </Col>

          {/* Time Column */}
          <Col xs={12} sm={4}>
            <div style={{ color: '#595959' }}>{t.time}</div>
          </Col>

          {/* Status Column */}
          <Col xs={12} sm={4}>
            <Tag color={t.status === 'Live' ? 'green' : 'blue'} style={{ borderRadius: '4px' }}>
              {t.status}
            </Tag>
          </Col>

          {/* Action Column */}
          <Col xs={12} sm={6} style={{ textAlign: 'right' }}>
            <Button 
              onClick={handleTest}
              type="primary" 
              size="middle"
              style={{ width: '100px' ,backgroundColor:t.status==="Old"?"#1890ff":"#27b155"}}
            >
              {t.status==="Old"?"Reattempt":"Attempt"}
            </Button>
          </Col>
        </Row>
      ))}
    </div>
            
            </div>
        </>
    )
}

export default AllTests;