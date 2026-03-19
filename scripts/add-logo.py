"""Ajoute le logo KRAKEN METALS (effet métallique) sur l'image de soudage."""
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Installation de Pillow...")
    import subprocess
    subprocess.check_call(["pip", "install", "Pillow"])
    from PIL import Image, ImageDraw, ImageFont

# Chemins
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
ASSETS_DIR = PROJECT_DIR / "assets"
ASSETS_DIR.mkdir(exist_ok=True)
SRC = Path(r"C:\Users\phant\.cursor\projects\c-Users-phant-Desktop-Soudeur\assets\c__Users_phant_AppData_Roaming_Cursor_User_workspaceStorage_3e76fdbebdeea785a1843e4abf1eeb0e_images_hero-b93cf7ee-9e8c-48d1-97c6-7236c45442ef.png")
OUT = ASSETS_DIR / "hero-with-logo.png"

# Vérifier que l'image source existe
if not SRC.exists():
    print(f"Image source non trouvée: {SRC}")
    exit(1)

# Charger l'image
img = Image.open(SRC).convert("RGBA")
w, h = img.size

# Créer un calque pour le texte
txt_layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
draw = ImageDraw.Draw(txt_layer)

# Police - taille adaptée
font_size = min(w, h) // 8
try:
    font = ImageFont.truetype("arial.ttf", font_size)
except OSError:
    try:
        font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", font_size)
    except OSError:
        font = ImageFont.load_default()

text = "KRAKEN METALS"
bbox = draw.textbbox((0, 0), text, font=font)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]
x = (w - tw) // 2
y = (h - th) // 2

# Effet métallique : ombre + contour + dégradé argenté
# 1. Ombre portée
draw.text((x + 4, y + 4), text, font=font, fill=(0, 0, 0, 150))

# 2. Contour noir fin
for ox in [-2, -1, 0, 1, 2]:
    for oy in [-2, -1, 0, 1, 2]:
        if ox or oy:
            draw.text((x + ox, y + oy), text, font=font, fill=(40, 40, 50, 220))

# 3. Texte principal - dégradé métallique (blanc #fff -> gris #c0c0c0 -> blanc)
# Simulé par légère ombre côté bas-droit (côté sombre) + highlight haut-gauche
draw.text((x + 1, y + 1), text, font=font, fill=(160, 160, 170, 200))  # ombre métal
draw.text((x - 1, y - 1), text, font=font, fill=(255, 255, 255, 180))  # reflet
draw.text((x, y), text, font=font, fill=(240, 240, 250, 255))          # base argenté

# Fusionner avec l'image
result = Image.alpha_composite(img, txt_layer)

# Sauvegarder en PNG (avec transparence) et en JPG (pour fond d'écran)
result_rgb = result.convert("RGB")
OUT_JPG = ASSETS_DIR / "hero-with-logo.jpg"
result_rgb.save(OUT_JPG, "JPEG", quality=95)
result.save(OUT, "PNG")

print(f"Image générée: {OUT}")
print(f"Version JPG (fond d'écran): {OUT_JPG}")
