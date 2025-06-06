import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 React + Docker on AWS</h1>
        <p style={{ maxWidth: '600px' }}>
          This React application is containerized using <strong>Docker</strong> and automatically deployed to <strong>AWS Elastic Beanstalk</strong> through a <strong>GitHub Actions CI/CD pipeline</strong>.
        </p>
        <ul style={{ textAlign: 'left' }}>
          <li>✅ CI/CD with GitHub Actions</li>
          <li>✅ Dockerized using <code>Dockerfile.dev</code></li>
          <li>✅ Auto-deployed on every push to <code>master</code></li>
          <li>✅ Hosted on AWS Elastic Beanstalk</li>
        </ul>
        <p style={{ marginTop: '2rem' }}>
          Modify this file and push to GitHub to see automatic deployments in action.
        </p>
        <a
          className="App-link"
          href="https://github.com/sush117/docker-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 View GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
