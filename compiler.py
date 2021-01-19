import os
import glob

from PIL import Image, ImageSequence
from config import * 

Image.MAX_IMAGE_PIXELS = 933120000


def create_gif_thumbnails(frames, size_gif):
    for frame in frames:
        thumbnail = frame.copy()
        thumbnail.thumbnail(size_gif, Image.ANTIALIAS)
        yield thumbnail

def create_all_thumbnails():

    # make thumbnails 
    image_list = []

    # existing thumbnails 
    bad_images = glob.glob(PATH_TO_STATIC_FILES + 'images/**/*-thumb.jpg')
    bad_images.extend(glob.glob(PATH_TO_STATIC_FILES + 'images/**/*-mid.jpg'))

    for index, filename in enumerate(bad_images):
        os.remove(filename)

    # the remaining images are the OGs
    images = glob.glob(PATH_TO_STATIC_FILES + 'images/**/*.jpg')
    images.extend(glob.glob(PATH_TO_STATIC_FILES + 'images/**/*.jpeg'))
    images.extend(glob.glob(PATH_TO_STATIC_FILES + 'images/**/*.png'))

    size_small = 175, 175
    size_mid =  400, 400
    size_gif = 320, 240

    for index, filename in enumerate(images):

        im=Image.open(filename)
        im.thumbnail(size_mid)
        print("Saved Thumbnail Mid: " + filename.split('.')[0] + "-mid.jpg")
        im.convert('RGB').save(filename.split('.')[0] + "-mid.jpg", "JPEG", quality=75, optimize=True, progressive=True)
        im=Image.open(filename)
        im.thumbnail(size_small)
        print("Saved Thumbnail Small: " + filename.split('.')[0] + "-thumb.jpg")
        im.convert('RGB').save(filename.split('.')[0] + "-thumb.jpg", "JPEG", quality=90, optimize=True, progressive=True)
            


    gifs = glob.glob(PATH_TO_STATIC_FILES + 'images/**/*.gif')

    for index, filename in enumerate(gifs):

        if "-mid" not in filename:
            # make sure the thumbnails haven't already been generated 
            im = Image.open(filename)
            frames = ImageSequence.Iterator(im)

            # save small preview image
            sm = frames[0]
            sm.thumbnail(size_mid)
            print("Saved Gif Thumbnail Mid: " + filename.split('.')[0] + "-gif-mid.jpg")
            sm.convert('RGB').save(filename.split('.')[0] + "-gif-mid.jpg", "JPEG",  quality=75, optimize=True, progressive=True)

                # # save small gif
                # frames = create_gif_thumbnails(frames, size_mid)
                # om = next(frames)
                # om.info = im.info
                # print("Saved Gif Mid: " + filename.split('.')[0] + "-mid.gif")
                # om.save(filename.split('.')[0] + "-mid.gif", save_all=True, append_images=list(frames))




"""
Generate the thumbnails 
"""
if __name__ == "__main__":

    print("generating thumbnails...")
    create_all_thumbnails()


