import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import Accordion from 'react-bootstrap/Accordion';

const BlogDetails = () => {
    const {id} = useParams();
    const{data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick= () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
       
    }
    
    return ( 
        <div className="blog-details">
         {isLoading && <div className='loading'>Loading...</div>}
         {error && <div>{error}</div>}
         {blog && (
             <article className ='blog-content'>
                 <h2 className='blog-title'>{blog.title}</h2>
                 <img src={blog.image} alt="Biscotti" className="FinalProduct" />
                 <p className = 'blog-written'>Written by {blog.author}</p>
                 <p className = 'blog-ingredients'>Ingredients: {blog.ingredients}</p>
                 <Accordion>
  <Accordion.Item className='blog-instructions' eventKey="0">
    <Accordion.Header>Instructions:</Accordion.Header>
    <Accordion.Body className='instructions-text'>
    {blog.instructions}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className='blog-instructions' eventKey="1">
    <Accordion.Header>Secondary instructions:</Accordion.Header>   
    <Accordion.Body className='instructions-text'>
    {blog.optionalInstructions}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                 {/* <p className = 'blog-instructions'>Instructions: {blog.instructions}</p> */}
                 {/* <div>{blog.body}</div> */}
                 <button className = 'delete' onClick={handleClick}>Delete</button>
             </article>
         )}               
        </div>
     );
}
 
export default BlogDetails;