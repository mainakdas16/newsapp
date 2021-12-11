import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {

        let {title, desc, imageUrl, readmoreUrl, author, publishedAt} = this.props;
    
        return (
            <div className='my-2'>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="Not availabe" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"> {desc} </p>
                        <p className="card-text"><small className="text-muted">By {author ? author: "unknown"} on {
                            new Date(publishedAt).toGMTString()
                        } </small></p>
                        <a href={readmoreUrl} className="btn btn-outline-dark btn-sm" target="_blank" rel='noreferrer'>Read More..</a>
                    </div>
                </div>
            </div>
        )
    }
}
