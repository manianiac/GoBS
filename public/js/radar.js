/**
 * The Guild of the Black Sky // Confluence Sovereign Airspace & Mine Radar
 * Real-Time Tactical Aerospace & Subterranean Logistics Tracker
 */

(function () {
  const canvas = document.getElementById('satelliteRadar');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = 440);
  let height = (canvas.height = 440);
  const center = { x: width / 2, y: height / 2 };
  const airspaceRadius = width / 2 - 60;

  let angle = 0;

  // Rigid-hull airship fleet in Confluence flight corridors
  const airships = [
    { name: "LEVIATHAN FLAGSHIP", dist: airspaceRadius + 22, angle: 0.5, speed: 0.007, alt: "12,400 ft", type: "Dreadnought", status: "PATROL" },
    { name: "CLOUD-STRIDER IV", dist: airspaceRadius + 30, angle: 2.1, speed: 0.009, alt: "14,800 ft", type: "Interceptor", status: "INTERCEPT" },
    { name: "NOCTIS HAULER", dist: airspaceRadius + 15, angle: 3.4, speed: 0.006, alt: "8,200 ft", type: "Ore Transport", status: "TRANSIT" },
    { name: "VINDICATOR SCOUT", dist: airspaceRadius + 38, angle: 4.8, speed: 0.0085, alt: "16,000 ft", type: "Recon", status: "SURVEIL" }
  ];

  // Ground sectors and tactical outposts across Nova Regnus
  const groundTargets = [
    { name: "CONFLUENCE SKYPORT (NORTH)", x: center.x, y: center.y - 10, type: "Capital Skyport" },
    { name: "HIGH COURT CITADEL (CENTRAL)", x: center.x - 25, y: center.y + 15, type: "Sacred Desk" },
    { name: "HIGH MARKET BAZAAR (EAST)", x: center.x + 40, y: center.y + 20, type: "Commercial Bazaar" },
    { name: "LITTLE TIMMY'S STAND", x: center.x - 15, y: center.y + 65, type: "Gated Underdark Sentinel" },
    { name: "PORT TAWNY CORRIDOR", x: center.x + 85, y: center.y - 45, type: "Trade Sky-Lane" },
    { name: "CHAOS VEIL BORDER", x: center.x - 90, y: center.y - 50, type: "Warded Perimeter" }
  ];

  function drawTacticalGrid() {
    ctx.clearRect(0, 0, width, height);

    // Deep airspace glow
    const spaceGrad = ctx.createRadialGradient(center.x, center.y, airspaceRadius * 0.4, center.x, center.y, airspaceRadius * 1.4);
    spaceGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
    spaceGrad.addColorStop(1, 'rgba(11, 17, 28, 0.95)');
    ctx.fillStyle = spaceGrad;
    ctx.fillRect(0, 0, width, height);

    // Confluence Mountain Core Sphere
    const coreGrad = ctx.createRadialGradient(center.x - 20, center.y - 20, 10, center.x, center.y, airspaceRadius);
    coreGrad.addColorStop(0, '#132847');
    coreGrad.addColorStop(0.7, '#0b1626');
    coreGrad.addColorStop(1, '#050b14');

    ctx.save();
    ctx.beginPath();
    ctx.arc(center.x, center.y, airspaceRadius, 0, Math.PI * 2);
    ctx.fillStyle = coreGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Altitude Rings & Coordinate Rings
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.lineWidth = 1;
    for (let r = 1; r < 4; r++) {
      ctx.beginPath();
      ctx.arc(center.x, center.y, (airspaceRadius / 4) * r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(center.x - airspaceRadius, center.y);
    ctx.lineTo(center.x + airspaceRadius, center.y);
    ctx.moveTo(center.x, center.y - airspaceRadius);
    ctx.lineTo(center.x, center.y + airspaceRadius);
    ctx.stroke();

    ctx.restore();

    // Outer Orbit Rings
    ctx.save();
    ctx.strokeStyle = 'rgba(234, 88, 12, 0.35)';
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.arc(center.x, center.y, airspaceRadius + 22, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(center.x, center.y, airspaceRadius + 38, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Ground & Mountain Coordinates
    groundTargets.forEach(t => {
      ctx.save();
      ctx.fillStyle = '#f59e0b';
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(t.x, t.y, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '7.5px monospace';
      ctx.fillText(t.name, t.x + 6, t.y + 3);
      ctx.restore();
    });
  }

  function drawAirships() {
    airships.forEach(ship => {
      ship.angle += ship.speed;
      const x = center.x + Math.cos(ship.angle) * ship.dist;
      const y = center.y + Math.sin(ship.angle) * ship.dist;

      // Draw searchlight beam down to mountain
      if (ship.status === 'PATROL' || ship.status === 'INTERCEPT') {
        const targetX = center.x + Math.cos(ship.angle) * (airspaceRadius * 0.65);
        const targetY = center.y + Math.sin(ship.angle) * (airspaceRadius * 0.65);

        ctx.save();
        const beamGrad = ctx.createLinearGradient(x, y, targetX, targetY);
        beamGrad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
        beamGrad.addColorStop(1, 'rgba(56, 189, 248, 0.0)');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(targetX - 12, targetY);
        ctx.lineTo(targetX + 12, targetY);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // Airship icon: elongated rigid zeppelin silhouette
      ctx.save();
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 6;

      ctx.beginPath();
      ctx.ellipse(x, y, 6, 2.5, ship.angle + Math.PI / 2, 0, Math.PI * 2);
      ctx.fill();

      // Tail fins
      ctx.fillStyle = '#f97316';
      ctx.fillRect(x - 1, y - 1, 2, 2);

      // Label
      ctx.fillStyle = '#ffffff';
      ctx.font = '8px monospace';
      ctx.fillText(ship.name.split(' ')[0], x + 8, y + 3);
      ctx.restore();
    });
  }

  function drawRadarSweep() {
    const sweepX = center.x + Math.cos(angle) * (airspaceRadius + 44);
    const sweepY = center.y + Math.sin(angle) * (airspaceRadius + 44);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(sweepX, sweepY);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.restore();
  }

  function render() {
    angle = (angle + 0.015) % (Math.PI * 2);
    drawTacticalGrid();
    drawRadarSweep();
    drawAirships();
    requestAnimationFrame(render);
  }

  render();
})();
