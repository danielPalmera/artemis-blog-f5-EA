export function localImg(src: string, base: string): string {
    if (!src) return '';
    
    // Normalize base to not have trailing slash for consistency here
    const cleanBase = base.replace(/\/$/, '');
    
    // Case 1: Replace dev server URL with local path
    let path = src.replace(/^https?:\/\/[^/]+(\/images\/)/, '$1');
    
    // Case 2: Ensure path starts with base if it's an absolute path within the site
    if (path.startsWith('/images/')) {
        return `${cleanBase}${path}`;
    }
    
    return path;
}

export function absoluteImg(src: string, site: string | URL | undefined, base: string): string {
    if (!src) return '';
    const local = localImg(src, base);
    
    // If it's already absolute (e.g. external link), return as is
    if (/^https?:\/\//.test(local)) return local;
    
    const cleanSite = (site?.toString() ?? '').replace(/\/$/, '');
    return `${cleanSite}${local}`;
}
