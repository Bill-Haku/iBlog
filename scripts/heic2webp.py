import os
import subprocess
from PIL import Image
import pyheif

# heic2jpg -s ../public/img/jp --keep

directory = '../public/img/jp'
heic_files = []

for filename in os.listdir(directory):
    if filename.endswith('.jpg'):
        heic_files.append(os.path.join(directory, filename))

# make a folder called "webp" if it doesn't exist
if not os.path.exists(directory + '/webp'):
    os.makedirs(directory + '/webp')

for heic_file in heic_files:
    # convert jpg to webp
    im = Image.open(heic_file)
    im.save(heic_file.replace('jpg', 'webp'), 'webp')
