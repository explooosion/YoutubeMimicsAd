import videojs from 'video.js'
import Data from './Data'

export default class Video {
    constructor(data) {

        /** Object */
        this.selector = document.querySelector('#selType')
        this.selector.addEventListener('change', this.onChangeType.bind(this))
        this.btnSearch = document.querySelector('.btn-search')
        this.btnSearch.addEventListener('click', this.onSearchUrl.bind(this))

        /** Property */
        this.onInitial(data)
    }
    onInitial(data) {
        this.selector.value = data.type
        this.type = data.type
        this.title = document.querySelector('.video-title')
        this.title.innerText = data.title

        this.owner = document.querySelector('.video-owner')
        this.owner.innerText = data.owner

        this.date = document.querySelector('.video-date span')
        this.date.innerText = data.date

        this.views = document.querySelector('.video-views span')
        this.views.innerText = data.views

        this.avatar = document.querySelector('.video-avatar')
        this.avatar.setAttribute('src', `/static/img/avatar/${data.avatar}`)

        this.search = document.querySelector('.txt-search')
        this.search.value = data.url

        this.video = videojs('video')
        this.video.src(`/static/video/${data.src}`)
        this.video.poster(`/static/img/poster/${data.poster}`)
        this.video.load()
    }
    onChangeType(event) {
        const result = Data.find((value, index) => {
            return event.target.value === value.type
        })
        if (result) {
            this.type = result.type
            this.title.innerText = result.title
            this.owner.innerText = result.owner
            this.date.innerText = result.date
            this.views.innerText = result.views
            this.avatar.setAttribute('src', `/static/img/avatar/${result.avatar}`)
            this.search.value = result.url
            this.video.src(`/static/video/${result.src}`)
            this.video.poster(`/static/img/poster/${result.poster}`)
            this.video.load()
        }
    }
    onSearchUrl(event) {
        window.open(this.search.value, '_blank')
    }
}