from pathlib import Path
from PIL import Image, ImageDraw

base_path = Path(r"C:\Users\User\Projects\ColonetteWeb\public\images\news-granizados-verano.jpg")
logo_path = Path(r"C:\Users\User\Projects\ColonetteWeb\public\images\logo-colonette.png")
clean = Path(
    r"C:\Users\User\.cursor\projects\c-Users-User-Projects-JoelFitnessWeb\assets\news-granizados-verano.jpg"
)

src = clean if clean.exists() else base_path
base = Image.open(src).convert("RGBA")
logo = Image.open(logo_path).convert("RGBA")

pixels = logo.load()
w0, h0 = logo.size
for y in range(h0):
    for x in range(w0):
        r, g, b, a = pixels[x, y]
        if r > 235 and g > 235 and b > 235:
            pixels[x, y] = (r, g, b, 0)
        elif r > 210 and g > 210 and b > 210 and a > 0:
            fade = int(a * ((255 - min(r, g, b)) / 45))
            pixels[x, y] = (r, g, b, max(0, min(255, fade)))

w, h = base.size

# Compact enough for cup face (~cup width ~12% of frame)
logo_w = int(w * 0.082)
logo_h = int(logo.height * (logo_w / logo.width))
logo_r = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

# Cup center x, mid-body y, and horizontal half-width of cup at that height
# Slight left bias so the penguin (right side of logo) stays inside
cups = [
    # (cx, cy, half_width)
    (int(w * 0.225), int(h * 0.50), int(w * 0.055)),
    (int(w * 0.500), int(h * 0.48), int(w * 0.058)),
    (int(w * 0.775), int(h * 0.50), int(w * 0.055)),
]

out = base.copy()
for cx, cy, half in cups:
    # Clip logo into a vertical strip matching cup width
    pad_x = max(0, (logo_w - half * 2) // 2 + 4)
    clipped = logo_r.copy()
    if pad_x > 0:
        mask = Image.new("L", clipped.size, 0)
        draw = ImageDraw.Draw(mask)
        # Soft vertical capsule matching cup taper
        draw.rounded_rectangle(
            (pad_x, 2, logo_w - pad_x - 1, logo_h - 3),
            radius=18,
            fill=255,
        )
        clipped.putalpha(
            Image.composite(
                clipped.split()[-1],
                Image.new("L", clipped.size, 0),
                mask,
            )
        )

    x = cx - logo_w // 2
    y = cy - logo_h // 2
    out.alpha_composite(clipped, (x, y))

out.convert("RGB").save(base_path, quality=93, optimize=True)
print("ok", base_path, f"{logo_w}x{logo_h}")
