# snorkel config

this repo contains config data for snorkel, to be cloned into `app/plugins`. It
is useful for holding config data in a separate and maintainable repo from the
snorkel code.

The `config/` directory in this repo is examined when loading snorkel config,
users.htpasswd and rbac info.

The config repo can be specified using `config_dir` key in `config/config.js`,
by default it is `app/plugins/snorkel-config`, in alignment with this repo
