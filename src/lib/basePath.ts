export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteUrl = basePath
  ? `https://vama-shivantra.github.io${basePath}`
  : "https://shivantra.com";
