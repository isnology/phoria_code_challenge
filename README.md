# Set download this repo and run it in development mode on your PC.

- check to see if you have foreman installed as follows:-
```
foreman -v
```
if you have it, a version number will display e.g. 0.84.0  or similar

- if you don't have foreman installed on your system then install into your home directory (out side your app) as 
follows:-
```
gem install foreman
```
Foreman makes the variables in your .env file available to React.js.

- Do the same with yarn
```
yarn -v
```
- if you don't have it you can follow these instructions at
  https://yarnpkg.com/en/docs/install
  
- do the same with git
```
git --version
```  
if you have it you should see some thing like:- 
```
git version 2.4.3
```
- If you don't have it then install it from 
  https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
  
- navigate to where you want to create a copy of this repo. (this process will create the repo directory.)
  
- Choose either ssh or https and type on the command line ONE of the following:-
- for ssh
```
git clone git@github.com:isnology/phoria_code_challenge.git
```
or https
```
git clone https://github.com/isnology/phoria_code_challenge.git
```
- navigate into the repo (app) directory

- in the root directory of the app, create a '.env' file and add the following to it.
  (note it must start with a '.' (dot) and have no file extension)
```
API_SERVER_URL=http://0.0.0.0:3000
```
- on the command line (within your app) run the following commands.
```
yarn install
bundle install
rails db:migrate
rails db:seed
```
- you should now be ready to run this server.
- make sure nothing is running on ports 3000 and 3036

- On the command line type 
```
yarn dev
```
you should see the react compile messages. The last message should be:-
```
webpack: Compiled successfully.
``` 

- in another command window from within your app type
```
rails s
```
you should see the server start messages. The last message should be:-
```
Use Ctrl-C to stop
```
- In your web browser navigate to:-
localhost:3000
- You should be taken to the shop. Sign Up/in to get full access.

# Assumptions
1. It is only a demonstration app, not a production app.
2. It uses primary key as order number
3. There is no delete of order lines (therefore no need for line numbers on the record as a user reference)
 