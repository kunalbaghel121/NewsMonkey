

const NewsItem =(props)=> {
 
    let { title, description, imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
         
        <div className="card" style={{ width: "18rem" }}>
          
          <img src={!imageUrl?"https://img.etimg.com/thumb/msid-102465435,width-1070,height-580,imgsize-69812,overlay-etmarkets/photo.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left : '85%', zIndex:'1'}} >
    {source }
    <span className="visually-hidden">unread messages</span>
  </span></h5>
            <p className="card-text">{description}</p>
            
            <p className="card-text"><small className="text-body-secondary">by {!author?"unknown":author} on  {new Date(date).toDateString() } {new Date(date).toLocaleTimeString() }</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary ">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
