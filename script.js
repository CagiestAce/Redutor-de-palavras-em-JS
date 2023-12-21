        // Função para realizar a conversão
        function converterPalavra(id) {
            // Obtém o elemento com o ID fornecido
            var elemento = document.getElementById(id);

            // Verifica se o elemento existe
            if (elemento) {
                // Obtém o conteúdo do elemento
                var conteudo = elemento.innerHTML.trim();

                // Divide o conteúdo em palavras
                var palavras = conteudo.split(' ');

                // Converte cada palavra
                var resultado = palavras.map(function(palavra) {
                    // Verifica se a palavra possui mais de 3 letras
                    if (palavra.length > 3) {
                        // Converte a palavra para a inicial com um ponto
                        return palavra.charAt(0) + '.';
                    } else {
                        // Mantém a palavra inalterada
                        return palavra;
                    }
                });

                // Atualiza o conteúdo da tag resultado
                document.getElementById('resultado').innerHTML = resultado.join(' ');
            }
        }

        // Chama a função com o ID da tag desejada
        converterPalavra('tag');