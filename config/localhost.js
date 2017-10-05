module.exports = {
  hostname: 'localhost',
  behind_proxy: false,
  show_tour: true,
  config_driver: "linvo",
  authorized_roles: "config/localhost.rbac",
  backend: {
    driver: "sybil",
    db: "snorkel"
  },
  analytics: {
    enabled: true
  }
};
