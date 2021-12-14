module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6906dc5575a75193b58a419f4c90aca4'),
  },
});
