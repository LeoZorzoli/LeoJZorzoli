import React from 'react'
import blogsList from '../blog/blogsList'
import Blog from '../blog/Blog'

const Blogs = () => {
    return(
        <div className="principalProjects animate__animated animate__fadeIn animate__slower">
            <div className="row">
                {blogsList.map(blog => 
                    <Blog 
                        key={blog.id} 
                        name={blog.name} 
                        src={blog.src} 
                        img={blog.img} 
                        description={blog.description} 
                    />
                )}
            </div>
        </div>
    )
}

export default Blogs