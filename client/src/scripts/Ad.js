export default class Ad {
    constructor() {
        this.adOverlay = document.querySelector('.ad-overlay')

        /** 媒體廣告 */

        /** 重疊廣告 */
        this.adOverlayCross = document.querySelector('.ad-overlay-cross')
        this.adOverlayCross.addEventListener('click', this.closeAdOverlay.bind(this))

        /** 可略過的影片廣告 */

        /** 贊助商資訊卡 */
    }

    closeAdOverlay(event) {
        this.adOverlay.style.visibility = 'hidden';
    }
    showAdOverlay(event) {
        this.adOverlay.style.visibility = 'visible';
    }

}