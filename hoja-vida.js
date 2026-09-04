const container = document.getElementById('experienceContainer'); 
const addBtn = document.getElementById('addExpBtn'); 

 // Función para agregar bloques de experiencia dinámica 
 addBtn.addEventListener('click', () => { 
    const div = document.createElement('div'); 
    div.className = 'exp-block'; 
    div.innerHTML = ` 
        <input type="text" placeholder="Empresa" class="exp-company" required> 
        <input type="text" placeholder="Cargo" class="exp-role" required> 
    `;
     container.appendChild(div);
    
    }); 