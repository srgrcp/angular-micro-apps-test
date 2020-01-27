const gulp = require('gulp');
const gulp_concat = require('gulp-concat');
const fs = require('fs')

const jsonFile = fs.readFileSync('./angular.json')
const angular = JSON.parse(jsonFile)
const projects = angular.projects

const defaultTask = cb => {
    Object.entries(projects).forEach(([name, properties]) => {
        try {
            if (properties.architect.build.builder === '@angular-builders/custom-webpack:browser') {
                /* console.log(name)
                console.log(properties.architect.build.builder)
                console.log('================================')
                console.log(properties.architect.build.options.outputPath) */
    
                const defaultProject = angular.defaultProject
                const defaultProjectPath = projects[defaultProject].sourceRoot
                const distPath = properties.architect.build.options.outputPath

                gulp.src([
                    `./${distPath}/runtime*15.js`,
                    `./${distPath}/main*15.js`,
                    `./${distPath}/polyfills*15.js`
                ])
                .pipe(gulp_concat(`${properties.prefix}-${name}.js`))
                .pipe(gulp.dest(`./${defaultProjectPath}/web-components`))
            }
        } catch (error) { }
    })
    cb()
}

exports.default = defaultTask
