import React, { useContext } from 'react'
import Carousal from './carousal'
import Products from './products'
import Extras from './extras'
import FeaturedOnes from './products copy'
import FinalCover from './finalcover'
import { useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import CategoriesPreview from './categoriesPreview'
import CategoryWiseProducts from './CategoryWiseProducts'
import Trust from './trust'
import BrandStory from './brandstory'
import SpicesVideo from './spicesVideo'
export default function Home() {
  const context = useContext(NoteContext)
  const { getHomeData, mainLoader, navLoader, homeData,products,fetchProduct } = context
  useEffect(() => {
    if (!homeData) {

      getHomeData()
    }
  }, [])



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (products.length < 1) {
      fetchProduct()
    }
  }, [products])

  const color = "#F4B92D"
  return (
    <>

      <Carousal />
      <Trust />
      
      <CategoriesPreview />
      <SpicesVideo title={"A Legacy of Pure Spices"} video={"https://res.cloudinary.com/dextrzp2q/video/upload/c_scale/f_auto/q_60/v1760299043/video1_ssukfi.mp4"}/>
      <Products />
      <CategoryWiseProducts/>
      <SpicesVideo title={"Pakistan’s Most Trusted Spice Brand"} video={"https://res.cloudinary.com/dextrzp2q/video/upload/c_scale/f_auto/q_60/v1760299638/video3_bfv3on.mp4"}/>

      <BrandStory />
      <Extras />
      <SpicesVideo title={"Crafted with Generations of Trust"} video={"https://res.cloudinary.com/dextrzp2q/video/upload/c_scale/f_auto/q_60/v1760299056/video2_mmlx8s.mp4"}/>

      <FeaturedOnes />
      <FinalCover />



    </>
  )
}

