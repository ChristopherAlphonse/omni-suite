# Contribution Guidelines

Thank you for your interest in contributing to this project! We welcome contributions from everyone. Please take a moment to review these guidelines to make the process as smooth as possible.

[Agile Board](https://github.com/users/ChristopherAlphonse/projects/5)
_Add feature to board prior to making changes_

## How to Contribute

1. **Fork the Repository**: Click the "Fork" button at the top of the repository page.
2. **Clone Your Fork**: Copy the repository to your local machine:

    ```sh
    git clone https://github.com/ChristopherAlphonse/omni-suite.git
    cd omni-suite
    ```

3. **Create a Branch**: Create a new branch for your changes:

    ```sh
    git switch -b feature-or-bugfix-name
    ```

4. **Make Your Changes**: Implement your changes and commit them.

    ```sh
    git add . or git add -p
    git commit -m "Describe your changes here"
    ```

5. **Rebase Against Main**: Ensure your branch is up to date with the latest changes from `main`.

    ```sh
    git fetch origin
    git rebase origin/main
    ```

    If conflicts arise, resolve them before proceeding.

6. **Tag Your Branch**: If your work is not ready for review, tag your branch with `wip`.

    ```sh
    git tag wip
    ```

7. **Push Your Changes**:

    ```sh
    git push origin feature-or-bugfix-name
    ```

8. **Open a Pull Request**: Go to the original repository and click "New Pull Request." Fill out the necessary details and submit.

## Code Style

- Follow the existing coding conventions.
- Ensure your code is clean, well-documented, and properly formatted.
- Run tests before submitting a pull request.

## Reporting Issues

- Check if the issue already exists in the issue tracker.
- Provide a clear and descriptive title.
- Include steps to reproduce the problem if applicable.
