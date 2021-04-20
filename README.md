# Training Ground
This repo will be used for all training related activities.


## Workflow

**No commits are to be made in the master branch by any trainee**.

1. At the start of training, every trainee will create their "main" branch from the latest main branch.
2. Their main branch name should be in the format: `{NAME}-main`. e.g. `johndoe-main`.
3. For every assignment, a new branch must be created from the trainee's main branch.
4. The assignment's branch name should be in the format: `{NAME}-{ASSIGNMENT_NAME}` e.g. `johndoe-django-app`.
5. Each assignment should have it's own directory to avoid conflicts later. e.g. assignment-1 will be implemented inside `assignment-1` directory.
6. Every assignment directory must contain a README.md file that contains information about the implemented code e.g. how to setup, how to run, supported features, how to test etc.
7. Once the trainee thinks that the assignment is ready to be submitted, they should create a PR from the assignment's branch into **their main branch**.
   1. The PR should contain proper description about what the code does. Include screenshots if it's something related to UI.
   2. Trainee should assign the PR to themselves.
   3. Add reviewer to the PR.
   4. If the PR is a work in progress, add "wip" label.
   5. Once the requested changes have been implemented, ask the reviewer for another review (from github).
8. Trainer will review the PR and trainee will implement the feedback (if any). This cycle will continue until the PR is accepted.
9. Once the PR is approved, "squash and merge" the PR from GitHub UI.


## Recommended Practices

The following are the practices that should/must be followed once the trainee is has learned about these.

1. Every assignment directory should have its own `.gitignore` file as different projects have different requirements. (Pre-requisite : git knowledge)

2. Proper test cases that cover use cases instead of code should be implemented. (Pre-requisite: unit tests)

3. Proper pre-commit hooks should be implemented (Pre-requisite: husky for JS applications, pre-commit and yaml syntax for python.)

    For example, these pre-commits should:

    1. Check quality of code. (Pre-requisite: eslint for js, black, isort etc for python)
    2. Run unit tests.
    3. Run build steps (if any).

4. Simplicity over conventions.
5. Remember these principles: DRY, YAGNI, KISS.


## Don'ts
- Never push directly to the main branch.
- Never force-push while the PR is in review.
- Avoid repeating same mistakes. Once you have been given a review about something, you should always keep that in mind.
