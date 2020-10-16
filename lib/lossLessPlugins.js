module.exports = [
    [
        'imagemin-gifsicle',
        {
            interlaced: true,
        },
    ],
    [
        'imagemin-jpegtran',
        {
            progressive: true,
        },
    ],
    [
        'imagemin-optipng',
        {
            optimizationLevel: 5,
        },
    ],
    [
        'imagemin-svgo',
        {
            plugins: [{ removeViewBox: false }],
        },
    ],
];
