import React from 'react'
import NoteContext from '../context/notes/noteContext'
import { useContext } from 'react'
export default function Extras() {
    const context = useContext(NoteContext)
    const {testimonialSliderRef,homeData,adminView,editComponent,setText,setComponent,setImageEditor} = context
    const color = "#212427"
    return (
        <div>
            <div data-aos="fade-up"  data-aos-duration="1000" className='container p-5' style={{ color: color }}>
                <p onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondSmallPara')}}}>{homeData.secondSmallPara}</p>
                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondSmallHead')}}} className='h1 mb-4' style={{ fontFamily: 'Sagrantino' }}>{homeData.secondSmallHead}</p>
                <div>
                    <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondSmallParaTwo')}}}>{homeData.secondSmallParaTwo}</p>
                </div>
                <p onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondSmallParaThree')}}}>{homeData.secondSmallParaThree}</p>
            </div>
            <div className="my-2" style={{ color: color }}>
                <div className="container p-5">
                    <div className="row">
                        <div  data-aos="fade-right"  data-aos-duration="1000" style={{height:'max-content'}} className="col-md-6 col-12">
                            {/* <div className="card withImg" style={{ borderRadius: '0px', backgroundColor: '#ffffff' }}> */}

                                <img onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('bodyImg');setImageEditor(true)}}} style={{ borderRadius: '0px', height: '90%',width:'100%' }} className='card-img rounded-4' src={homeData.bodyImg} alt="" />

                            {/* </div> */}
                        </div>
                        <div   data-aos="fade-left"  data-aos-duration="1000" className="col-md-6 col-12">
                            <div className="card border-0 shadow-0 pt-5 px-3" style={{ borderRadius: '0px', backgroundColor: '#ffffff' }}>

                                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('thirdSmallPara')}}}>{homeData.thirdSmallPara}</p>
                                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('thirdSmallHead')}}} className='h1 mb-4' style={{ fontFamily: 'Sagrantino' }}>{homeData.thirdSmallHead}</p>
                                <p onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('thirdSmallParaTwo')}}}>{homeData.thirdSmallParaTwo}</p>
                                <div className="d-flex justify-content-start">
                                    <button className="btn" style={{ borderRadius: "100px", backgroundColor: "#ffffff", color: color, width: 'max-content', borderColor: color }}>VIEW CRAFT</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
            <div className='container pb-3'>
            <p className="h1 text-center my-5" style={{ fontFamily: 'Sagrantino', color: color }}>Our Testimonials</p>
                <div ref={testimonialSliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide">
                        <div style={{backgroundColor:'#ffffff',color:color}} className="card h-100 border-0 shadow-0">
                            <div className="card-body ">
                                <p className='text-center'><i style={{fontSize:"25px"}} class="fa fa-quote-left px-2" aria-hidden="true"></i>I love Memon Foods so much! Their goods are clean, new, and full of flavor. The quality really stands out—every kind of spice, dried fruit, and salt stays fresh and tastes great even after being used for months. I use their products often and am always impressed by how consistently and well they do their job!<i style={{fontSize:"25px"}} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                     <p style={{fontWeight:"bolder",fontSize:"25px"}} className="text-center">Kamal Anwar</p>

                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <div style={{backgroundColor:'#ffffff',color:color}} className="card h-100 border-0 shadow-0">
                            <div className="card-body ">
                                <p className='text-center'><i style={{fontSize:"25px"}} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                                The Memon Foods company is truly outstanding! Their products are the best in terms of quality and freshness. When I buy from Memon Foods, I know I'm always getting the best taste and value because each pack is carefully chosen and meets high standards.<i style={{fontSize:"25px"}} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                                     <p style={{fontWeight:"bolder",fontSize:"25px"}} className="text-center">Asif Naem</p>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <div style={{backgroundColor:'#ffffff',color:color}} className="card h-100 border-0 shadow-0">
                            <div className="card-body ">
                                <p className='text-center'><i style={{fontSize:"25px"}} class="fa fa-quote-left px-2" aria-hidden="true"></i>For a long time, Memon Foods has been my favourite brand. Their goods are always new, pure, and full of flavour from the ingredients. Everything they sell is of high quality and tastes just like it should, from spices to dry fruits and salt. I would strongly suggest them to anyone seeking reliable, tasty, and healthy foods.<i style={{fontSize:"25px"}} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                                     <p style={{fontWeight:"bolder",fontSize:"25px"}} className="text-center">Shamroz Ali</p>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <div style={{backgroundColor:'#ffffff',color:color}} className="card h-100 border-0 shadow-0">
                            <div className="card-body ">
                                <p className='text-center'><i style={{fontSize:"25px"}} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                                Remember Foods is really great! Their products can't be beat when it comes to taste, purity, and freshness. When I buy something from Memon Foods, I know I'm getting the best and most authentic flavour because each item is carefully made and of the highest quality.<i style={{fontSize:"25px"}} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                                     <p style={{fontWeight:"bolder",fontSize:"25px"}} className="text-center">Abdul Asad</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            <div   data-aos="fade-up"  data-aos-duration="1000" style={{ color: color }} className="container pb-5 px-5 mb-4">
                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('fourSmallHead')}}} style={{ fontFamily: 'Sagrantino' }} className="h1 my-4">{homeData.fourSmallHead}</p>
                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('fourSmallPara')}}}>{homeData.fourSmallPara}</p>
                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('fourSmallParaTwo')}}}>{homeData.fourSmallParaTwo}</p>
            </div>
        </div>
    )
}