import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Video extends React.Component
{
    constructor(props)
    {
        super(props);

        if (this.props.data !== undefined)
        {
            this.state = {
                imageLoaded: false,
                error: false,
                isLoaded: false,
                displayMode: props.displayMode,
                data: null
            }
        }
        else {
            this.state = {
                imageLoaded: false,
                error: false,
                isLoaded: false,
                displayMode: 'single',
                data: null
            }
        }
        
    }

    componentDidMount()
    {
        if (this.props.data === undefined) {
            fetch(`http://localhost:3001/movies/${this.props.videoId}`)
                .then(result => result.json())
                .then(
                    (result) => {
                        console.log('RESULT : ', result);
                        this.setState({
                            isLoaded: true,
                            data: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }

    handleImageLoaded = () => {
        this.setState({
            imageLoaded: true,
            isLoaded: true
        })
    }

    handleImageLoadError = () => {
        this.setState({
            error: true
        })
    }

    handleClickCallback = () => {
        this.setState({
            displayMode: 'single'
        })
    }

    render()
    {
        // console.log(this.props);
        return (
            <div>
                {
                    this.state.error ?
                        <div></div> :
                        this.state.displayMode === 'multi' ?
                            <Link to={`/videos/${this.props.data.movieId}`}>
                                <img
                                    src={this.props.data.poster}
                                    alt={this.props.data.title}
                                    onLoad={this.handleImageLoaded}
                                    onError={this.handleImageLoadError}
                                    onClick={this.handleClickCallback}>
                                </img>
                            </Link> :
                            <div>viewing single video</div>
                }
            </div>
        );
    }
}

export default Video;
/*
StatusCode        : 200
StatusDescription : OK
Content           : [{"movieId":1,"metascore":"67","boxOffice":"$389,804,217","website":"https://marvel.com/guardians","imdbRating":"7.7","imdbVotes":"449,175","runtime":"136
                    min","language":"English","rated":"PG-13","pr...
RawContent        : HTTP/1.1 200 OK
                    Access-Control-Allow-Origin: *
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 32422
                    Content-Type: application/json; charset=utf-8
                    Date: Mon, 02 Aug 2021 15:19:24 GM...
Forms             : {}
Headers           : {[Access-Control-Allow-Origin, *], [Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 32422]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 32422
*/