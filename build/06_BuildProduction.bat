cmd /c call "%~dp0/01_LinkNpmPackages.bat"

pushd "%~dp0/../src/picturepark-sdk-v1-angular"
cmd /c call npm run build
popd

pushd "%~dp0/../src/picturepark-sdk-v1-angular-ui"
cmd /c call npm run build
popd

pushd "%~dp0/../src/picturepark-sdk-v1-angular-app"
cmd /c call npm run build
popd