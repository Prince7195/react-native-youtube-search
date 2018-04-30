#Description:

    A Simple YouTube Search Mobile App
# Building An APK:
1. Update the Propertise - name, version, description and author in package.json
2. Update the app.json.
    ### name - Application name
    ### description - Application Description
    ### version - version of the application
    ### icon - Application icon
    ### loading.icon - Splash screen
    ### add new Objects for Android and ios:
        "ios": {
            "supportsTablet": true,
            "buildNumber": "1"
            },
        "android": {
            "package": "com.prince.youtubesearch",
            "versionCode": 1,
            "permissions": []
            }
3. Click Publish button in Expo XDE
4. check exp is installed "exp -v" otherwise install npm i -g exp
5. run "exp login" and login with the expo account
6. run exp start
7. run exp build:android or exp build:ios
8. give 1 or 0 to accep or reject for keystore upload.
9. run exp build:status to check the status of the build.
10. after building the application returns the link of the apk uploaded. 