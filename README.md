# 2023 React + Next Frontend


## System Requirements

- Unix Terminal (Bash/sh/Zsh)
- Docker & Docker Compose
- Git (for Development)

---

## Docker Compose Execution Intructions

### Recommended: `docker-compose -f ./docker-compose.yml up -d --build` from project's directory.

---

To debug, try `docker-compose up` or `docker-compose up -d --build`

---

### Docker Client Alternative:

1. Build: `docker build -t tag:version .`

   i.e.: `docker build -t frontend:v0.1 . -f ./Dockerfile`

2. Run: `docker run -it --rm -p 3000:3000 tag_name:version_num`

   i.e.: `docker run -it --rm -p 3000:3000 frontend:v0.1`

### Notes:

- Execute command within container: `docker exec -t -i mycontainer /bin/sh`

- See [pruning](https://docs.docker.com/config/pruning/) for details on how to clean local environment.

#### Repository maintenance: 
You may run `yarn upgrade-interactive --latest` to update dependencies. Ensure branch is up-to-date and tested locally or via pipepine before merging. 

\
&nbsp;

---

\
&nbsp;

## _Additional information_

#### Local Pre-Commit Formatting Tool

- Run the following commands in order:

1. Install pre-commit locally:

   - For MacOS X with Brew run `brew install pre-commit` or find installation instructions at https://pre-commit.com

2. Confirm pre-commit is installed by checking the version:

   ```
   pre-commit --version
   ```

   - Should return a message like `pre-commit 2.21.0`

3. Install hooks and run pre-commit locally

   ```
   pre-commit install
   pre-commit run --all-files
   ```

4. After local dev changes are ready `add`, `commit` and `push` as usual:
   ```
   git add .
   git commit -m 'my new commit message ... '
   git push origin head
   ```

\
&nbsp;

---

\
&nbsp;
&copy; 2022 - 2023 OneCreativeStudio, LLC.
