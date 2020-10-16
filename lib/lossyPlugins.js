module.exports = [
    [
        'imagemin-gifsicle',
        {
            interlaced: true,
            optimizationLevel: 3,
        },
    ],
    ['imagemin-mozjpeg'],
    [
        'imagemin-pngquant',
        {
            quality: [0.65, 0.8],
        },
    ],
    ['imagemin-svgo'],
];
