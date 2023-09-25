 const draggables = document.querySelectorAll('.column-A li');
        const dropzones = document.querySelectorAll('.column-B .dropzone');

        let draggedItem = null;

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', (e) => {
                draggedItem = draggable;
                e.dataTransfer.setData('text/plain', draggable.textContent);
            });

            // Adicione eventos de toque para dispositivos móveis
            draggable.addEventListener('touchstart', (e) => {
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
                if (!draggedItem) return;

                const draggedText = draggedItem.textContent;
                dropzone.textContent = draggedText;

                const respostaCorreta = dropzone.getAttribute('data-resposta').trim();

                if (respostaCorreta === draggedText) {
                    dropzone.style.backgroundColor = '#3CB371'; //Resposta certa fica verde
                } else {
                    dropzone.style.backgroundColor = '#FA8072'; //Resposta errada fica vermelho
                }

                draggedItem = null;
            });

            // Adicione eventos de toque para dispositivos móveis
            dropzone.addEventListener('touchstart', (e) => {
                if (!draggedItem) return;
                const draggedText = draggedItem.textContent;
                dropzone.textContent = draggedText;

                const respostaCorreta = dropzone.getAttribute('data-resposta').trim();

                if (respostaCorreta === draggedText) {
                    dropzone.style.backgroundColor = '#3CB371'; //Resposta certa fica verde
                } else {
                    dropzone.style.backgroundColor = '#FA8072'; //Resposta errada fica vermelho
                }

                draggedItem = null;
                e.preventDefault();
            });
        });
