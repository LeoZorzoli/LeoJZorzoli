import React from 'react'
import '../pages/blogs.css'

const Blog = (props) => {
    return(
        <div className="col-md-12 col-sm-12 col-lg-6 blog">
            <img src={props.img} alt={props.name} className="img-project img-fluid img-responsive rounded" width="600"/>
            <p className="blogTitle">{props.name}</p>
            <p className="blogReadTime">{props.read} read - Date {props.date} - <a href={props.src} className="linkBlog" target="_blank" rel="noopener noreferrer">Link</a></p>
            <p className="blogDescription">{props.description}</p>
        </div>
    )
}

export default Blog