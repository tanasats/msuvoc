import React from 'react'

const ReportPage = () => {
    return (
        <div className='mx-auto'>
            <div className='bg-blue-950 h-[10vh]'></div>
            <div className='w-[80%] mx-auto'>
            <iframe
                width="100%" height="5000px"
                src="https://lookerstudio.google.com/embed/reporting/f0702a48-c9c8-4200-a74a-3692adef2cf6/page/p_1xllhhl4pd"
                frameBorder={0} 

                allowFullScreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
            </iframe>                
            </div>

        </div>
    )
}

export default ReportPage
