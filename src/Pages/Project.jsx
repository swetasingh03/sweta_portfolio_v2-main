import React from 'react';
import ProjectData from '../JsonData/ProjectData';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function Project() {
  const { theme } = useTheme();
  return (
    <>
      <section className="py-5">
        <div className=" px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
          </div>
          <div className="row gx-5 justify-content-center">
            {ProjectData && ProjectData.map((data, key) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className={`card overflow-hidden shadow rounded-4 mb-5 ${theme === 'light' ? 'border-0' : 'bg-dark-blue text-white border'}`}>
                    <div className="card-body p-0">
                      <div className="d-flex align-items-center projects-section">
                        <div className="p-5" id={key}>
                          <h3 className="fw-bolder">{data.name}</h3>
                          {/* <div class="badge">New</div> */}
                          <div><a href={data.siteUrl} target='_blank' style={{ textDecoration: 'none' }}>{data.showExplore}</a></div>
                          <p>{data.description.substring(0, 150)}...</p>
                        </div>
                        <img className=" mb-4" style={{ paddingRight: '10px', borderRadius: '10px' }} width="250" height="150" src={data.image} alt="..." />
                      </div>
                      <div className='row mb-3 mx-2'>
  {data.tools && data.tools.length > 0 && data.tools.map((item, index) => (
    <div key={index} className='col-md-1 col-sm-1 col-xsm-1'>
      <img src={item} width="30px" className='mx-3' alt="Tool Logo" />
    </div>
  ))}
</div>

                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
            <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">Contact me</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project