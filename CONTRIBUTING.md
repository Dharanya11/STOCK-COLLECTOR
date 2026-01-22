# Contributing to STOCK-COLLECTOR

Thank you for your interest in contributing to the STOCK-COLLECTOR project!

## Getting Started

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/STOCK-COLLECTOR.git
   cd STOCK-COLLECTOR
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/Dharanya11/STOCK-COLLECTOR.git
   ```

## Development Workflow

### Before You Start

1. **Sync with upstream**:
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/descriptive-name
   ```
   Use prefixes like:
   - `feature/` for new features
   - `fix/` for bug fixes
   - `docs/` for documentation
   - `refactor/` for code refactoring

### Making Changes

1. Make your changes in the feature branch
2. Test your changes thoroughly
3. Follow the coding standards of the project

### Committing Changes

1. **Stage your changes**:
   ```bash
   git add .
   ```

2. **Commit with a descriptive message**:
   ```bash
   git commit -m "Type: Brief description"
   ```
   
   Commit message format:
   - `feat: Add new feature`
   - `fix: Resolve issue with...`
   - `docs: Update documentation for...`
   - `refactor: Improve code structure`
   - `test: Add tests for...`

3. **Push to your fork**:
   ```bash
   git push origin feature/descriptive-name
   ```

### Submitting a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill in the PR template:
   - Clear title
   - Description of changes
   - Link to related issues
   - Screenshots (if applicable)
5. Submit the pull request
6. Wait for review and address feedback

## Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Update documentation if needed
- Add tests for new features
- Ensure all tests pass
- Follow the existing code style
- Be responsive to feedback

## Syncing Your Fork

Keep your fork up to date with the upstream repository:

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream main into your local main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

## Resolving Conflicts

If your PR has conflicts:

1. Sync your branch with main:
   ```bash
   git checkout feature/your-feature
   git pull origin main
   ```

2. Resolve conflicts in your editor

3. Stage resolved files:
   ```bash
   git add .
   ```

4. Complete the merge:
   ```bash
   git commit -m "Resolve merge conflicts"
   ```

5. Push the updates:
   ```bash
   git push origin feature/your-feature
   ```

## Getting Help

- Check existing issues and PRs
- Ask questions in issues
- Reach out to project maintainers

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Maintain a positive environment

Thank you for contributing!
