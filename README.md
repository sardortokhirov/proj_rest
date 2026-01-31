# Shade Restarter API

Simple Python API to restart the Shade application by running `restart_shade.sh`.

## Setup on Linux Server

1. **Copy files to your server:**
   ```bash
   scp main.py requirements.txt root@your-server:/root/restarter/
   ```

2. **Install dependencies:**
   ```bash
   cd /root/restarter
   pip install -r requirements.txt
   ```

3. **Make sure the restart script is executable:**
   ```bash
   chmod +x /root/Shade/restart_shade.sh
   ```

4. **Run the API:**
   ```bash
   python main.py
   ```

   Or run in background:
   ```bash
   nohup python main.py > api.log 2>&1 &
   ```

## API Endpoints

| Method | Endpoint   | Description                    |
|--------|------------|--------------------------------|
| GET    | `/`        | API info                       |
| POST   | `/restart` | Run restart_shade.sh script    |
| GET    | `/health`  | Health check                   |

## Usage

**Restart the Shade application:**
```bash
curl -X POST http://your-server-ip:8000/restart
```

**Check API health:**
```bash
curl http://your-server-ip:8000/health
```

## Response Example

```json
{
  "success": true,
  "message": "Restart command executed",
  "stdout": "...",
  "stderr": "...",
  "return_code": 0
}
```

## Port

The API runs on port **8000** by default. Make sure this port is open in your firewall:
```bash
ufw allow 8000
```
