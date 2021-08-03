import React from 'react';
import Video from './video';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class VideoList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoaded: false,
            data: null,
            error: null
        }

        this.videoId = 0;
    }

    componentDidMount()
    {
        fetch(this.props.url)
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
    
    render()
    {
        return (

            <div className="videos">
                {
                    this.state.data === null ?
                        <h1>No Data Present</h1> :
                        <div className="videos">{this.state.data.map((item) => {
                            return <Link to={`videos/${item.movieId}`}>
                                <Video
                                    key={this.videoId++}
                                    clickCallback={this.props.clickCallback}
                                    data={item}
                                    displayMode={'multi'} />
                            </Link>

                        })}</div>
                }
            </div>

        );
    }
}



export default VideoList;