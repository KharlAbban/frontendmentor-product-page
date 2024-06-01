export function changeCarousel (currentImage, amount, images) {
    const index = images.indexOf(currentImage);
    const newIndex = index + amount;
    if (newIndex < 0) {
        return images[images.length - 1];
    }
    if (newIndex >= images.length) {
        return images[0];
    }
    return images[newIndex];
}