// Export Functionality

function exportToCsv(issues) {
    const csvContent = [
        ['Category', 'Element', 'HTML Snippet', 'Description', 'Suggested Fix', 'WCAG Link']
    ];

    issues.forEach(issue => {
        csvContent.push([
            issue.category,
            issue.element,
            issue.htmlSnippet,
            issue.description,
            issue.suggestedFix,
            issue.wcagLink
        ]);
    });

    const csvString = csvContent.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, 'accessibility_report.csv');
    } else {
        link.href = URL.createObjectURL(blob);
        link.download = 'accessibility_report.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}