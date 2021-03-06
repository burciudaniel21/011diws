import BlogList from './BlogList';
import useFetch from './useFetch';
import { useState } from "react";

const BlogsDisplay = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    // var filter="christmas";
    var queryString = window.location.search;
    var urlParameters = new URLSearchParams(queryString);
    var filter2 = urlParameters.get('filter');
    console.log(filter2);
    const[filter, setFilter] = useState('');

    return ( 
        
        <div className="blogs">
        <select className="filterRecipes"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="popular">Popular</option>
          <option value="christmas">Christmas</option>
          <option value="">All</option>

        </select>
        {error && <div>{error}</div>}
        {isLoading && <div className='loading'>Loading...</div>}
        {/* {blogs && <BlogList blogs={blogs} title="All Blogs"/>} */}
     
        {(blogs && filter === "") && <BlogList blogs={blogs} title="All Blogs"/>}

        {/* {(blogs && filter2 === "popular") && <BlogList blogs={blogs.filter((blog) => blog.category === 'popular')}  />} */}

        {blogs && <BlogList blogs={blogs.filter((blog) => blog.category === filter)}  />}

        </div>    
        
    );

}
export default BlogsDisplay;
//<button onClick={() => setName('Alex')}>Change name.</button> -> button on click event

//<BlogList blogs={blogs.filter((blog) => blog.author === 'Dan')} title = "Dan's Blogs."/> filter blog

//<BlogList blogs={blogs}/> -> prop
/*
const[name, setName] = useState('User');
const handleClick = () => {
    console.log('Welcome to GetBaking blog.')
    setName ='';
<p>{name}</p>
<button onClick={handleClick}>Click here</button>*/
