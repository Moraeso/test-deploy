module.exports = {
  apps : [{
    name: 'LUMIA.GG',
    script: 'npm',
    args: 'start',
    env_production: {
      NODE_ENV: "production",
    },
    watch: true
  }],
};
