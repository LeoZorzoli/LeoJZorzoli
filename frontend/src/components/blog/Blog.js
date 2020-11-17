import React from 'react'
import '../pages/blogs.css'

const Blog = (props) => {
    return(
        <div className="col-md-12 col-sm-12 col-lg-12 blog">
            <img src={props.img} alt={props.name} className="img-project img-fluid img-responsive rounded" width="600"/>
            <p><a href={props.src} className="linkBlog" target="_blank" rel="noopener noreferrer">{props.name} <i className="fa fa-caret-right"></i></a></p>
            <p className="blogDescription">{props.description}</p>
        </div>
    )
}

export default Blog