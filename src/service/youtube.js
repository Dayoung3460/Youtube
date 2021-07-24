
class Youtube {
    constructor(key) {
        this.key = key
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
    }

    async mostPopular() {
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?&part=snippet&maxResults=25&q=hi&key=${this.key}`,
            this.getRequestOptions)
            .then(response => response.json())
            .then(result => result.items)
    }

    async search(query) {
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions)
            .then(response => response.json())
            .then(result => result.items)
        // .then(result => result.items.map(item => ({
        //     ...item, id: item.id.videoId
        // })))
        // .then(items => setVideos(items))
    }
}

export default Youtube
