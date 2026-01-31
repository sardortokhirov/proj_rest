module.exports = {
  apps: [{
    name: "restarter-api",
    script: "/root/Shade/restarter/venv/bin/python",
    args: "-m uvicorn main:app --host 0.0.0.0 --port 8000",
    cwd: "/root/Shade/restarter",
    interpreter: "none",
    autorestart: true,
    watch: false,
    max_memory_restart: "200M",
    env: {
      NODE_ENV: "production"
    }
  }]
};
