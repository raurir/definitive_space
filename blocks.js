window.addEventListener("DOMContentLoaded", function() {
  var e = function() {
    function e() {
      var e = this;
      this.canvas = document.createElement("canvas");
      this.canvas.width = this.cols * this.cell;
      this.canvas.height = this.rows * this.cell;
      this.miniScale = 1;
      this.mini = document.createElement("canvas");
      document.getElementById("blocks").appendChild(this.mini);
      this.mini.width = this.cols * this.cell * this.miniScale;
      this.mini.height = this.rows * this.cell * this.miniScale;
      this.miniContext = this.mini.getContext("2d");
      this.context = this.canvas.getContext("2d");
      this.context.fillStyle = "#000";
      this.context.fillRect(0, 0, this.cols * this.cell, this.rows * this.cell);
      this.grid();
    }
    e.prototype.context = null;
    e.prototype.cell = 32;
    e.prototype.rows = 20;
    e.prototype.cols = 20;
    e.prototype.grid = function() {
      var e, t, n, r, i, s, o, u, a;
      for (
        n = s = 0, u = this.rows;
        0 <= u ? s <= u : s >= u;
        n = 0 <= u ? ++s : --s
      )
        for (
          t = o = 0, a = this.cols;
          0 <= a ? o <= a : o >= a;
          t = 0 <= a ? ++o : --o
        ) {
          r = t * this.cell;
          i = n * this.cell;
          e = Math.round(
            ((t / this.cols) * 0.5 + ((Math.random() * t) / this.cols) * 0.3) *
              255
          );
          this.context.fillStyle = "rgb(" + e + "," + e + "," + e + ")";
          this.context.fillRect(r, i, this.cell, this.cell);
        }
      return this.digitize();
    };
    e.prototype.digitize = function() {
      var e,
        t,
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T,
        N,
        C,
        k,
        L,
        A,
        O,
        M = this;
      d = Math.round(Math.random() * 10);
      r = d < 6 ? 1 : 2;
      n = this.cell * r;
      t = { r: 0, g: 0, b: 0 };
      w = Math.round(Math.random() * (this.cols - r)) * this.cell;
      S = Math.round(Math.random() * (this.rows - r)) * this.cell;
      h = this.context.getImageData(w, S, n, n).data;
      for (
        p = x = 0, k = n - 1;
        0 <= k ? x <= k : x >= k;
        p = 0 <= k ? ++x : --x
      )
        for (
          s = T = 0, L = n - 1;
          0 <= L ? T <= L : T >= L;
          s = 0 <= L ? ++T : --T
        ) {
          c = (p * n + s) * 4;
          v = h[c + 0];
          f = h[c + 1];
          i = h[c + 2];
          e = h[c + 3];
          t.r += v;
          t.g += f;
          t.b += i;
        }
      l = n * n;
      t.r /= l;
      t.g /= l;
      t.b /= l;
      t.r = parseInt(t.r);
      t.g = parseInt(t.g);
      t.b = parseInt(t.b);
      t.brightness = Math.ceil((t.r + t.g + t.b) / 3);
      a = t.brightness * 2;
      m = Math.pow(2, Math.round(Math.random() * 3));
      g = n / m;
      y = function(e) {
        var t;
        t = Math.round(e + 10 - Math.random() * 20);
        t = Math.round(e * 2);
        t > 255 && (t = 255);
        t < 0 && (t = 0);
        return t;
      };
      o = Math.random() > 0.8;
      if (o)
        for (
          p = N = 0, A = g - 1;
          0 <= A ? N <= A : N >= A;
          p = 0 <= A ? ++N : --N
        )
          for (
            s = C = 0, O = g - 1;
            0 <= O ? C <= O : C >= O;
            s = 0 <= O ? ++C : --C
          ) {
            b = w + s * m;
            E = S + p * m;
            (p + s) % 2 === 0
              ? (u = "rgb(" + a + "," + a + "," + a + ")")
              : (u = "rgb(0,0,0)");
            this.context.fillStyle = u;
            this.context.fillRect(b, E, m, m);
          }
      else {
        u =
          "rgb(" + t.brightness + "," + t.brightness + "," + t.brightness + ")";
        this.context.fillStyle = u;
        this.context.fillRect(w, S, n, n);
      }
      this.miniContext.globalCompositeOperation = "source-over";
      this.miniContext.beginPath();
      this.miniContext.rect(0, 0, this.mini.width, this.mini.height);
      this.miniContext.rect(
        10,
        10,
        this.mini.width - 20,
        this.mini.height - 20
      );
      this.miniContext.fillStyle = "rgb(74,223,255)";
      this.miniContext.fill();
      this.miniContext.globalCompositeOperation = "darker";
      this.miniContext.drawImage(
        this.canvas,
        0,
        0,
        this.mini.width,
        this.mini.height
      );
      return setTimeout(function() {
        return M.digitize();
      }, 500);
    };
    return e;
  };
  var k = e();
  var t = new k();
});
