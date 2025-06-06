# 🚀 Dockerized React App with CI/CD using GitHub Actions & AWS Elastic Beanstalk

This project demonstrates a full CI/CD pipeline for a React application using Docker, GitHub Actions, and AWS Elastic Beanstalk. It is designed to showcase skills in containerization, cloud deployment, and automated testing.

## 📦 Tech Stack

- **React** – Frontend framework
- **Docker** – Containerization of development and test environment
- **GitHub Actions** – CI/CD automation
- **AWS Elastic Beanstalk** – Hosting and deployment
- **Jest** – Unit testing with coverage
- **EB CLI** – Elastic Beanstalk command-line interface

## ⚙️ How It Works

1. Code is pushed to the `master` branch.
2. GitHub Actions triggers a workflow that:
   - Builds the Docker image using `Dockerfile.dev`
   - Runs tests inside the container (`npm run test -- --coverage`)
   - Deploys the app to AWS Elastic Beanstalk using EB CLI
3. Secrets (like AWS credentials) are managed securely via GitHub Secrets.

## 🐳 Docker Instructions (Local)

To run locally using Docker:

```bash
docker build -f Dockerfile.dev -t frontend .
docker run -p 3000:3000 frontend
