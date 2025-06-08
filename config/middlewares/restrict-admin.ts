const allowedIps = ['47.222.12.40'];
export default (config, { strapi }) => {
  return async (ctx, next) => {
    if (
    ctx.request.url.startsWith('/admin') &&
    process.env.NODE_ENV === 'production' &&
    !allowedIps.includes(ctx.request.ip)
    ) {
    ctx.unauthorized(`Admin access is disabled for your IP`);
    }
  };
};
