const { execSync } = require("child_process");

const port = process.argv[2] || "8080";

function freePortOnWindows() {
  try {
    const output = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    const pids = new Set();

    output
      .split(/\r?\n/)
      .filter((line) => line.includes("LISTENING"))
      .forEach((line) => {
        const pid = line.trim().split(/\s+/).pop();
        if (pid && pid !== "0") {
          pids.add(pid);
        }
      });

    pids.forEach((pid) => {
      execSync(`taskkill //F //PID ${pid}`, { stdio: "ignore" });
      console.log(`Freed port ${port} (stopped PID ${pid})`);
    });
  } catch (error) {
    // Port is already free or netstat found nothing.
  }
}

function freePortOnUnix() {
  try {
    const output = execSync(`lsof -ti tcp:${port}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    output
      .split(/\r?\n/)
      .map((pid) => pid.trim())
      .filter(Boolean)
      .forEach((pid) => {
        execSync(`kill -9 ${pid}`, { stdio: "ignore" });
        console.log(`Freed port ${port} (stopped PID ${pid})`);
      });
  } catch (error) {
    // Port is already free or lsof found nothing.
  }
}

if (process.platform === "win32") {
  freePortOnWindows();
} else {
  freePortOnUnix();
}
