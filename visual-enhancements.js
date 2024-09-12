// Visual Enhancements

const issueIcons = {
    'danger': '🚨',
    'warning': '⚠️',
    'minor': 'ℹ️'
};

function getIssueIcon(severity) {
    return issueIcons[severity] || '❓';
}

function applyColorCoding(element, severity) {
    const colors = {
        'danger': '#ff4d4d',
        'warning': '#ffa500',
        'minor': '#4da6ff'
    };
    element.style.borderLeft = `5px solid ${colors[severity] || '#808080'}`;
}

function createVisuallyEnhancedIssueElement(issue) {
    const container = document.createElement('div');
    container.className = 'issue-container';

    const iconElement = document.createElement('span');
    iconElement.textContent = getIssueIcon(issue.severity);
    container.appendChild(iconElement);

    const contentElement = document.createElement('div');
    contentElement.className = 'issue-content';
    contentElement.textContent = issue.description;
    container.appendChild(contentElement);

    applyColorCoding(container, issue.severity);

    return container;
}