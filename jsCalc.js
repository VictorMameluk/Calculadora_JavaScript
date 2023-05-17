function calcular (tipo, valor){
            
            //aqui verifiquei se o tipo é ===(idêntico) a uma ação ou se é um valor;
            //se for um valor ai vamos prosseguir com a operação

            if(tipo === 'acao'){

              if(valor === 'c'){
                //limpar o visor(id resultado)
                document.getElementById('resultado').value =''
              }
              if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){

                document.getElementById('resultado').value += valor

              }
              // Se o argumento for uma expressão, eval() avalia a expressão. Se o argumento for uma ou mais instruções JavaScript, eval() executará as instruções.

              // aparentemente não é mais recomendado usar o eval pois corre risco de seu app sofrer ataques, objetivo de usar ele aqui é simplificar já que estamos iniciando o aprendizado agora.
              if(valor === '='){
                 var valor_campo = eval(document.getElementById('resultado').value)

                 document.getElementById('resultado').value = valor_campo
                 
              }

            }else if(tipo === 'valor'){
             
              //var valor_campo = document.getElementById('resultado').value
              //document.getElementById('resultado').value = valor_campo + valor

              //  OBS: so há concatenação nesse caso acima, pois o valor retornado do input é considerado uma string do contrário somaria
              // Abaixo segue a forma mais enxuta do código com o mesmo resultado

              document.getElementById('resultado').value += valor
            }

          }