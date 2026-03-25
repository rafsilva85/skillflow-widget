/**
 * SkillFlow Embeddable Skill Card Widget
 * Drop this into any webpage or GitHub README to display a SkillFlow skill card.
 * 
 * Usage:
 *   <div class="skillflow-card" data-skill="credit-optimizer" data-theme="dark"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/rafsilva85/skillflow-widget@main/skillflow-embed.js"></script>
 * 
 * Or via Markdown (GitHub README):
 *   [![SkillFlow](https://skillflow.builders/api/card/credit-optimizer)](https://skillflow.builders/skill/credit-optimizer)
 */

(function() {
  'use strict';

  const SKILLFLOW_BASE = 'https://skillflow.builders';
  
  const STYLES = `
    .sf-card {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      max-width: 380px;
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
      text-decoration: none;
      display: block;
      color: inherit;
    }
    .sf-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15);
    }
    .sf-card.sf-dark {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-color: #2d3748;
      color: #e2e8f0;
    }
    .sf-card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    .sf-card-icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: linear-gradient(135deg, #4ECDC4, #44B09E);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      flex-shrink: 0;
    }
    .sf-card-title {
      font-size: 16px;
      font-weight: 700;
      margin: 0;
      line-height: 1.3;
    }
    .sf-card-author {
      font-size: 12px;
      color: #718096;
      margin: 2px 0 0;
    }
    .sf-dark .sf-card-author { color: #a0aec0; }
    .sf-card-desc {
      font-size: 13px;
      color: #4a5568;
      line-height: 1.5;
      margin: 0 0 14px;
    }
    .sf-dark .sf-card-desc { color: #cbd5e0; }
    .sf-card-stats {
      display: flex;
      gap: 16px;
      margin-bottom: 14px;
    }
    .sf-card-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .sf-card-stat-value {
      font-size: 18px;
      font-weight: 700;
      color: #4ECDC4;
    }
    .sf-card-stat-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #a0aec0;
    }
    .sf-card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sf-card-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      background: rgba(78, 205, 196, 0.15);
      color: #4ECDC4;
    }
    .sf-card-cta {
      font-size: 12px;
      color: #4ECDC4;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .sf-card-powered {
      text-align: center;
      margin-top: 10px;
      font-size: 10px;
      color: #a0aec0;
    }
    .sf-card-powered a {
      color: #4ECDC4;
      text-decoration: none;
    }
  `;

  // Sample skill data (in production, this would fetch from SkillFlow API)
  const SAMPLE_SKILLS = {
    'credit-optimizer': {
      name: 'Credit Optimizer v5',
      author: 'Rafael Silva',
      description: 'Optimize Manus AI credits by 30-75% with zero quality loss. Smart model routing, context hygiene, and parallel processing.',
      icon: '💰',
      trustScore: 94,
      downloads: '2.1K',
      rating: 4.8,
      category: 'Productivity'
    },
    'fast-navigation': {
      name: 'Fast Navigation',
      author: 'Rafael Silva',
      description: 'Accelerate web navigation by 30-2000x. Ultra-fast programmatic toolkit replacing slow browser calls.',
      icon: '⚡',
      trustScore: 91,
      downloads: '1.8K',
      rating: 4.7,
      category: 'Developer Tools'
    },
    'skill-creator': {
      name: 'Skill Creator',
      author: 'Rafael Silva',
      description: 'Guide for creating or updating skills that extend AI agents via specialized knowledge and workflows.',
      icon: '🛠️',
      trustScore: 89,
      downloads: '950',
      rating: 4.6,
      category: 'Developer Tools'
    },
    'demo': {
      name: 'AI Research Assistant',
      author: 'Community',
      description: 'Automate deep research across 50+ sources. Synthesize findings into structured reports with citations.',
      icon: '🔬',
      trustScore: 87,
      downloads: '3.4K',
      rating: 4.9,
      category: 'Research'
    }
  };

  function renderCard(container) {
    const skillId = container.getAttribute('data-skill') || 'demo';
    const theme = container.getAttribute('data-theme') || 'light';
    const skill = SAMPLE_SKILLS[skillId] || SAMPLE_SKILLS['demo'];

    const card = document.createElement('a');
    card.className = `sf-card ${theme === 'dark' ? 'sf-dark' : ''}`;
    card.href = `${SKILLFLOW_BASE}/skill/${skillId}`;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    card.innerHTML = `
      <div class="sf-card-header">
        <div class="sf-card-icon">${skill.icon}</div>
        <div>
          <p class="sf-card-title">${skill.name}</p>
          <p class="sf-card-author">by ${skill.author}</p>
        </div>
      </div>
      <p class="sf-card-desc">${skill.description}</p>
      <div class="sf-card-stats">
        <div class="sf-card-stat">
          <span class="sf-card-stat-value">${skill.trustScore}</span>
          <span class="sf-card-stat-label">Trust Score</span>
        </div>
        <div class="sf-card-stat">
          <span class="sf-card-stat-value">${skill.downloads}</span>
          <span class="sf-card-stat-label">Downloads</span>
        </div>
        <div class="sf-card-stat">
          <span class="sf-card-stat-value">${skill.rating}</span>
          <span class="sf-card-stat-label">Rating</span>
        </div>
      </div>
      <div class="sf-card-footer">
        <span class="sf-card-badge">✓ ${skill.category}</span>
        <span class="sf-card-cta">View on SkillFlow →</span>
      </div>
      <div class="sf-card-powered">
        Powered by <a href="${SKILLFLOW_BASE}">SkillFlow</a>
      </div>
    `;

    container.appendChild(card);
  }

  function init() {
    // Inject styles
    const style = document.createElement('style');
    style.textContent = STYLES;
    document.head.appendChild(style);

    // Find and render all skill cards
    const containers = document.querySelectorAll('.skillflow-card');
    containers.forEach(renderCard);
  }

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
