import React, { memo } from 'react'
import styles from './video_item.module.css'

// memo: 전달된 프롭이 변경되지 않으면 리랜더링 안됨. 변경되면 랜더링됨.
const VideoItem = memo(
    ({ video, video: {snippet}, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid

    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
                <img
                    className={styles.thumbnail}
                    src={snippet.thumbnails.medium.url}
                    alt="video thumbmail"
                />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
})

export default VideoItem;
