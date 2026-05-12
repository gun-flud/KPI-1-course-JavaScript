import {
    directedAdjastencyMatrix,
    udirectedAdjectencyMatrix,
    countDegrees,
    isRegular,
    n,
} from "../lab4.js";

function renderMatrix(id, mat) {
    const el = document.getElementById(id);
    if (!el) return;

    const header =
        "<tr><th></th>" +
        Array.from({ length: n }, (v, k) => `<th>${k + 1}</th>`).join("") +
        "</tr>";

    const body = mat
        .map(
            (row, i) =>
                `<tr><th>${i + 1}</th>` +
                row
                    .map((v) => `<td class="${v ? "one" : "zero"}">${v}</td>`)
                    .join("") +
                "</tr>",
        )
        .join("");

    el.innerHTML = `<table><thead>${header}</thead><tbody>${body}</tbody></table>`;

    renderIsRegularTitle(id, mat);
}

const renderIsRegularTitle = (id, matrix) => {
    const result = isRegular(matrix);
    const titleElement = document.createElement('h2');
    titleElement.innerHTML = `
      isRegular: ${result.isRegular}
      degree: ${result.degree}
    `;
    document.getElementById(id).appendChild(titleElement);
}

renderMatrix("dirMatrix", directedAdjastencyMatrix);
renderMatrix("undirMatrix", udirectedAdjectencyMatrix);

const place = [
    [0.2, 0.2], // 1
    [0.5, 0.2], // 2
    [0.8, 0.2], // 3
    [0.8, 0.5], // 4
    [0.8, 0.8], // 5
    [0.5, 0.8], // 6
    [0.2, 0.8], // 7
    [0.2, 0.5], // 8
    [0.5, 0.5], // 9
];

const collors = {
    bg: "#f8fafc",
    edgeDir: "#6366f1",
    edgeUndir: "#10b981",
    node: "#3b82f6",
    nodeBorder: "#1d4ed8",
    nodeText: "#ffffff",
};
const NODE_R = 16;
const ARROW_SIZE = 8;

