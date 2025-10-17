import React from 'react'
import { useRef } from 'react'
import ImageAdjuster from './imageAdjuster'
import NoteContext from '../../context/notes/noteContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function BasicInfo() {
    const openModal = useRef(null)
    const history = useNavigate(null)
    const context = useContext(NoteContext)
    const {createCategory,  setImgIsLoaded,setMainLoader,setcheckouter ,basicInfo,editBasicInfo ,setBasicInfo } = context
    setImgIsLoaded(true)
    const [categoryName, setCategoryName] = useState("")
    const makeCategory = (e)=>{
        e.preventDefault()
        createCategory(categoryName)
    }
    const color = "black"
    const token = localStorage.getItem('auth-token')
    if (!token) {
        history('/admin')
    }

    setImgIsLoaded(true)
    setMainLoader(false)
    setcheckouter(true)

    
    

    console.log(basicInfo);
    
// /api/basicInfo/getInfo
// /api/basicInfo/editInfo

    return (
        <div>
            <div style={{ marginTop: `${window.innerWidth > 992 ? '200px' : '145px'}` }}>
                <div className="d-flex justify-content-center  py-3">
                    <h1 style={{ fontFamily: "Sagrantino", color: color }}>Basic Information</h1>
                </div>
                <div className="container">
                    <form>

                        <input value={basicInfo?.whatsAppNumber} onChange={({target:{value}})=>setBasicInfo({...basicInfo,whatsAppNumber:Number(value)})} style={{ color: color, borderColor: color }} type="text" placeholder='WhatsApp Number' className="form-control my-2" />
                        <input  value={basicInfo?.karachiDelivery} onChange={({target:{value}})=>setBasicInfo({...basicInfo,karachiDelivery:Number(value)})}   style={{ color: color, borderColor: color }} type="number" placeholder='Karachi Delivery Charges' className="form-control my-2" />
                        <input value={basicInfo?.otherDelivery} onChange={({target:{value}})=>setBasicInfo({...basicInfo,otherDelivery:Number(value)})}  style={{ color: color, borderColor: color }} type="number" placeholder='Other Delivery Charges' className="form-control my-2" />
                        
                        <div className="d-flex justify-content-end my-3">
                            <button  onClick={(e)=>{e.preventDefault(),editBasicInfo()}}  style={{ borderColor: color, color: color }} className="btn my-2">Edit Information</button>
                        </div>
                    </form>
                </div>

            </div>








     
        </div>
    )
}