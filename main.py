from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import subprocess
import os

app = FastAPI(title="Shade Restarter API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Path to the restart script
SCRIPT_PATH = "/root/Shade/restart_shade.sh"


@app.get("/")
async def root():
    return {"message": "Shade Restarter API", "status": "running"}


@app.post("/restart")
async def restart_shade():
    """
    Restart the Shade application by running restart_shade.sh
    """
    try:
        # Check if script exists
        if not os.path.exists(SCRIPT_PATH):
            raise HTTPException(status_code=404, detail=f"Script not found: {SCRIPT_PATH}")
        
        # Run the restart script
        result = subprocess.run(
            ["bash", SCRIPT_PATH],
            capture_output=True,
            text=True,
            timeout=120  # 2 minute timeout
        )
        
        return JSONResponse(content={
            "success": True,
            "message": "Restart command executed",
            "stdout": result.stdout,
            "stderr": result.stderr,
            "return_code": result.returncode
        })
        
    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=408, detail="Script execution timed out")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
