# build script: moves everything from src to dist and replaces lp package
# from unpkg with a local version so we don't have to use unpkg in production

mkdir -p dist

cp -R ./src/* ./dist

mkdir -p dist/deps

lp_js=@hyperfov/link-previews/dist/index.js
lp_css=@hyperfov/link-previews/dist/index.css

# copy over the lp files 
cp node_modules/$lp_css dist/deps/link-previews.css
cp node_modules/$lp_js dist/deps/link-previews.js

# replace the unpkg (development) versions with local
sed -i "s|https://unpkg.com/@hyperfov/link-previews@latest/dist/index.css|deps/link-previews.css|g" ./dist/index.html
sed -i "s|https://unpkg.com/@hyperfov/link-previews@latest/dist/index.js|deps/link-previews.js|g" ./dist/index.html

printf "build complete!\n"
