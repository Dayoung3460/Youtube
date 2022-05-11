import React, { useEffect, useState, useCallback } from 'react'
import './app.module.css';
import VideoList from "./comp/video_list/video_list";
import SearchHeader from "./comp/search_header/search_header";
import styles from './app.module.css'
import VideoDetail from "./comp/video_detail/video_detail";

function App({youtube}) {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null);
    const selectVideo = (video) => {
        setSelectedVideo(video)
    }

    // useCallback은 메모리상에 계속 보관함. 조심해서 써야됨
    const search = useCallback(
        (query) => {
            setSelectedVideo(null)
            youtube
                .search(query)
                .then(videos => {setVideos(videos)})
        }, [youtube])


  // 컴포넌트가 마운트될 때 실행되는 아이
  useEffect(() => {
        youtube
            .mostPopular()
            .then(videos => setVideos(videos))
    // deps에 빈 배열을 넣어주면 마운트될 때만 실행됨
    // 특정 변수가 업데이트 될 때마다 업데이트 해주고 싶으면
    // 배열 안에 변수들 넣어주면 됨. 변수 값이 바뀔 때마다 콜백함수가 실행됨.
  }, [youtube])

  return (
      <div className={styles.app}>
          <SearchHeader onSearch={search}/>
          <section className={styles.content}>
              {selectedVideo && (
                  <div className={styles.detail}>
                      <VideoDetail video={selectedVideo}/>
                  </div>
              )}
              <div className={styles.list}>
                  <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
              </div>
          </section>
          <a href="https://github.com/Dayoung3460/youtube"
             target="_blank" className="github">
              <i className="fab fa-github-square"></i>
          </a>
      </div>
  )
}

export default App;
