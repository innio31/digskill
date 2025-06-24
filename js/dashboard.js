document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle for mobile
    const sidebarToggle = document.createElement('div');
    sidebarToggle.className = 'sidebar-toggle';
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.dashboard-header .container').appendChild(sidebarToggle);
    
    sidebarToggle.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
    
    // Active sidebar item
    const sidebarLinks = document.querySelectorAll('.sidebar-menu ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebarLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // Close sidebar on mobile after clicking
            if (window.innerWidth < 768) {
                document.querySelector('.sidebar').classList.remove('active');
            }
        });
    });
    
    // Set first sidebar item as active by default
    if (sidebarLinks.length > 0) {
        sidebarLinks[0].classList.add('active');
    }
    
    // Sample data for dashboard (replace with real data from Firebase)
    const user = firebase.auth().currentUser;
    if (user) {
        // You can fetch user-specific data from Firestore here
        console.log('Dashboard loaded for:', user.email);
    }
    
    // Sample chart (you can use Chart.js or any other library)
    // This is just a placeholder - implement real charts as needed
    const progressBars = document.querySelectorAll('.progress-bar .progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});