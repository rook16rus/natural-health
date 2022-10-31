import { Fancybox } from '@fancyapps/ui';
import { disableBodyScroll as lockScroll, clearAllBodyScrollLocks as unlockScroll } from 'body-scroll-lock';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        Image: {
            zoom: false
        },
        on: {
            init() {
                lockScroll(this, {
                    reserveScrollBarGap: true,
                });
            },
            closing() {
                unlockScroll(this);
            }
        }
    })
}