from PIL import Image, ImageFilter

before = Image.open("sample.bmp")
after = before.filter(ImageFilter.BoxBlur(1))