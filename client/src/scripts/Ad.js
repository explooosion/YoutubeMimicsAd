export default class Ad {
    constructor() {

        this.type = null

        /** 下拉式選單 */
        this.selAd = document.querySelector('.selAd')
        this.selAd.addEventListener('change', this.onChangeAd.bind(this))

        /** 媒體廣告 */

        /** 重疊廣告 */
        this.adOverlay = document.querySelector('.ad-overlay')
        this.adOverlayCross = document.querySelector('.ad-overlay-cross')
        this.adOverlayCross.addEventListener('click', this.onCloseAdOverlay.bind(this))
        this.adOverlayLink = document.querySelector('.ad-overlay-link')
        this.adOverlayImg = document.querySelector('.ad-overlay-link img')

        /** 可略過的影片廣告 */

        /** 贊助商資訊卡 */
    }

    onCloseAdOverlay(event) {
        this.adOverlay.style.visibility = 'hidden'
    }
    showAdOverlay(data) {
        this.adOverlayLink.setAttribute('href', data.ad.bottom.url)
        this.adOverlayImg.setAttribute('src', `/static/img/ad/bottom/${data.ad.bottom.img}`)
        this.adOverlay.style.visibility = 'visible'
    }
    onChangeAd(event) {
        this.type = event.target.value
    }

}