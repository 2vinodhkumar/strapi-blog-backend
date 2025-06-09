const allowedIps = ['47.222.12.40'];
export default (config, { strapi }) => {
  return async (ctx, next) => {
    const ip = ctx.request.headers['x-forwarded-for'] || ctx.request.ip;
    if (
    ctx.request.url.startsWith('/admin') &&
    process.env.NODE_ENV === 'production' &&
    !allowedIps.includes(ip)
    ) {
    ctx.unauthorized(`Admin access is disabled for your IP`);
    }
  };
};
