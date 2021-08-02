import React from 'react';
import Video from './video';

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
                    //console.log('RESULT : ', result);
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
            <div>
            {
                this.state.data === null ? 
                <h1>No Data Present</h1> :
                <div>{this.state.data.map((item) => {
                    return <Video key={this.videoId++} data={item}/>
                })}</div>
            }
            </div>
        );
    }
}



export default VideoList;

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));