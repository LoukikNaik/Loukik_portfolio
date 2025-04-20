# Project Build and Deployment Guide

## Make Commands

### Development Commands
```make
# Start the development server
make dev

# Build the project
make build

# Run tests
make test

# Run linting
make lint

# Format code
make format
```

## GitHub Actions Workflow

Our project uses GitHub Actions for continuous integration and deployment (CI/CD).

### Workflow Triggers
- Push to `main` branch
- Pull requests to `main` branch


## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `make dev`
4. Access the application at `http://localhost:3000`

