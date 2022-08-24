import axios from "axios";
import router from '../router.js'
import {tip, toLogin, to403Page} from './utils.js'


const errorHandle = (status, msg) => {
    switch(status) {
        case 400:
            tip(msg);
            break;

        case 401:
            tip('out of time');
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;

        case 404:
            tip(msg);
            break;
        
        default:
            console.log('resp: ' + msg);
    }
}

instance.interceptors.request.use