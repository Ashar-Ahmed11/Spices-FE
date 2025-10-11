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

      <Products />
      <CategoryWiseProducts/>
      <BrandStory />
      <Extras />
      <FeaturedOnes />
      <FinalCover />



    </>
  )
}