function drawNode(ctx, pos, text) {
    ctx.beginPath();

    ctx.arc(pos.x, pos.y, NODE_R, 0, 2 * Math.PI);
    ctx.fillStyle = collors.node;
    ctx.fill();

    ctx.strokeStyle = collors.nodeBorder;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = collors.nodeText;
    ctx.font = `bold 12px -apple-system, system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(text), pos.x, pos.y);
}

function drawGraph(id, mat, directed) {
  const canvas = document.getElementById(id);
  if (!canvas) return;

  const dpr = window.devicePixelRatio || 1;
  const W   = canvas.clientWidth  || 500;
  const H   = canvas.clientHeight || 300;
  canvas.width  = W * dpr;
  canvas.height = H * dpr;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  ctx.fillStyle = collors.bg;
  ctx.fillRect(0, 0, W, H);

  const pts = place.map(([nx, ny]) => ({ x: nx * W, y: ny * H }));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!mat[i][j]) continue;

      if (directed) {

        if (i === j) {
          drawLoop(ctx, pts[i], true);
        } else {
          drawDirEdge(ctx, pts[i], pts[j], !!mat[j][i]);
        }

      } else {

        if (i === j) {
          drawLoop(ctx, pts[i], false);
        } else if (i < j) {
          drawUndirEdge(ctx, pts[i], pts[j]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    drawNode(ctx, pts[i], i + 1);
  }
}

function drawLoop(ctx, node, directed) {

  const loopRadius = 12;

  const loopX = node.x;
  const loopY = node.y - NODE_R - loopRadius;

  ctx.beginPath();

  ctx.strokeStyle = directed
    ? collors.edgeDir
    : collors.edgeUndir;

  ctx.lineWidth = 1.8;

  ctx.arc(
    loopX,
    loopY,
    loopRadius,
    0,
    Math.PI * 2
  );

  ctx.stroke();

  if (directed) {

    ctx.fillStyle = collors.edgeDir;

    arrowhead(
      ctx,
      loopX + loopRadius,
      loopY,
      Math.PI / 2
    );
  }
}

function arrowhead(ctx, x, y, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-ARROW_SIZE, -ARROW_SIZE * 0.45);
  ctx.lineTo(-ARROW_SIZE,  ARROW_SIZE * 0.45);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}


function drawDirEdge(ctx, a, b, curved) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const dist = Math.hypot(dx, dy);
  const nx = dx / dist, ny = dy / dist;

  // Trim start/end to circle boundary
  const sx = a.x + nx * NODE_R, sy = a.y + ny * NODE_R;
  const ex = b.x - nx * NODE_R, ey = b.y - ny * NODE_R;

  ctx.strokeStyle = collors.edgeDir;
  ctx.fillStyle   = collors.edgeDir;
  ctx.lineWidth   = 1.5;

  if (curved) {
    // Perpendicular offset → curves to the left of the direction a→b
    const off = 26;
    const cx  = (sx + ex) / 2 - ny * off;
    const cy  = (sy + ey) / 2 + nx * off;

    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.quadraticCurveTo(cx, cy, ex, ey);
    ctx.stroke();

    // Arrowhead tangent: direction from control-point to end
    arrowhead(ctx, ex, ey, Math.atan2(ey - cy, ex - cx));
  } else {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();

    arrowhead(ctx, ex, ey, Math.atan2(dy, dx));
  }
}

function drawUndirEdge(ctx, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const dist = Math.hypot(dx, dy);
  const nx = dx / dist, ny = dy / dist;

  ctx.strokeStyle = collors.edgeUndir;
  ctx.lineWidth   = 1.8;
  ctx.beginPath();
  ctx.moveTo(a.x + nx * NODE_R, a.y + ny * NODE_R);
  ctx.lineTo(b.x - nx * NODE_R, b.y - ny * NODE_R);
  ctx.stroke();
}

window.addEventListener('load', () => {
  drawGraph('dirCanvas',   directedAdjastencyMatrix,   true);
  drawGraph('undirCanvas', udirectedAdjectencyMatrix, false);
  renderMatrix('dirMatrix',   directedAdjastencyMatrix);
  renderMatrix('undirMatrix', udirectedAdjectencyMatrix);
});


function showTooltip(nodeIndex, mouseX, mouseY, canvasId, degrees, outDegrees, inDegrees, state) {
  const tooltip = document.getElementById('graphTooltip');

  tooltip.innerHTML = `
    <p>Vertex ${nodeIndex + 1}</p>
    <p>Graph: ${canvasId}</p>
    <p>Degree: ${degrees}</p>
    <p>Out-degree: ${outDegrees}</p>
    <p>In-degree: ${inDegrees}</p>
    <p>State: ${state}</p>
  `;

  tooltip.style.left = `${mouseX}px`;
  tooltip.style.top = `${mouseY}px`;

  tooltip.classList.add('show');
}

function hideTooltip() {
  const tooltip = document.getElementById('graphTooltip');
  if (!tooltip) return;
  tooltip.classList.remove('show');
}

const dirCanvas = document.getElementById('dirCanvas');
const undirCanvas = document.getElementById('undirCanvas');

dirCanvas.addEventListener('mousemove', (e) => {
  handleHover(e, 'dirCanvas', directedAdjastencyMatrix);
});

undirCanvas.addEventListener('mousemove', (e) => {
  handleHover(e, 'undirCanvas', udirectedAdjectencyMatrix);
});

dirCanvas.addEventListener('mouseleave', hideTooltip);
undirCanvas.addEventListener('mouseleave', hideTooltip);


function handleHover(e, canvasId, matrix) {

  const canvas = document.getElementById(canvasId);

  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const pts = place.map(([nx, ny]) => ({
    x: nx * rect.width,
    y: ny * rect.height
  }));

  let hovered = false;

  for (let i = 0; i < n; i++) {

    const node = pts[i];

    const dx = x - node.x;
    const dy = y - node.y;

    const dist = Math.hypot(dx, dy);

    if (dist < NODE_R) {

      hovered = true;

      const { degrees, outDegrees, inDegrees, state } = countDegrees(matrix, i);

      showTooltip(
        i,
        e.clientX,
        e.clientY,
        canvasId,
        degrees,
        outDegrees,
        inDegrees,
        state
      );

      canvas.style.cursor = 'pointer';
      break;
    }
  }

  if (!hovered) {
    canvas.style.cursor = 'default';
    hideTooltip();
  }
}
