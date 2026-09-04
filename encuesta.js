const reasonSelect = document.getElementById('reasonSelect'); 
const otherGroup = document.getElementById('otherGroup'); 

reasonSelect.addEventListener('change', function () { 
    if (this.value === 'Otro') { 
        otherGroup.style.display = 'block'; } 
        else { otherGroup.style.display = 'none'; 

        } 
    }); 