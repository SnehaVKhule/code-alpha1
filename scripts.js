document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });
});
function showaResume(){
    const link=document.createElement('a');
    link.href='sneha.pdf';
    link.download ="sneha.pdf";
    link.click();
}
