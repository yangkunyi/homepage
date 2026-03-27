export const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBase(path: string) {
  if (path === "/") {
    return baseUrl;
  }

  return `${baseUrl}${path.replace(/^\//, "")}`;
}
