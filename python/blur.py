from PIL import Image, ImageFilter

before = Image.open("sample.bmp")
after = before.filter(ImageFilter.BoxBlur(10))
after.save("out.bmp")
#Works great, just forgot to move to the rigth folder