import React from 'react'
import './Main.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function Main() {




    return (
        <div className="MainPage">
          <div className="top">
          <Navbar/>
          </div>
         <div className="center">
           <div className="scroll">
           <Sidebar/>
           </div>
       
         <div className="VideoView">
                 
            <h1>Welcome</h1> 
            Welcome to FOLIO documentation. FOLIO is an open source project that creates a new paradigm for collaboration between libraries, developers, and vendors. This open platform moves the industry well beyond the traditional library management system, offering libraries more choices of features and services.

              <h2>FOLIO Intro</h2>


                <h3>A modern library ecosystem</h3>

                  The FOLIO project aims to facilitate a sustainable, community-driven collaboration around the creation of a modern technology ecosystem that empowers libraries through open source applications to manage library resources and expand library value.


                <h3>Community collaboration</h3>
                  Development of the FOLIO platform is driven by the transparent collaboration of librarians, developers, and vendors. A Product Council provides oversight of platform development, with representation from the many institutions and organizations involved. A healthy number of communication channels supports ongoing interactions to move the project forward.

                  The future is here: An open source library platform
                        FOLIO is an open source Library Services Platform developed by libraries, vendors, and developers who collaborate to reimagine library software. The collaboration enables librarians and vendors alike to contribute functional expertise and developers in any area of library workflows. Due to the open source nature of the platform and choice of service providers, libraries can speed up the delivery of extensible or enhanced software and deliver the enhancement(s) to the community without relying on a particular vendor’s roadmap.

                        
                        
                        
                       
                       
                       
                       
                        

                               
         </div>
       
         
         
         </div>
         
         
        </div>
        
    )
}

export default Main
