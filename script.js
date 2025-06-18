function toggleTopics(topicId) {
    const topics = document.getElementById(topicId);
    
    // Hide all other topics first
    document.querySelectorAll('.topics').forEach(topic => {
        if (topic.id !== topicId) {
            topic.style.display = 'none';
        }
    });
    
    // Toggle the clicked topic
    if (topics.style.display === 'flex') {
        topics.style.display = 'none';
    } else {
        topics.style.display = 'flex';
    }
}