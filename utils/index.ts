export function createPageUrl(pageName: string) {
  return '/' + pageName.toLowerCase().replace(/\s+/g, '-');
}
