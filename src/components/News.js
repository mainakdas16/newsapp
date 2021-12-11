import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: "us",
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor () {
        super();
        console.log("This is a constructor!!");

        this.state = {
            articles : [],
            loading : false,
            page : 1  
        }
    }

    async componentDidMount() {
        let urlAPI = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1df6c336d064fae8fa50dbd39523dc9&page=1&pagesize=${this.props.pageSize}`;
        let data = await fetch(urlAPI);

        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    next = async ()=> {

        if(this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
            let urlAPI = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1df6c336d064fae8fa50dbd39523dc9&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({
                loading: true
            })
            let data = await fetch(urlAPI);

            let parsedData = await data.json();
            console.log(parsedData);
            console.log("Next clicked");

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading : false
            })
        }
    }

    previous = async ()=> {
        console.log("Previous clicked");
        let urlAPI = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1df6c336d064fae8fa50dbd39523dc9&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(urlAPI);

        let parsedData = await data.json();
        console.log(parsedData);
        console.log("Next clicked");

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <div className='container'>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key = {element.url}>
                                <NewsItem title = {element.title} desc = {element.description} imageUrl = {element.urlToImage} readmoreUrl = {element.url} author = {element.author} publishedAt = {element.publishedAt} />
                            </div>
                        )
                    })}

                    <div className="container d-flex justify-content-between">
                        <button disabled = {this.state.page <= 1} type="button" className="btn btn-outline-dark" onClick={this.previous}>&larr;Previous</button>
                        <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-outline-dark" onClick={this.next}>Next &rarr;</button>
                    </div>
                </div>}
            </div>
        )
    }
}

export default News
