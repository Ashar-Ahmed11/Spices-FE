import React, { useContext, useState, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import ProductItem from './productItem'
import Spinner from './spinner'
import Placeholder from './placeholder'
import { useKeenSlider } from 'keen-slider/react'
import ResizePlugin from './Plugins/ResizePlugin'
import MutationPlugin from './Plugins/MutationObserver'
import 'keen-slider/keen-slider.min.css'

export default function Products() {
  const context = useContext(NoteContext)
  const {
    products,
    theProductLoader,
    homeData,
    adminView,
    setText,
    editComponent,
    setComponent,
    productLoader,
  } = context

  const [ready, setReady] = useState(false)

  const [sliderRef, slider] = useKeenSlider({
    mode: "free-snap",
    loop: true,
    slides: {
      origin: "center",
      perView: 1.4,
      spacing: -40,
    },
  }, [ResizePlugin, MutationPlugin])

  useEffect(() => {
    if (products && products.length > 0) {
      setReady(true)
      setTimeout(() => {
        slider.current?.update()
      }, 100)
    }
  }, [products, slider])

  const color = "#212427"

  return (
    <div>
      <div className={window.innerWidth > 750 && "m-3"}>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          onClick={(e) => {
            if (adminView) {
              setText(e.target.innerText)
              editComponent()
              setComponent('firstHeading')
            }
          }}
          className="h1 text-center my-5"
          style={{ fontFamily: 'Sagrantino', color }}
        >
          {homeData.firstHeading}
        </p>

        {productLoader && (
          <div style={{ position: "fixed", bottom: "-30px", right: "-25px", zIndex: "99999" }}>
            <Spinner />
          </div>
        )}

        {window.innerWidth > 750 ? (
          <div className="row">
            {products.filter((e) => e.homePreview).map((e) => (
              <ProductItem key={e._id} data={e} />
            ))}
          </div>
        ) : (
          ready && (
            <div ref={sliderRef} className="keen-slider">
              {products.filter((e) => e.homePreview).map((e) => (
                <div key={e._id} className="keen-slider__slide">
                  <ProductItem data={e} />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
