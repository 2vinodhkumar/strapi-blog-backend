export default [
  'strapi::errors',
  {
    name: 'global::restrict-admin',
    config: {
      resolve: './middlewares/restrict-admin',
    },
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
