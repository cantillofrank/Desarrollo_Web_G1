const nameInput = document.getElementById("fullname");

// Evento "input" para validación instantánea mientras escribe 
nameInput.addEventListener('input', function() { 
    if (this.value.trim().length >= 3) {
        this.classList.remove('invalid');
        this.classList.add('valid'); // Aplica borde verde 
        document.getElementById('nameErr').textContent = '';
 } else {
     this.classList.remove('valid'); 
     this.classList.add('invalid'); // Aplica borde rojo 
     document.getElementById('nameErr').textContent = 'Mínimo 3 caracteres.';
 } 

});
 