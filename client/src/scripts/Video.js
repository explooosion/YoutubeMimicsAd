import videojs from 'video.js'
import Data from './Data'
import Ad from './Ad'

export default class Video {
    constructor(data) {

        this.ad = new Ad()

        this.data = data

        /** Object */
        this.selector = document.querySelector('.selType')
        this.selector.addEventListener('change', this.onChangeType.bind(this))
        this.btnSearch = document.querySelector('.btn-search')
        this.btnSearch.addEventListener('click', this.searchByUrl.bind(this))

        /** Property */
        this.onInitial(data)
        this.isPlayVideo = true
        this.currentTime = 0
        this.timer = null
        this.adFlag = false
        this.adTime = 180
    }

    /**
     * 初始化
     * @param {object} data
     */
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
        this.video.on('play', this.onPlay.bind(this))
        this.video.on('ended', this.onEnded.bind(this))
    }

    /**
     * 變更影片類型
     * @param {object} event
     */
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

            this.data = result
        }
    }

    /**
     * 播放影片時
     * @param {object} event
     */
    onPlay(event) {
        this.playHandler()
    }

    /**
     * 影片播放完畢後
     * @param {object} event
     */
    onEnded(event) {
        if (!this.isPlayVideo) {
            this.video.src(`/static/video/${this.data.src}`)
            this.video.load()
            this.video.currentTime(this.currentTime)
            this.video.play()
            this.isPlayVideo = true
        }
    }

    /**
     * 影片播放階段偵錯
     */
    playHandler() {
        if (this.isPlayVideo) {
            this.timer = setTimeout(() => {
                const now = this.video.currentTime()
                if (now > this.adTime && now < this.adTime + 1 && !this.adFlag) {
                    this.currentTime = now
                    this.adFlag = true

                    switch (this.ad.type) {
                        case 'display':
                            break
                        case 'overlay':
                            this.ad.showAdOverlay(this.data)
                            break
                        case 'skippable':
                            this.playAd()
                            break
                        case 'cards':
                            break
                    }
                }
                this.playHandler()
            }, 1)
        }
    }

    /**
     * 播放廣告
     */
    playAd() {
        this.isPlayVideo = false
        this.video.src(`/static/video/ad/${this.data.ad.center.url}`)
        this.video.load()
        this.video.play()
    }

    /**
     * 搜尋網址列的影片
     * @param {object} event
     */
    searchByUrl(event) {
        window.open(this.search.value, '_blank')
    }
}