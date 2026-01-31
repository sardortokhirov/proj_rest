module.exports = {
  apps: [{
    name: "restarter-api",
    script: "uvicorn",
    args: "main:app --host 0.0.0.0 --port 8000",
    cwd: "/root/restarter",
    interpreter: "python3",
    interpreter_args: "-m",
    autorestart: true,
    watch: false,
    max_memory_restart: "200M",
    env: {
      NODE_ENV: "production"
    }
  }]
};
