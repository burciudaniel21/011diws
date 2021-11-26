import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

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
                 <p className = 'blog-written'>Written by {blog.author}</p>
                 <p className = 'blog-ingredients'>Ingredients: {blog.ingredients}</p>
                 <p className = 'blog-instructions'>Instructions: {blog.instructions}</p>
                 <div>{blog.body}</div>
                 <button className = 'delete' onClick={handleClick}>Delete</button>
             </article>
         )}               
        </div>
     );
}
 
export default BlogDetails;