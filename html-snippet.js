// HTML Snippet Feature

function getHtmlSnippet(element) {
    if (!element) return '';

    const clone = element.cloneNode(false);
    const outerHTML = clone.outerHTML;
    const openingTag = outerHTML.substring(0, outerHTML.indexOf('>') + 1);

    return openingTag;
}

function createSnippetElement(snippet) {
    const container = document.createElement('div');
    container.className = 'html-snippet';

    const codeElement = document.createElement('code');
    codeElement.textContent = snippet;
    container.appendChild(codeElement);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Expand/Collapse';
    toggleButton.addEventListener('click', () => {
        codeElement.classList.toggle('expanded');
    });
    container.appendChild(toggleButton);

    return container;
}