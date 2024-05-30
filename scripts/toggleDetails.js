function toggleDetails(id) {
    console.log("Toggling details for:", id);
    const selectedDetails = document.getElementById(id);
    const parentContainer = selectedDetails.closest('.skills-grid');
    const allDetails = parentContainer.querySelectorAll('.skill-details');
    const allItems = parentContainer.querySelectorAll('.skill-item');
    const contentDiv = selectedDetails.closest('.content');

    if (selectedDetails.style.display === 'none' || selectedDetails.style.display === '') {
        allDetails.forEach(detail => detail.style.display = 'none');
        allItems.forEach(item => item.classList.remove('active', 'hidden'));
        selectedDetails.style.display = 'block';
        document.getElementById(id + '-item').classList.add('active');
        allItems.forEach(item => {
            if (!item.classList.contains('active')) {
                item.classList.add('hidden');
            }
        });

        const detailsRect = selectedDetails.getBoundingClientRect();
        const contentRect = contentDiv.getBoundingClientRect();
        const paddingBottom = parseFloat(getComputedStyle(contentDiv).paddingBottom);
        
        if (detailsRect.bottom > contentRect.bottom - paddingBottom) {
            const additionalHeight = detailsRect.bottom - contentRect.bottom + paddingBottom;
            contentDiv.style.minHeight = `${contentRect.height + additionalHeight}px`;
        }
    } else {
        selectedDetails.style.display = 'none';
        allItems.forEach(item => item.classList.remove('active', 'hidden'));
        contentDiv.style.minHeight = 'auto';
    }
}
