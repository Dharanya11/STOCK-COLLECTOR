# STOCK-COLLECTOR

A consultancy project for stock collection and management.

## Getting Started

### Prerequisites
- Git installed on your system
- GitHub account
- Text editor or IDE

## How to Pull and Commit Changes

### Initial Setup

1. **Clone the repository** (first time only):
   ```bash
   git clone https://github.com/Dharanya11/STOCK-COLLECTOR.git
   cd STOCK-COLLECTOR
   ```

### Daily Workflow

2. **Pull the latest changes** (before starting work):
   ```bash
   git pull origin main
   ```
   This ensures you have the latest code from the repository.

3. **Create a new branch** (for new features or fixes):
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**:
   - Edit files using your preferred text editor or IDE
   - Add new files as needed

5. **Check what files changed**:
   ```bash
   git status
   ```

6. **Stage your changes**:
   ```bash
   # Stage specific files
   git add filename.ext
   
   # Or stage all changes
   git add .
   ```

7. **Commit your changes**:
   ```bash
   git commit -m "Brief description of your changes"
   ```
   
   Example commit messages:
   - `git commit -m "Add stock data collector module"`
   - `git commit -m "Fix bug in price calculation"`
   - `git commit -m "Update README with installation instructions"`

8. **Push your changes** to GitHub:
   ```bash
   # First time pushing a new branch
   git push -u origin feature/your-feature-name
   
   # Subsequent pushes
   git push
   ```

9. **Create a Pull Request**:
   - Go to https://github.com/Dharanya11/STOCK-COLLECTOR
   - Click "Pull requests" tab
   - Click "New pull request"
   - Select your branch and create the pull request
   - Add a description of your changes
   - Request review from team members

### Useful Git Commands

```bash
# View commit history
git log --oneline

# See differences in files
git diff

# Discard changes to a file
git checkout -- filename.ext

# Switch to a different branch
git checkout branch-name

# Update your branch with latest main
git pull origin main

# View all branches
git branch -a
```

### Tips
- Always pull before starting new work
- Commit frequently with clear messages
- Test your changes before committing
- Keep commits focused on a single change
- Push your work regularly to avoid losing changes

## Project Status
Today is the first day of our Consultency project work
