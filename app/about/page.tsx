import React from 'react'

const AboutPage = () => {
    return (
        <div className='mx-auto'>
            <div className='bg-blue-950 h-[10vh]'></div>

            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdpVz3SjHdScGe1CBr15rPXNp2Sj7oWM-rz0-X9tkNQRzjQng/viewform?embeded=true"
                width="100%"
                height="3000px"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}>
                Loading...
            </iframe>

        </div>
    )
}

export default AboutPage