// Context-Aware Solutions

const solutionLibrary = {
    'missing-alt': {
        check: (element) => element.tagName === 'IMG' && !element.hasAttribute('alt'),
        solution: 'Add an alt attribute to provide a text alternative for the image.',
        wcag: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
    },
    'empty-button': {
        check: (element) => element.tagName === 'BUTTON' && element.textContent.trim() === '',
        solution: 'Add text content to the button to describe its action.',
        wcag: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html'
    },
    'missing-label': {
        check: (element) => element.tagName === 'INPUT' && !document.querySelector(`label[for="${element.id}"]`),
        solution: 'Add a label element with a matching "for" attribute to describe the input.',
        wcag: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html'
    }
};

function getSuggestedSolution(element) {
    for (const [key, value] of Object.entries(solutionLibrary)) {
        if (value.check(element)) {
            return {
                solution: value.solution,
                wcag: value.wcag
            };
        }
    }
    return {
        solution: 'Review the element and its context to determine the appropriate fix.',
        wcag: 'https://www.w3.org/WAI/WCAG21/quickref/'
    };
}