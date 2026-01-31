module.exports = {
  apps: [{
    name: "restarter-api",
    script: "/root/Shade/restarter/venv/bin/uvicorn",
    args: "main:app --host 0.0.0.0 --port 8000",
    cwd: "/root/Shade/restarter",
    autorestart: true,
    watch: false,
    max_memory_restart: "200M",
    env: {
      NODE_ENV: "production",
      PATH: "/root/Shade/restarter/venv/bin:" + process.env.PATH
    }
  }]
};
