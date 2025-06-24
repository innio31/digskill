document.addEventListener('DOMContentLoaded', function() {
    // Program category filtering
    const tabButtons = document.querySelectorAll('.tab-btn');
    const programCards = document.querySelectorAll('.program-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter programs
            const category = this.getAttribute('data-category');
            
            programCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Initialize all programs visible
    programCards.forEach(card => {
        card.style.display = 'flex';
    });
});