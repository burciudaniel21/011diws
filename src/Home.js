import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');


    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
export default Home;
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
