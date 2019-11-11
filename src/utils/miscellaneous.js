import objectAssign from 'core-js-pure/stable/object/assign';
import objectEntries from 'core-js-pure/stable/object/entries';
import { ZalgoPromise } from 'zalgo-promise';

import { partial } from './functional';

/**
 * Create a state object and pass back a reference and update function
 * @param {Object} initialState Initial object to store in state
 * @returns {[Object, Function]} State object reference and update function
 */
export function createState(initialState = {}) {
    const state = { ...initialState };
    return [state, partial(objectAssign, state)];
}

/**
 * Create a new error with a special onEnd attribute that
 * will be called after the error has been handled
 * @param {String} message Error message
 * @param {Function} cb Callback function
 */
export function createCallbackError(message, cb) {
    const error = new Error(message);
    // onEnd callback will be called after completing the current logger
    error.onEnd = cb;

    return error;
}

export function request(method, url, { data, headers } = {}) {
    return new ZalgoPromise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                const responseHeaders = xhttp
                    .getAllResponseHeaders()
                    .split('\n')
                    .reduce((accumulator, header) => {
                        const [key, val] = header.trim().split(': ');
                        return {
                            ...accumulator,
                            [key]: val
                        };
                    }, {});

                switch (xhttp.status) {
                    case 200:
                        resolve({ headers: responseHeaders, data: xhttp.responseText });
                        break;
                    case 204:
                        resolve({ headers: responseHeaders });
                        break;
                    default:
                        reject(new Error('Request failed'));
                }
            }
        };

        xhttp.open(method, url, true);

        if (headers) {
            objectEntries(headers).forEach(([header, value]) => {
                xhttp.setRequestHeader(header, value);
            });
        }

        xhttp.send(typeof data === 'object' ? JSON.stringify(data) : data);
    });
}
