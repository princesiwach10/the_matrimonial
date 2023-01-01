import Header from "./Header"
import Footer from './Footer'
import React from 'react'

const Page = (props) => {

    return (
        <>
            <div>
                <Header />
                {/* {props.children} */}
                <Footer />
            </div>
        </>
    )
}

export default Page
