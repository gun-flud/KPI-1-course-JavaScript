import {
    directedAdjastencyMatrix,
    udirectedAdjectencyMatrix,
    n,
} from "../lab3.js";

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

  // Background
  ctx.fillStyle = collors.bg;
  ctx.fillRect(0, 0, W, H);

  // Pixel positions from normalised layout
  const pts = place.map(([nx, ny]) => ({ x: nx * W, y: ny * H }));

  // ── Edges ──
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!mat[i][j]) continue;

      if (directed) {
        // Curve when the reverse edge also exists (avoids overlap)
        drawDirEdge(ctx, pts[i], pts[j], !!mat[j][i]);
      } else if (i < j) {
        // Undirected: draw each pair once
        drawUndirEdge(ctx, pts[i], pts[j]);
      }
    }
  }

  // ── Nodes (drawn on top of edges) ──
  for (let i = 0; i < n; i++) {
    drawNode(ctx, pts[i], i + 1);
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

