// Pagination and Caching
// Pagination:loading data page by page instead of loading everything at once

import { useEffect,useState } from "react";

// Caching: storing previously Loaded data reapeated requests can be avoided
export function PaginationCaching(){
     const [posts,setPosts]=useState([]);
    const [page, setPage] = useState(1);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");
    useEffect(()=>{
        loadPosts();
    },[page]);

    async function loadPosts() {
        const cachkey = `posts_page_${page}`;
        setLoading(true);
        setError("");
        try{
            const cacheData=localStorage.getItem(cachkey);
            if(cacheData){
                setPosts(JSON.parse(cacheData));
                setLoading(false);
                return;
            }
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=15`);
            if(!response.ok){
                throw new Error(`Failed to fetch posts.status ${response.status}`);
            }
            const data = await response.json();
            localStorage.setItem(cachkey,JSON.stringify(data));
            setPosts(data);

        } catch (error) {
            console.error("Error while loading posts:", error);
            setError(error.message || "Failed to load posts.");
        } finally {
            setLoading(false);
        }

    }
    return(

        <section>
            <h2>Pagination & caching example</h2>
            <p>this is a simple example of pagination and caching in React</p>
            {/* Loading of UI */}
            {loading && <p> Loading Posts...</p>}

            {/* Erros UI */}
            {!loading && error && <p>Error: {error}</p>}
            {/*Empty state UI */}
            {!loading && !error && posts.length === 0 && <p>No posts found.</p>}
            {/*Success UI */}
            {!loading && !error && posts.length > 0 && 
                
                    posts.map((posts) => (
                        <article key={posts.id}>
                            <h4>{posts.name}</h4>
                            <p>Email:{posts.body}</p>
                            <p>Company: {posts.company?.name}</p>
                            <p>City: {posts.address?.city}</p>
                        </article>
                        
                    ))}
                    <button disabled={page===1 || loading}
                    onClick={()=>setPage((prevPage)=>prevPage-1)}>Previous</button>
                    <button disabled={loading}
                    onClick={()=>setPage((prevPage)=>prevPage+1)}>Next</button>
        </section>


    )

}