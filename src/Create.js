import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
        const[title, setTitle] = useState('');
        const[body, setBody] = useState('');
        const[author, setAuthor] = useState('');
        const [isPending, setIsPending] = useState(false)
        const history = useHistory();
        const [ingredients, setIngredients] = useState('');
        const [instructions, setInstruction] = useState('');
        const [optionalInstructions, setOptionalInstruction] = useState('');
        const [image, setImage] = useState('');
        const [youtube, setYoutube] = useState('');
        const [facebook, setFacebook] = useState('');
        const[twitter, setTwitter] = useState('');
        const[instagram, setInstagram] = useState('');



         const handleSubmit =(e) => {
             e.preventDefault();
             const blog ={title, body, author, ingredients, instructions, optionalInstructions, image, youtube, facebook, twitter, instagram};
             
            setIsPending(true);

             fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
             }).then(()=>{
                 console.log('new blog added')
                 setIsPending(false);
                 history.push('/'); //sends the user back to the home page after a blog has been created
             })
        }

    return (     
        
    <div className="create">
    <h2 className = 'add-new'>Add a New Blog.</h2>
    <form onSubmit={handleSubmit}>
        <label> Blog title:</label>
        <input type="text"
        required
        value = {title}
        onChange={(e) => setTitle(e.target.value)}
         />
         <label> Blog body:</label>
        <textarea required value={body} 
        onChange={(e) => setBody(e.target.value)}  
        ></textarea>
         <label> Blog ingredients:</label>
        <textarea required value={ingredients} 
        onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        <label> Blog instructions:</label>
        <textarea required value={instructions} 
        onChange={(e) => setInstruction(e.target.value)}
        ></textarea>
        <label> Optional instructions:</label>
        <textarea value={optionalInstructions} 
        onChange={(e) => setOptionalInstruction(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <textarea value={author} onChange={(e) => setAuthor(e.target.value)}>
        </textarea>
        <label> (optional) Link to youtube channel:</label>
        <input type="text"
        value = {youtube}
        onChange={(e) => setYoutube(e.target.value)}
         />
         <label> (optional) Link to Facebook:</label>
        <input type="text"
        value = {facebook}
        onChange={(e) => setFacebook(e.target.value)}
         />
         <label> (optional) Link to Twitter:</label>
        <input type="text"
        value = {twitter}
        onChange={(e) => setTwitter(e.target.value)}
         />
         <label> (optional) Link to Instagram:</label>
        <input type="text"
        value = {instagram}
        onChange={(e) => setInstagram(e.target.value)}
         />
        {!isPending &&  <button className = 'add-blog'>Add Blog</button>}
        {isPending && <button className='add-blog' disabled>Adding blog...</button>}

    </form>
    </div> );
}
 
export default Create;