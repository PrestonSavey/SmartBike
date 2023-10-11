import { useState } from 'react'
import './App.css'
import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Popup from 'reactjs-popup';
import LockIcon from '@mui/icons-material/Lock';
import 'reactjs-popup/dist/index.css';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Header with title and menu icon */}
      <div className="header"> 
      <div className ="row">
      <div className="menu">
        <MenuOutlinedIcon></MenuOutlinedIcon>
      </div>
      <div className='title'>Current Trek</div>
        
        </div>
      </div>
      {/* Side Menu with multiple options to open pop ups */}
      <div style={{ display: 'flex' }}>
        <div className='sidebar'>
          <div className="row rowItem">
            {/* Pop up containing recent trek data */}
            <Popup trigger=
                {<b> My Treks </b>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                              <div className='lockTitle'>
                                <h4>
                                  Recent Treks
                                </h4>
                              </div>
                              <div>
            {/* Accordion Containing recent trek data */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 10,
                        }}
                    >
                        Trek 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <span className='recentTrekData'>
                   <div className='trek'><b>Location:</b> Sharon Woods, Cincinnati</div>
                    <div className='trek'><b>Distance:</b> 6.4 mi</div>
                    <div className='trek'><b>Calories Burned:</b> 600 cals</div>
                    <div className='trek'><b>Top Speed:</b> 600 mph</div>
                    <div className='trek'><b>Avg Heart Rate:</b> 150 bpm</div>
                    <div className='trek'><b>Avg Altitude:</b> 130 m</div> 
                  </span>
                    
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 10,
                        }}
                    >
                        Trek 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <span className='recentTrekData'>
                   <div className='trek'><b>Location:</b> Eden Park, Cincinnati</div>
                    <div className='trek'><b>Distance:</b> 3.4 mi</div>
                    <div className='trek'><b>Calories Burned:</b> 200 cals</div>
                    <div className='trek'><b>Top Speed:</b> 100 mph</div>
                    <div className='trek'><b>Avg Heart Rate:</b> 10 bpm</div>
                    <div className='trek'><b>Avg Altitude:</b> 190 m</div> 
                  </span>
                </AccordionDetails>
            </Accordion>
        </div>
                            </div>
                            <div className='enterButton'>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
              </Popup>
            
          </div>
          <div className="row rowItem">
          <Popup trigger=
                {<b> Recommended Treks </b>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                              <div className='lockTitle'>
                                <h4>
                                  Recommended Treks
                                </h4>
                              </div>
                              <div>
            {/* Accordion Containing recommended treks */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 10,
                        }}
                    >
                       Hueston Woods State Park 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <span> 
                    <div>
                      <b>Summary: </b>Hueston Woods State Park is a beautiful state park that overlooks Acton Lake. The park offers many trails, fishing, boating, and numerous outdoor activites. There are multiple trails of varying distances and elevation changes, perfect for bikers of any experience level.
                    </div>
                    <div>
                        <img src='https://s3-media2.fl.yelpcdn.com/bphoto/f98M70hOntvR3imBeVkUWA/o.jpg' className="trekImg"></img>
                    </div>
                  </span>  
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 10,
                        }}
                    >
                        Sawyer Point/Yeatman's Cove
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <span> 
                    <div>
                      <b>Summary:</b> Sawyer Point/Yeatman's Cove overlooks the Ohio River and is a beautiful place to spend an afternoon. The bike trails are not as long and are more for casual riders. On your ride, you can stop to see the many pieces of public art, playgrounds, and even stop for a game of volleyball, pickleball, or tennis.
                    </div>
                    <div>
                        <img src='https://live.staticflickr.com/8688/16873555296_0bb54dcf44_b.jpg' className="trekImg"></img>
                    </div>
                  </span>  
                </AccordionDetails>
            </Accordion>
        </div>
                            </div>
                            <div className='enterButton'>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
              </Popup> 
          
          </div>
          <div className="row rowItem">
            <Popup trigger=
                {<b> Lock Bike </b>} 
                modal nested>
                {
                    close => (
                        <div className='lockModal'>
                            <div className='content'>
                              <div className='lockTitle'>
                                <LockIcon></LockIcon>
                                <div>
                                  Bike is now locked. Enter password to unlock.
                                </div>
                              </div>
                              <input className='textBox'></input>

                            </div>
                            <div className='enterButton'>
                                <button onClick=
                                    {() => close()}>
                                        Enter
                                </button>
                            </div>
                        </div>
                    )
                }
              </Popup>
                </div>
          <div className="row rowItem">
          <Popup trigger=
                {<b> Profile </b>} 
                modal nested>
                {
                    close => (
                        <div>
                          
                            <div className='profileModal'>
                              <img src='https://discourse.disneyheroesgame.com/uploads/default/original/3X/f/c/fc71eb858ec44cf1cbe70fe19faad3fed983d188.jpeg' className='profileImg'></img>
                            </div>
                            <span className='profileData'>
                            <div className='profileDetails'>
                              <div><b>Username:</b> GrouchyTrashBoy74 </div>
                              <div><b>Total Miles Biked:</b> 600 mi</div>
                              <div><b>Favorite Trek Location: </b> Sharon Woods</div>
                            </div>
                            </span>
                            
                            <div className='closeButton'>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                          
                            
                        </div>
                    )
                }
              </Popup>  
          </div>
        </div>
         {/* Google Map with iframe snippet from iframe */}
        <div className='main'>
          <div className="map" id="map">
          <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=2302%20Chickasaw%20St&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
         {/* Right side bar containing data for current trek */}
        </div>
        <div className='stats'>
          <div className="trekData "> <b>Trek Data</b></div>
          <div className="row statItem firstItem"> <b>Distance: </b> 1.2 mi </div>
          <br></br>
          <div className="row statItem"> <b>Avg Speed:</b> 6 mph </div>
          <br></br>
          <div className="row statItem"> <b>Top Speed:</b> 20 mph </div>
          <br></br>
          <div className="row statItem"> <b>Cals Burned:</b> 126 cals </div>
          <br></br>
          <div className="row statItem"> <b>Altitude:</b> 147 m </div>
          <br></br>
          <div className="row statItem"> <b>Heart Rate:</b> 140 bpm </div>
        </div>
      </div>
    </div>
  )
}

export default App
