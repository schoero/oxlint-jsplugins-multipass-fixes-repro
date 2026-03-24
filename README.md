# oxlint multipass fixes repro

This repository is a reproduction of an issue with `oxlint` where it fails to apply fixes across multiple passes. The issue arises when there are multiple overlapping linting errors that affect the same parts of the code.

The issue exists both in via the cli and the vscode extension, although the behavior is slightly different between the two.

The repository contains a file [`test.jsx`](./test.jsx) with two overlapping linting errors.

## Reproduction Steps

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install the dependencies.
3a. Run `npm run lint:fix` to execute the linter and see the behavior via the cli.
3b. Open [`test.jsx`](./test.jsx) in VSCode and save the file.

## Expected Behavior

The linter should apply all fixes across multiple passes, resulting no remaining linting errors after a single invocation.

## Actual Behavior

### VSCode Extension

When using the VSCode extension, the linter stops applying any fixes to the file. 

### CLI

When using the CLI, the linter only applies the first fix to the file. It requires a second run of the linter to apply the second fix.