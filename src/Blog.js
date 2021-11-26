const Blog = () => {
    <>
    <div className = "Blog">
        <h2>Add a New Blog</h2>
        <form>
            <label>Title</label>
            <input 
            type = "text" 
            required
            />
            <label>Body</label>
            <textarea
            required></textarea>
            <label>Blog author:</label>
            <select>
                <textarea required></textarea>
            </select>
            <button>Add Blog</button>
            <label>Ingredients</label>
            <input 
            type = "text"/>
            <button>Add Ingredient</button>
            </form>
    </div>
    
</>
}

export default Blog;
