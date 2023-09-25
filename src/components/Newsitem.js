import React from 'react'

const Newsitem= (props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'> 
            <div className="card" style={{borderRadius:"20px"}}>
              <div style={{display: 'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
                <span className=" badge rounded-pill bg-danger" >{source}<span className="visually-hidden">unread messages</span></span>
              </div>
                <img src={!imageUrl?"https://th.bing.com/th/id/OIP.92jBVgcISgseGngCJZ2InQHaCO?w=312&h=105&c=7&r=0&o=5&pid=1.7":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...  </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text" back><small className="text-body-secondary-bg-dark" style={{color:'#fb4f4f', }}>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
}

export default Newsitem