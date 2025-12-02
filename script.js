window.onload = function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const position = document.getElementById('position').value;
        const message = document.getElementById('message').value;
    
        let hasNumber = false;
        for (let i = 0; i < name.length; i++) {
            if (name[i] >= '0' && name[i] <= '9') {
                hasNumber = true;
                break;
            }
        }
        if (hasNumber) {
            alert('Name can\'t contain numbers!');
            return; 
        }

        if (!email.includes('.com')) {
            alert('Email must contain .com!');
            return; 
        }
        alert('Form submitted successfully');
        form.reset(); 
    });

};
