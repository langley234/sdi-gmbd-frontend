import React from 'react';

class Video extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            imageLoaded: false,
            error: false
        }
    }

    handleImageLoaded = () => {
        this.setState({
            imageLoaded: true
        })
    }

    handleImageLoadError = () => {
        //console.log('Error Loading Image');

        this.setState({
            error: true
        })
    }

    render()
    {
        console.log(this.props);
        return (
            <div>
                {
                    this.state.error === false ?
                    <img src={this.props.data.poster} alt={this.props.data.title} onLoad={this.handleImageLoaded} onError={this.handleImageLoadError}></img> :
                    <h3>{`Could Not Load Image For "${this.props.data.title}"`}</h3>
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