const draggables = document.querySelectorAll('.column-A li');
        const dropzones = document.querySelectorAll('.column-B .dropzone');

        let draggedItem = null;

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', (e) => {
                draggedItem = draggable;
                e.dataTransfer.setData('text/plain', draggable.textContent);
            });
        });

        dropzones.forEach(dropzone => {
            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                if (!draggedItem) return; // Evita soltar em uma zona não permitida

                const draggedText = draggedItem.textContent;
                dropzone.textContent = draggedText; // Define o texto da dropzone com o texto arrastado

                const respostaCorreta = dropzone.getAttribute('data-resposta').trim();

                if (respostaCorreta === draggedText) {
                    dropzone.style.backgroundColor = '#3CB371'; // Resposta correta, fundo verde
                } else {
                    dropzone.style.backgroundColor = '#FA8072'; // Resposta incorreta, fundo vermelho
                }

                // Reseta o item arrastado
                draggedItem = null;
            });
        });