const socket = io();
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(input.value) {
        socket.emit('chat', input.value);
        input.value = '';
    }
});

socket.on('history', msgs => {
    msgs.forEach(msg => {
        const item = document.createElement('li');
        item.textContent = `${msg.user}: ${msg.message}`;
        messages.appendChild(item);
    });
});

socket.on('chat', msg => {
    const item = document.createElement('li');
    item.textContent = `${msg.user}: ${msg.message}`;
    messages.appendChild(item);
});

socket.on('private', msg => {
    const item = document.createElement('li');
    item.textContent = `(Privado) ${msg.from}: ${msg.message}`;
    messages.appendChild(item);
});
