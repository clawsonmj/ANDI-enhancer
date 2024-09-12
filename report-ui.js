// User Interface for Report Display

function createReportUI(issues) {
    const modal = document.createElement('div');
    modal.id = 'accessibility-report-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    const reportContainer = document.createElement('div');
    reportContainer.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 5px;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Accessibility Report';
    reportContainer.appendChild(title);

    issues.forEach(issue => {
        const issueElement = createIssueElement(issue);
        reportContainer.appendChild(issueElement);
    });

    const exportButton = document.createElement('button');
    exportButton.textContent = 'Export to CSV';
    exportButton.addEventListener('click', () => exportToCsv(issues));
    reportContainer.appendChild(exportButton);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => document.body.removeChild(modal));
    reportContainer.appendChild(closeButton);

    modal.appendChild(reportContainer);
    document.body.appendChild(modal);
}

function createIssueElement(issue) {
    const container = document.createElement('div');
    container.className = 'issue';

    const category = document.createElement('h3');
    category.textContent = issue.category;
    container.appendChild(category);

    const element = document.createElement('p');
    element.textContent = `Element: ${issue.element}`;
    container.appendChild(element);

    const snippetContainer = createSnippetElement(issue.htmlSnippet);
    container.appendChild(snippetContainer);

    const description = document.createElement('p');
    description.textContent = issue.description;
    container.appendChild(description);

    const solution = document.createElement('p');
    solution.textContent = `Suggested fix: ${issue.suggestedFix}`;
    container.appendChild(solution);

    const wcagLink = document.createElement('a');
    wcagLink.href = issue.wcagLink;
    wcagLink.textContent = 'WCAG Guideline';
    wcagLink.target = '_blank';
    container.appendChild(wcagLink);

    return container;
}