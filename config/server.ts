export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['mUpqXgu/f8SEcJe5av/vJw==','zOE/8GmQZZAhMKQ4H7FAbw==','ONt/oWRIwuH4NBkivY5t3g==','+T++p7hEiQ7g3zkySZLzLg==']),
  },
});
