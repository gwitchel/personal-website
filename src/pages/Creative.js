import React , { useState }from 'react'
import Gallery from "react-photo-gallery";
import './creative.css'
import { DynamicPage } from '../components/Page';
import Modal from '../components/Modal';

let photos=[
]

// TODO: make better paintings bigger

for(var i = 1; i < 55; i++ ){
  const img = new Image();
  let img_url = "paintings/"+i +".jpeg"
  img.src = img_url;
  
  img.onload = (() => {
    photos.push({
      src:img_url,
      width:img.width,
      height:img.height
      })
  })
}

function Creative() {
  let [showModal,setShowModal] = useState(false)
  let [img,setImg] = useState();

  let handleShowModal = (e) => {
    setImg(e.target.src)
    if (!showModal) setShowModal(true)
    else setShowModal(false)
  }
  return (
    <div className='doublePage' onClick={((e)=>handleShowModal(e))}>
      <Modal show={showModal} handleClose={(e)=>setShowModal(false)}>
       <img alt="" src={img}></img>
      </Modal>
      {/* <DynamicPage>
        <div className="creative-text"> Two years ago I ralized I love watercolor painting. It's just a hobby so I haven't done a good job of documenting it, but here are some photos of my work!</div>
      </DynamicPage> */}
    <Gallery photos={photos} direction={"row"}/>
    </div>
  )
}

export default Creative