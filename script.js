// Simple Chatbot Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Chatbot functionality
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
    }
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, 'user');
        userInput.value = '';
        
        // Bot response (simplified)
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000);
    }
    
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(`${sender}-message`, 'mb-2');
        
        const messageContent = document.createElement('p');
        messageContent.classList.add('mb-0', 'p-2', 'rounded');
        messageContent.textContent = message;
        
        if (sender === 'user') {
            messageContent.classList.add('bg-brown', 'text-white', 'd-inline-block');
        } else {
            messageContent.classList.add('bg-light');
        }
        
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getBotResponse(message) {
        const lowerMsg = message.toLowerCase();
        
        // Simple response logic - in a real app, this would be more sophisticated
        if (lowerMsg.includes('dog') || lowerMsg.includes('puppy')) {
            return "Dogs typically need balanced commercial dog food, fresh water, regular exercise, and veterinary check-ups. Is there a specific aspect of dog care you're asking about?";
        } else if (lowerMsg.includes('cat') || lowerMsg.includes('kitten')) {
            return "Cats are obligate carnivores and need meat-based diets. They also require regular veterinary care, litter box maintenance, and environmental enrichment.";
        } else if (lowerMsg.includes('chicken') || lowerMsg.includes('poultry')) {
            return "Poultry require balanced feed (16-18% protein for layers), clean water, proper housing, and vaccination against diseases like Newcastle. Are you raising layers or broilers?";
        } else if (lowerMsg.includes('cattle') || lowerMsg.includes('cow')) {
            return "Cattle management in Cameroon often involves grazing with supplementation. Key considerations are water availability, parasite control, and mineral supplementation. The Gudali breed is common in northern regions.";
        } else if (lowerMsg.includes('health') || lowerMsg.includes('sick')) {
            return "For health concerns, I can provide general information but always consult a veterinarian for diagnosis and treatment. Can you describe the symptoms in more detail?";
        } else if (lowerMsg.includes('feed') || lowerMsg.includes('food')) {
            return "Nutritional needs vary by species, age, and purpose. Our Nutrition page has detailed feeding guides. Would you like me to direct you there?";
        } else {
            return "I'm still learning about animal care. Could you clarify your question? For more detailed information, visit our species-specific pages or community forum.";
        }
    }
    
    // Feed Calculator
    const feedCalculator = document.getElementById('feedCalculator');
    if (feedCalculator) {
        feedCalculator.addEventListener('submit', function(e) {
            e.preventDefault();
            calculateFeed();
        });
    }
    
    function calculateFeed() {
        const resultDiv = document.getElementById('calculatorResult');
        const resultAmount = document.getElementById('resultAmount');
        
        // Simplified calculation - in a real app, this would be more precise
        const animalType = document.querySelector('#feedCalculator select').value;
        const weight = parseFloat(document.querySelector('#feedCalculator input[type="number"]').value);
        
        let recommendation;
        
        switch(animalType) {
            case 'Dog':
                recommendation = (weight * 0.025).toFixed(2) + ' kg of dog food daily';
                break;
            case 'Cat':
                recommendation = (weight * 0.02).toFixed(2) + ' kg of cat food daily';
                break;
            case 'Cattle':
                recommendation = (weight * 0.03).toFixed(2) + ' kg dry matter (forage + concentrate)';
                break;
            case 'Poultry':
                recommendation = '110-130g of balanced poultry feed daily per bird';
                break;
            case 'Goat':
                recommendation = (weight * 0.035).toFixed(2) + ' kg dry matter (forage + supplements)';
                break;
            default:
                recommendation = 'Please provide more details';
        }
        
        resultAmount.textContent = recommendation;
        resultDiv.classList.remove('d-none');
    }
    
    // Discussion forum interaction
    const discussionLinks = document.querySelectorAll('.list-group-item-action');
    discussionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would load discussion content via AJAX
            alert('In a complete application, this would show the full discussion thread.');
        });
    });
    
    // New post form
    const newPostForm = document.getElementById('newPostForm');
    if (newPostForm) {
        newPostForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('In a complete application, this would submit your post to the community forum.');
            this.reset();
        });
    }
});