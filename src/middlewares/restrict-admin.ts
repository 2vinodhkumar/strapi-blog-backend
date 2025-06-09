const allowedIps = ['47.222.12.40'];
export default (config, { strapi }) => {
  return async (ctx, next) => {
    const allowedIps = ['::1', '127.0.0.1', '47.222.12.40'];

const ip = ctx.request.ip.replace('::ffff:', '');
console.log('IP Address:', ip);
if (
  ctx.request.url.startsWith('/admin') &&
  process.env.NODE_ENV === 'production' &&
  !allowedIps.includes(ip)
) {
  ctx.unauthorized('Admin access is disabled for your IP');
}
  };
};
