import CryptoJS from 'crypto-js';
import {clearToken} from './helpers/utility';

export default class GlobalState {

    static get profile() {

        let profile;

        try {

            profile = JSON.parse(
                CryptoJS.AES.decrypt(
                    localStorage.getItem('profile'),
                    localStorage.getItem('id_token'),
                ).toString(CryptoJS.enc.Utf8)
            );

        } catch (e) {

            clearToken();
            window.location.reload();
            return;

        }

        return profile;

    }

};

// EOF