import React from 'react'
import './ChannelRow.css'
import {Avatar}  from '@material-ui/core'
import  VerifiedIcon from '@material-ui/icons/CheckCircleOutlined'

function ChannelRow({image,channel,subs,naOfVideos,description,verified}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
               <h4>{channel} {verified && <VerifiedIcon/>}</h4> 
               <p>{subs} subscribers . {naOfVideos} videos </p>
               <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
