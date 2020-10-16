# imagemin-linter

Compress images before you commit them to your Git repository.

## Installation

```
npm i -D imagemin-linter
```

## Usage

Use in conjuntion with [lint-staged](https://github.com/okonet/lint-staged). In your package.json

```
"lint-staged": {
    "./lossless/*.{png,jpeg,jpg,gif,svg}": "imagemin-linter -l", // minify files in lossless folder with loss less mode
    "./lossy/*.{png,jpeg,jpg,gif,svg}": "imagemin-linter", // minify files in lossy folder with lossy mode
    "*.{png,jpeg,jpg,gif,svg}": "imagemin-linter", // minify files with lossy mode
},
```

## Options

-   -l, --less : compress with loss less mode. (default: lossy mode)

## Dependencies

- [lint-staged](https://github.com/okonet/lint-staged)