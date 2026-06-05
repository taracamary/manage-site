function freePortOnWindows() {
  try {
    const output = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    const pids = new Set();

    output
      .split(/\r?\n/)
      .filter((line) => line.trim().length > 0)
      .forEach((line) => {
        const parts = line.trim().split(/\s+/);
        const pid = parts[parts.length - 1];
        if (pid && pid !== "0" && !isNaN(pid)) {
          pids.add(pid);
        }
      });

    pids.forEach((pid) => {
      execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
      console.log(`Freed port ${port} (stopped PID ${pid})`);
    });
  } catch (error) {}
}
