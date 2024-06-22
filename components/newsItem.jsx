import React from 'react'

const NewsItem =(props)=>{ 
    
        
  
 
    let {title,description,imageurl,url,author }=props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageurl? imageurl:"https://cmg-cmg-tv-10020-prod.cdn.arcpublishing.com/resizer/mXzDnYPoO5kFTl64FeGXSe_BFis=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/547DURRH7VARTLYK2BQDQPUBHU.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body " >
    <h5 className="card-title" >{ title}... </h5>
    <h6>{author? author:"No author"}</h6>
   
    <p className="card-text"> {description}...</p>
    <a href={url} rel='norefrence' target='-blank' className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>

    )

  }


export default NewsItem