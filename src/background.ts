import { GhostBackground } from '@core/types';

export const background: GhostBackground = {
    onInit: async () => {
        console.log('Default ghost initialized!!!');
    },

    onCleanup: async () => {
        console.log('Default ghost cleaned up!!!');
    }
};