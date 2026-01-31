module.exports = {
  apps: [{
    name: "restarter-api",
    script: "/root/restarter/venv/bin/uvicorn",
    args: "main:app --host 0.0.0.0 --port 8000",
    cwd: "/root/restarter",
    autorestart: true,
    watch: false,
    max_memory_restart: "200M",
    env: {
      NODE_ENV: "production",
      PATH: "/root/restarter/venv/bin:" + process.env.PATH
    }
  }]
};
