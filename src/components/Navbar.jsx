import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-800">Dev Insights</Link>
    </nav>
  );
}


// File: src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const mockRepos = [
  { name: 'backend-api', prs: 23, avgMergeTime: '2d', issues: 10 },
  { name: 'frontend-app', prs: 18, avgMergeTime: '1.5d', issues: 7 },
];

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {mockRepos.map(repo => (
        <div key={repo.name} className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">{repo.name}</h2>
          <p>Open PRs: {repo.prs}</p>
          <p>Avg Merge Time: {repo.avgMergeTime}</p>
          <p>Open Issues: {repo.issues}</p>
          <Link to={`/repo/${repo.name}`} className="text-blue-600 mt-2 inline-block hover:underline">View Insights →</Link>
        </div>
      ))}
    </div>
  );
}
