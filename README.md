Boilerplate
=======================================

### Project recovery

Open terminal on MacOs or Linux, and Powershell on Windows

Clone the git repository.
```
git clone https://github.com/marcdubois71450/boilerplate-react.git
```
Rename and Move in the right folder.
```
mv boilerplate-react your-project-name
cd your-project-name/
```
Remove link to hold git :  
Linux/ MacOS : 
```
rm -rf .git
```
Windows : 
```
Remove-Item -LiteralPath ".git" -Force -Recurse
```
Rename project / Change information on :
```
public/index.html
public/manifest.json
package.json
```
Install the necessary packages.
```
npm install
```
The project is ready to use.


### Development
Start the project locally.
```
npm run dev
```
The developement server is ready on port 3000.

Go on [http://127.0.0.1:3000](http://127.0.0.1:3000)


### Production
Build project to `dist` folder.
```
npm start
```
See if the build is going well, and copy the files to the right place.
```
ls dist/
cp dist/* /var/www/xxxxxxxxxxxx/
```
