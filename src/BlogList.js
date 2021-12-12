import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const BlogList = ({blogs}) => {
    
    return ( 
    <div className="blog-list">
    {blogs.map((blog) => (
        <div style= {{ backgroundImage: `url(${blog.background} )`}} className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2 className='blog-list-title'>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            </Link>
            <div className='socials'>
        <a
        href={blog.youtube}
        className="social" 
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
        href={blog.facebook}
        className="social" 
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>           
             <a
        href={blog.twitter}
        className="social" 
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>            
            <a
        href={blog.instagram}
        className="social" 
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
         </a>
        </div>
        </div>
        ))}   
        </div> 
        );
}
 
export default BlogList;