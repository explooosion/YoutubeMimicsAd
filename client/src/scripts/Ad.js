export default class Ad {
    constructor() {

        this.type = 'display'
        this.obj = null

        /** 下拉式選單 */
        this.selAd = document.querySelector('.selAd')
        this.selAd.addEventListener('change', this.onChangeAd.bind(this))

        /** 媒體廣告 */
        this.adDisplay = document.querySelector('.ad-display')
        this.adDisplayCross = document.querySelector('.ad-display-cross')
        this.adDisplayCross.addEventListener('click', this.onCloseAdDisplay.bind(this))
        this.adDisplayLink = document.querySelector('.ad-display-link')
        this.adDisplayImg = document.querySelector('.ad-display-link img')

        /** 重疊廣告 */
        this.adOverlay = document.querySelector('.ad-overlay')
        this.adOverlayCross = document.querySelector('.ad-overlay-cross')
        this.adOverlayCross.addEventListener('click', this.onCloseAdOverlay.bind(this))
        this.adOverlayLink = document.querySelector('.ad-overlay-link')
        this.adOverlayImg = document.querySelector('.ad-overlay-link img')

        /** 可略過的影片廣告 */
        this.adSkipBefore = document.querySelector('.ad-skip-before')
        this.adSkipTime = document.querySelector('.ad-skip-before code')
        this.adSkipImg = document.querySelector('.ad-skip-before img')
        this.adSkipAfter = document.querySelector('.ad-skip-after')

        /** 贊助商資訊卡 */
        this.adCard = document.querySelector('.ad-card')
        this.adCardCross = document.querySelector('.ad-card-cross')
        this.adCardCross.addEventListener('click', this.onCloseAdCard.bind(this))
        this.adCardItem = document.getElementsByClassName('ad-card-item')
        this.adCardItem = [this.adCardItem[0], this.adCardItem[1], this.adCardItem[2]]
        this.adCardImg = document.getElementsByClassName('ad-card-img')
        this.adCardImg = [this.adCardImg[0], this.adCardImg[1], this.adCardImg[2]]
        this.adCardTitle = document.getElementsByClassName('ad-card-title')
        this.adCardTitle = [this.adCardTitle[0], this.adCardTitle[1], this.adCardTitle[2]]
        this.adCardOwner = document.getElementsByClassName('ad-card-owner')
        this.adCardOwner = [this.adCardOwner[0], this.adCardOwner[1], this.adCardOwner[2]]
    }

    onCloseAdCard(event) {
        this.adCard.classList.add('close')
    }
    showAdCard(obj) {
        this.adCard.classList.remove('close')
        this.adCardItem.forEach((item, index) => {
            item.setAttribute('href', obj.data.ad.card[index].url)
        })
        this.adCardImg.forEach((item, index) => {
            item.style.backgroundImage = `url('${obj.data.ad.card[index].img}')`
        })
        this.adCardTitle.forEach((item, index) => {
            item.innerText = obj.data.ad.card[index].title
        })
        this.adCardOwner.forEach((item, index) => {
            item.innerText = obj.data.ad.card[index].owner
        })
        obj.isPlayVideo = true
        obj.adFlag = false
    }
    onCloseAdDisplay(event) {
        this.adDisplay.style.display = 'none'
    }
    showAdDisplay(obj) {
        this.adDisplayLink.setAttribute('href', obj.data.ad.right.url)
        this.adDisplayImg.setAttribute('src', `/static/img/ad/right/${obj.data.ad.right.img}`)
        this.adDisplay.style.display = 'block'
        obj.isPlayVideo = true
        obj.adFlag = false
    }
    onCloseAdOverlay(event) {
        this.adOverlay.style.display = 'none'
    }
    showAdOverlay(obj) {
        this.adOverlayLink.setAttribute('href', obj.data.ad.bottom.url)
        this.adOverlayImg.setAttribute('src', `/static/img/ad/bottom/${obj.data.ad.bottom.img}`)
        this.adOverlay.style.display = 'block'
        obj.isPlayVideo = true
        obj.adFlag = false
    }
    onChangeAd(event) {
        this.type = event.target.value
    }
    showAdSkipBefore(obj) {
        this.obj = obj

        this.adSkipBefore.style.display = 'block'
        this.adSkipImg.setAttribute('src', `/static/img/poster/${obj.data.poster}`)
        this.adSkipTime.innerText = 5
        this.showAdSkipTimer(obj)
    }
    showAdSkipAfter(obj) {
        this.adSkipBefore.style.display = 'none'
        this.adSkipAfter.style.display = 'block'
        this.adSkipAfter.addEventListener('click', () => {
            obj.onEnded()
            this.adSkipAfter.style.display = 'none'
            this.adSkipAfter.removeEventListener('click', null, false)
        })
    }
    showAdSkipTimer(obj) {
        setTimeout(() => {
            const time = this.adSkipTime.innerText - 1
            if (time > 0) {
                this.adSkipTime.innerText = time
                this.showAdSkipTimer(obj)
            } else {
                this.showAdSkipAfter(obj)
            }
        }, 1000)
    }

}