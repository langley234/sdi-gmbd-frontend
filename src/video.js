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
                data: this.props.data
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
            //console.log('fetching data for video id : ', this.props.videoId)
            fetch(`http://localhost:3001/movies/${this.props.videoId}`)
                .then(result => result.json())
                .then(
                    (result) => {
                        //console.log('RESULT : ', result);
                        this.setState({
                            isLoaded: true,
                            data: result,
                            displayMode: 'single'
                        });
                    },
                    (error) => {
                        console.log('ERROR')
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
       // window.location.reload();
        this.props.clickCallback();
    }

    render() {
        //console.log(this.state.data);
        return (
            <Router>
                <div>
                    {
                        this.state.error ?
                            <div></div> :
                            this.state.displayMode === 'multi' ?
                                <img
                                    src={this.props.data.poster}
                                    alt={this.props.data.title}
                                    onLoad={this.handleImageLoaded}
                                    onError={this.handleImageLoadError}
                                    onClick={this.handleClickCallback}>
                                </img> :
                                <div>
                                    {
                                        this.state.isLoaded ?
                                            <img
                                                src={this.state.data.poster}
                                                alt={this.state.data.title}
                                                onLoad={this.handleImageLoaded}
                                                onError={this.handleImageLoadError}>
                                            </img> :
                                            <h3>Loading</h3>
                                    }
                                </div>
                    }
                </div>
            </Router>
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