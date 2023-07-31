import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Top from "../Header/Top";
import { NewsData } from "../Assets/NewsData";
import './SingleAritcalStyle.css'
import PostedBy from "./PostedBy";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FilterStoriesData from "../FilterStoriesData";
const SingleArtical = () => {
  const NewsArrayIndex = useParams();
  const Id=NewsArrayIndex.NewsId-1;
  const data = useContext(NewsData);
  // console.log(data[NewsId-1].categories);
  console.log(Id);

 const [wordsToShow,setWordsToShow]=useState(50);
 const TextView=()=>{
  (wordsToShow!==-1)?setWordsToShow(-1)://increase text
  setWordsToShow(50);//increase decrese text
 } 
  return (
    <div>
      <div className="SingleAritcalHeader">
        <Link className="SingleAritcalBack" to={"/" + data[Id]?.categories}>
          <img className="BackImg" src="/images/arrow@2x.png" alt="not found" />
          Back</Link>
        <Top />

      </div>
      <div className="middleContainer">
        <div className="clapNShare">
        <span className="clap1">
        <img className="clap1Img" src="/images/rythm@2x.png" alt="not found" />
        9.3K
          </span> 
          <span className="share">
          <img className="shareImg" src="/images/share@2x.png" alt="not found" />
          Share this article
          </span>
        </div>
      <div className="SingleAritcalBody">
    <div className="SingleAritcalHeading">{data[Id].heading}</div>
    <div className="writer">
      <PostedBy/>
      <div className="socialMedia">
        <FacebookIcon style={{color:'white',borderRadius:"5px", backgroundColor:"grey",marginRight:'10px',fontSize:"20px"}}/>
        <TwitterIcon style={{color:'white',borderRadius:"5px", backgroundColor:"grey",marginRight:'10px',fontSize:"20px"}}/>
        <InstagramIcon style={{color:'white',borderRadius:"5px", backgroundColor:"grey",marginRight:'10px',fontSize:"20px"}}/>
        <YouTubeIcon style={{color:'white',borderRadius:"5px", backgroundColor:"grey",marginRight:'10px',fontSize:"20px"}}/>
      </div>
    </div>
    <img className="SingleAritcalImage" src={data[Id].images} alt="Not Found"/>
    <div className="SingleAritcalDescription">
      {data[Id].description.split(' ').slice(0,wordsToShow).join(' ')}
     {(wordsToShow!==-1)? <div onClick={TextView} className="showMore">⬇️ Show More</div>:<div onClick={TextView} className="showLess">⬆️ Show Less</div>}
      </div>
    <div className="writerInfo">
    <span className="clap2">
        <img className="clap1Img" src="/images/rythm@2x.png" alt="not found" />
        9.3K claps
          </span> 
    <PostedBy/>
    </div>
    
    </div>  
      </div>
    
  <div className="MoreFromSiren">
    <FilterStoriesData type={"type6"} id={Id} />       
    <FilterStoriesData type={"type6"} id={Id+1} />       
    <FilterStoriesData type={"type6"} id={Id+2} />       
     
  </div>
   

    </div>
  );
};

export default SingleArtical;