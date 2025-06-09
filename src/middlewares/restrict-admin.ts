export default (config, { strapi }) => {
  const allowedIps = ['::1', '127.0.0.1', '47.222.12.40'];

  return async (ctx, next) => {
    const rawIp = ctx.request.headers['x-forwarded-for'] || ctx.request.ip;
    const clientIp = Array.isArray(rawIp) ? rawIp[0] : rawIp?.toString().split(',')[0] || '';

    console.log('Client IP:', clientIp);

    if (
      ctx.request.url.startsWith('/admin') &&
      process.env.NODE_ENV === 'production' &&
      !allowedIps.includes(clientIp.trim())
    ) {
      return ctx.unauthorized('Admin access is disabled for your IP');
    }

    await next();
  };
};
