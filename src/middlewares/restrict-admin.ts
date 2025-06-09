const allowedIps = ['47.222.12.40'];
export default (config, { strapi }) => {
  return async (ctx, next) => {
    const allowedIps = ['::1', '127.0.0.1', '47.222.12.40'];

const ip = ctx.request.ip.replace('::ffff:', '');
console.log('IP Address:', ip);
const rawIp = ctx.request.headers['x-forwarded-for'] || ctx.request.ip;
const clientIp = Array.isArray(rawIp) ? rawIp[0] : rawIp?.toString().split(',')[0] || '';

// Now use `clientIp` instead of `ctx.request.ip`
console.log('Client IP:', clientIp);
if (
  ctx.request.url.startsWith('/admin') &&
  process.env.NODE_ENV === 'production' &&
  !allowedIps.includes(clientIp)
) {
  ctx.unauthorized('Admin access is disabled for your IP');
}
  };
};
