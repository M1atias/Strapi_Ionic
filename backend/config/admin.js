module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'afc92ab8d7d23fbc588955571820175d'),
  },
});
