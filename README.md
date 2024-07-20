Back-End setup
## Getting Started

- Navigate to Desktop or another convenient folder
- `git status` to make sure you are not already in a `git` repository
- `mkdir pg-music-playlists-api`
- `cd pg-music-playlists-api`
- `touch .gitignore`

```
# .gitignore
node_modules
.env
.DS_Store
```

- `touch server.js`
- `npm init -y` (this will automatically say yes to all the npm default settings - this is fine for tutorials, small test builds, etc.)
- `touch app.js .env`
- `npm install express dotenv cors nanoid`
- `npm install --save-dev nodemon`
- `git init`
- `git add -A`
- `git commit -m 'first commit'`
- `git commit -m 'first commit'`


- Start the server:
- `git status` to make sure you are not already in a `git` repository


- Update `package.json` scripts:
```
{
  "name": "pg-music-playlist-api",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "nanoid": "^5.0.7"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}

```



/*
Why is it essential to add and commit after setting up the .gitignore and not before?

Adding and committing after setting up the .gitignore is essential because the .gitignore file specifies which files and directories Git should ignore. By committing before creating the .gitignore, you risk adding files like node_modules or configuration files (.env, etc.) that you do not want in your repository. These files can be large, change frequently, or contain sensitive information. Setting up the .gitignore beforehand ensures that these files are excluded from the repository from the beginning.


How would you fix adding and committing folders and files (like node_modules) you did not mean to add?

```
git rm -r --cached node_modules
git rm --cached .env

```

```
git commit -m "Remove node_modules and .env from the repository"

```
git push origin main

```

*/

### Thought Question

**Why is it essential to add and commit after setting up the `.gitignore` and not before?**

Adding and committing after setting up the `.gitignore` is essential because the `.gitignore` file specifies which files and directories Git should ignore. By committing before creating the `.gitignore`, you risk adding files like `node_modules` or configuration files (`.env`, etc.) that you do not want in your repository. These files can be large, change frequently, or contain sensitive information. Setting up the `.gitignore` beforehand ensures that these files are excluded from the repository from the beginning.

**Follow-up question**

**How would you fix adding and committing folders and files (like `node_modules`) you did not mean to add?**

To fix adding and committing folders and files that you did not mean to add, you can follow these steps:

1. **Add the files or folders to `.gitignore`**:
   - Open or create a `.gitignore` file and add the paths of the files or directories you want Git to ignore (e.g., `node_modules`, `.env`).

2. **Remove the files or folders from the staging area**:
   ```bash
   git rm -r --cached node_modules
   git rm --cached .env
   ```
   This command removes the files from the staging area but keeps them in your local file system.

3. **Commit the changes**:
   ```bash
   git commit -m "Remove node_modules and .env from the repository"
   ```

4. **Push the changes**:
   ```bash
   git push origin main
   ```
