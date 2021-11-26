import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
        const[title, setTitle] = useState('');
        const[body, setBody] = useState('');
        const[author, setAuthor] = useState('Dan');
        const [isPending, setIsPending] = useState(false)
        const history = useHistory();
        const [ingredients, setIngredients] = useState('');
        const [instructions, setInstruction] = useState('');


         const handleSubmit =(e) => {
             e.preventDefault();
             const blog ={title, body, author, ingredients};
             
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
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Alex">Alex</option>
            <option value="Dan">Dan</option>
        </select>
        {!isPending &&  <button className = 'add-blog'>Add Blog</button>}
        {isPending && <button className='add-blog' disabled>Adding blog...</button>}

    </form>
    </div> );
}
 
export default Create;