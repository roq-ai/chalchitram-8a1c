const mapping: Record<string, string> = {
  companies: 'company',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
