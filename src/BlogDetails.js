import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import {ReactToPrint} from "react-to-print";
import {React} from "react";
import {Button} from "react-bootstrap";
import {userRef} from "react";

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
        this.componentRef = React.createRef();
    }
    const[toggle, setToggle] = useState('1');
    
    return ( 
        
        <div className="blog-details">
             
         {isLoading && <div className='loading'>Loading...</div>}
         {error && <div>{error}</div>}
         {blog && (
             <article className ='blog-content'>
                 <h2 className='blog-title'>{blog.title}</h2>
                 <img src={blog.image} alt={blog.title} className="FinalProduct" />
                 <p className = 'blog-written'>Written by {blog.author}</p>
                 <p className = 'blog-ingredients'>Ingredients: {toggle === '1' && blog.ingredients} {toggle === '2' && blog.ingredientsOunce}</p>
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

                 <button className = 'delete' id = "no-print" onClick={handleClick}>Delete</button>
                <select className="toggleMeasurment" id = "no-print"
                value={toggle}
                onChange={(e) => setToggle(e.target.value)}
                >
                <option value="1">Gram</option>
                <option value="2">Ounce</option>
                </select>
            </article>
    )}    
            <Button id="printButton" onClick={() => window.print()}>Print recipe</Button>
        </div>
     );
}
 
export default BlogDetails;