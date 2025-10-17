import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/noteContext'
import useLocalStorage from './useLocalStorage'

export default function CityChecker() {
    const closeRef = useRef(null)
    const context = useContext(NoteContext)
    const { city,setCity,country, setCountry, products, setProducts, openRef, setCart } = context

    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCity, setSelectedCity] = useState('')

    useEffect(() => {
        // Open modal if no city is saved
        if (!city) {
            openRef.current.click()
        } else {
            // Set selectedCity from stored city when modal opens again
            setSelectedCity(city)
        }
    }, [country])

    const cities = [
        'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan',
        'Peshawar', 'Quetta', 'Sialkot', 'Hyderabad', 'Sukkur', 'Gujranwala',
        'Bahawalpur', 'Abbottabad', 'Mardan', 'Mirpur', 'Rahim Yar Khan',
        'Gujrat', 'Sargodha', 'Larkana'
    ]

    // Filter cities only if searchTerm is not empty
    const filteredCities = searchTerm
        ? cities.filter(cityName =>
            cityName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : []

    const handleSelect = () => {
        if (selectedCity) {
            setCity(selectedCity)
        }
    }

    // Ensure selectedCity updates when modal opens again
    useEffect(() => {
        if (city) {
            setSelectedCity(city)
        }
    }, [city])

    return (
        <div>
            <button hidden style={{ display: 'none' }} ref={openRef} type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropTWO">
                Launch demo modal
            </button>

            <div className="container">
                <div
                    style={{ padding: '0px', zIndex: '2147483647', backdropFilter: 'blur(5px)' }}
                    className="modal fade"
                    id="staticBackdropTWO"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropTWOLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered py-5">
                        <div style={{ borderRadius: "15px", color: "#212427" }} className="modal-content border-0">
                            <div className="modal-header">
                                <h3 className="modal-title">Select Your City</h3>
                            </div>
                            <div className="modal-body">
                                <p>Please select your city for Home Delivery</p>

                                {/* Searchable Dropdown */}
                                <div className="form-group mt-3">
                                    <label htmlFor="citySearch" className="form-label">Search City</label>
                                    <input
                                        id="citySearch"
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Type to search..."
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value)
                                            setSelectedCity('') // reset selection when typing
                                        }}
                                    />

                                    {/* Show dropdown only when typing */}
                                    {searchTerm && (
                                        <div
                                            className="border rounded p-2"
                                            style={{
                                                maxHeight: '150px',
                                                overflowY: 'auto',
                                                background: '#fff'
                                            }}
                                        >
                                            {filteredCities.length > 0 ? (
                                                filteredCities.map((cityName, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => setSelectedCity(cityName)}
                                                        className={`p-2 rounded ${selectedCity === cityName
                                                            ? 'bg-dark text-white'
                                                            : 'text-dark'
                                                            }`}
                                                        style={{
                                                            cursor: 'pointer',
                                                            transition: '0.2s'
                                                        }}
                                                    >
                                                        {cityName}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-muted p-2">No cities found</div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Show selected city below search bar even before typing */}
                                {selectedCity && !searchTerm && (
                                    <div className="mt-3">
                                        <small className="text-success">
                                            Currently Selected City: <strong>{selectedCity}</strong>
                                        </small>
                                    </div>
                                )}

                                {/* Also show after selection */}
                                {selectedCity && searchTerm && (
                                    <div className="mt-3">
                                        <small className="text-success">
                                            Selected City: <strong>{selectedCity}</strong>
                                        </small>
                                    </div>
                                )}
                            </div>

                            <div className="modal-footer d-flex justify-content-center">
                                <button
                                    onClick={handleSelect}
                                    data-bs-dismiss="modal"
                                    type="button"
                                    className="btn"
                                    style={{
                                        backgroundColor: "#ffffff",
                                        borderColor: '#212427',
                                        color: '#212427'
                                    }}
                                    disabled={!selectedCity}
                                >
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
