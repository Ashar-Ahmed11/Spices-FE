import React from 'react'
import { useContext, useState, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import ProductItem from './productItem'
import Spinner from './spinner'
import Placeholder from './placeholder'
import { useKeenSlider } from 'keen-slider/react'
import ResizePlugin from './Plugins/ResizePlugin'
import MutationPlugin from './Plugins/MutationObserver'
import { useLoaderData } from 'react-router-dom'
import WalletItem from './productItem copy'
export default function CategoryWiseProducts({ productsTwo }) {
    const context = useContext(NoteContext)
    const { categories, getCategories, setProducts, theProductLoader, getHomeProducts, homeProducts, setText, setComponent, fetchProduct, products, fetchCart, loader, productLoader, homeData, editor, editComponent, adminView } = context
    // const fetchedProducts=useLoaderData()
    // setProducts(productsTwo)


    useEffect(() => {
        if (products.length < 1) {
          
            getCategories()
        }
    }, [products])



    const [sliderRefThree] = useKeenSlider({
        mode: "free-snap",
        loop: true,
        slides: {
            origin: "center",
            perView: 1.4,
            spacing: -40,

        },

        selector: ".first > .keen-slider__slide",
    }, [ResizePlugin, MutationPlugin])



    const [first, setfirst] = useState("second")
    useEffect(() => {
        setfirst("third")

    }, [])
    //  console.log(homeProducts)
    //  console.log(products)

    //  console.log(adminView)


    // const wallet = products.filter((e) => { return e.categories[0].slug == ['featured'] })

    // console.log(products)
    // console.log(wallet)
    const color = "#212427"
    // const reversed = [...products].reverse();
    // console.log(products)
    return (
        <div className='container-fluid'>
            {categories.map(({ mainHeading }, i) => {
                return <>
                    <div className={window.innerWidth > 750 && "m-3"}>

                        <p data-aos="fade-up" data-aos-duration="1000" className="h1 text-center my-5" style={{ fontFamily: 'Sagrantino', color: color }}>{mainHeading}</p>
                        {productLoader && <div style={{ position: "fixed", bottom: "-30px", right: "-25px", zIndex: "99999" }}><Spinner /></div>}
                        {/* const removeSpace = mainHeading&& mainHeading.replace(" ","")
    const slug = mainHeading && removeSpace.toLowerCase() */}


                        <div className="row">
                            {products.filter((e, i) => { return e.category == mainHeading.replace(" ", "").toLowerCase() }).map((e) => {
                                return <WalletItem data={e} />
                            })}



                            {theProductLoader && <>
                                <div className="col-md-3 ">
                                    <Placeholder />
                                </div>
                                <div className="col-md-3 ">
                                    <Placeholder />
                                </div>
                                <div className="col-md-3 ">
                                    <Placeholder />
                                </div>
                                <div className="col-md-3 ">
                                    <Placeholder />
                                </div>
                                <div className="col-md-3">
                                    <Placeholder />
                                </div>
                                <div className="col-md-3">
                                    <Placeholder />
                                </div>
                            </>}




                        </div>





                    </div>
                </>
            })}

        </div>
    )
}

