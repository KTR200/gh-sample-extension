import { GhostContent } from '@core/types';
import { createPluginImporter } from '@utils/wails';

const { importWailsBindings } = createPluginImporter('default');

export const content: GhostContent = {
    onActivate: async () => {
        console.log('Default ghost activated!!!');
    },

    onDeactivate: async () => {
        console.log('Default ghost deactivated!!!');
    },

    onClick: async () => {
        try {
            const wails = await importWailsBindings();
            await wails.ReturnFocusToPreviousWindow();
        } catch (error) {
            console.error('Failed to return focus:', error);
        }
    },
    getButtonText: () => 'Click me!'
};