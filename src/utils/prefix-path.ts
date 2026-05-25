const BASE_PATH = '/AventoDrones';

export function prefixPath(path: string | undefined): string {
    if (!path) {
        return '';
    }
    // Only prefix internal absolute paths (e.g. /images/...) and prevent double prefixing
    if (path.startsWith('/') && !path.startsWith('//') && !path.startsWith(BASE_PATH)) {
        return `${BASE_PATH}${path}`;
    }
    return path;
}
