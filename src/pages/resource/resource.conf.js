/* i18n */
import i18n from '../../locales';
import { i18nKeys } from '../../i18n';

export const DOCUMENTS_ENDPOINT = 'documents';
export const FILE_RESOURCES_ENDPOINT = 'fileResources';

export const TYPES = {
    UPLOAD_FILE: 'UPLOAD_FILE',
    EXTERNAL_URL: 'EXTERNAL_URL',
};

export const RESOURCE_TYPES = [
    {
        id: TYPES.UPLOAD_FILE,
        name: i18n.t(i18nKeys.resource.uploadResourceType),
        external: false,
    },
    {
        id: TYPES.EXTERNAL_URL,
        name: i18n.t(i18nKeys.resource.externalResourceType),
        external: true,
    },
];
