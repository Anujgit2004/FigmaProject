import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import Frame1 from "C:/Users/Victus/Upload Image/Upload/src/assets/Frame 1000002294.png"
import Rect1 from "C:/Users/Victus/Upload Image/Upload/src/assets/Rectangle 39335.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import viteLogo from '/vite.svg'
import './App.css'
import { faArrowLeft, faArrowRight, faGreaterThan, faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(1)
  let [click,setclick]=useState(0);
  let [calc,setcalc]=useState(0);
  let [match,setmatch]=useState(101);
  let [image,setimage]=useState([]);
let filecontrol=useRef();




  let handlefile=(e)=>{
e.preventDefault();
filecontrol.current.click();
  }

  const handleupload=()=>{
   let objects= filecontrol.current.files[0];
  let objUrl=URL.createObjectURL(objects);
  let integrate=[...image,objUrl]
  setimage(integrate)
  }

let prev={
  transform:`translateX(-${200*click}px)`
}


let get_img=image.map((v,i)=>{
  return(
    <div className="uploadimgs" style={prev}>
<img src={v} alt="" key={i}  className='rounded-2xl'/>
    </div>

  )
})

console.log(click)
let obj=[
  {
id:101,
content:"Hi my name is Anuj Singh.I was born in Rewa,M.P.I am currently pursuing BCA from Renaissance University, Indore.It's my final year.I have learnt basics of many programming language but i loved java most.I am also learning web development.I have completed the fronted portion using React.I want to be an great software engineer"
  },
  {
id:102,
content:"Currently I have no professional experience yet but I have done multiple frontend projects,build eye catching UI of websites using Html,Css,JavaScript,React and frameworks like bootstrap and tailwind css."
  },
  {
id:103,
content:"I have not been recomended by anyone yet..Currently I have no professional experience yet but I have done multiple frontend projects,build eye catching UI of websites using Html,Css,JavaScript,React and frameworks like bootstrap and tailwind css."
  }
]


let get_obj=obj.filter((v,i)=>v.id==match);

let move={
  backgroundColor:"#39393aff",
transform:`translateX(${count}vw)`
}

const first=(a,b,c,d,e,f,g,h)=>{
  if(window.innerWidth>1400){
    setCount(a)
  }
  else if(window.innerWidth<1400&&window.innerWidth>1280){
    setCount(b)
  }
  else if(window.innerWidth<1281&&window.innerWidth>1150){
    setCount(c)
  }
  else if(window.innerWidth<1150&&window.innerWidth>1024){
    setCount(d)
  }
   else if(window.innerWidth<1024&&window.innerWidth>950){
    setCount(e)
  }
   else if(window.innerWidth<951&&window.innerWidth>870){
setCount(f)
   }
   else if(window.innerWidth<871&&window.innerWidth>800){
setCount(g)
   }
   else if(window.innerWidth<800&&window.innerWidth>767){
    setCount(h)
   }
}




let color={
  color:'white'
}
let nocolor={
color:"#A3ADB2"
}

useEffect(()=>{
  if(click<0){
    setclick(0)
  }



if(window.innerWidth>850){
if(click>image.length-2){
  setclick(0)
 }
}
else{
 if(click>image.length-1){
  setclick(0)
 } 
}
}
,[click])

return (
    <>
    <div className="fullPortion w-full flex justify-end">
  <div className="rightPortion w-3/6 p-5 flex flex-col gap-5">
 <div className="topBox px-15 py-7 flex flex-col gap-5 rounded-xl relative" style={{backgroundColor:"#363C43"}}>
  <img src={Frame1} alt="" width={'25px'} className='absolute left-3 top-8'/>
    <div className="top_nav bg-black text-white rounded-xl p-2 flex justify-around relative" >
      <button className='top-1 left-0 px-20 max-lg:px-17 rounded-xl h-5/6 opacity-50 absolute' style={move}></button>
      <button className='text-xl max-lg:text-lg px-8 max-lg:px-4 py-1 rounded-xl z-99 cursor-pointer' style={match==101?color:nocolor} onClick={()=>{setmatch(101),
     first(1,2,3,1,2,2,2,2) }}>About Me</button>
      <button className='text-xl max-lg:text-lg px-8 max-lg:px-4 py-1 rounded-xl z-99 cursor-pointer' style={match==102?color:nocolor}  onClick={()=>{setmatch(102),first(13,17,20,18.5,18.5,18,18.7,18.5)}}>Experiences</button>
      <button className='text-xl max-lg:text-lg px-8 max-lg:px-4 py-1 rounded-xl z-99 cursor-pointer' style={match==103?color:nocolor}  onClick={()=>{setmatch(103),first(26,33,39.5,37.5,37,35,37.5,36.5)}}>Recomended</button>
    </div>
    <div className="top_content">
<h1 className='text-2xl max-lg:text-xl' style={{color:"#969696",wordSpacing:"5px"}}>{get_obj[0].content}</h1>
    </div>
    <img src={Rect1} alt="" width={'20px'} className='absolute right-0 top-40 z-99'/>
   </div>

   <div className="bottom_box  px-15 py-7 flex flex-col justify-between rounded-xl relative" style={{backgroundColor:"#363C43"}}>
  <img src={Frame1} alt="" width={'25px'} className='absolute left-3 top-8'/>
<div className="upload_part flex items-center justify-between">
  <button className='p-3 px-8 rounded-2xl bg-black text-2xl max-lg:text-xl max-lg:px-5 text-white'>Gallery</button>
  <div className="upload_right flex items-center justify-between w-3/6 max-lg:w-4/6">
<button className=' bg-white text-white px-5 py-2 rounded-2xl cursor-pointer' onClick={handlefile}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> ADD IMAGE</button>
<div className="arrow_btn flex gap-4 text-3xl cursor-pointer">
  <FontAwesomeIcon  icon={faArrowLeft} onClick={()=>setclick(click-1)} ></FontAwesomeIcon>
  <FontAwesomeIcon icon={faArrowRight} onClick={()=>setclick(click+1)}></FontAwesomeIcon>
</div>
<input type="file" onChange={handleupload} hidden ref={filecontrol}/>
  </div>

</div>

<div className="low_part">
  <div className="uploaded-img-sec  flex gap-8">
{get_img}
  </div>


</div>
   </div>
    </div>
    </div>
  </>
  )
}

export default App
