import React from 'react';
import styled from '@emotion/styled'
interface props 
{
    video: { 
    imageUrl: string,
    video? : {
        bitrate?: number,
        content_type: string,
        url: string
    }
    sizes : {
        w : number,
        h : number,
        resize: string
    }}
}

const VideoComponent = styled.video`
    padding-bottom: 10px;
    border-radius: 5px 5px 0 0;
    margin: 0 auto;
    width: 100%;
`

const video : React.FC<props> = ({video}) =>
 (
      <VideoComponent controls poster={video.imageUrl} height={240}>
        <source src={video.video.url} type={video.video.content_type}/>
      </VideoComponent>
)

export default video;

