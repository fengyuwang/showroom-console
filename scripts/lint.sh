yarn eslint --ext ".js,.cjs,.ts,.vue" --fix --ignore-path .gitignore .
yarn stylelint "**/*.{vue,css}" --fix --ignore-path .gitignore
yarn prettier --write "**/*.{vue,js,cjs,ts}" --ignore-path .gitignore