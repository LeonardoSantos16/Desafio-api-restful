import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    font-size: 16px;
    >main{
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 1120px;
        overflow-y: scroll;
        overflow: i;
        scrollbar-width: thin;
        scrollbar-color: #FF859B #1C1B1E;
        padding-right: 8px;
        
        
        >header{
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: 380px;
            height: 148px;
            >a{
                color: ${({ theme }) => theme.COLORS.PINK};
                display: flex;
                align-items: center;
                gap: 8px;
                text-decoration: none;
            }
            >.title{
                display: flex;
                gap: 19px;
                align-items: center;
                >h1{
                /* Interestellar */

                font-weight: 500;
                font-size: 36px;
                line-height: 47px;
                }
                >img{
                    width: 140px;
                    height: 20px;

                }
            }
            >.subTitle{
                display: flex;
                font-family: "Roboto";
                align-items: center;
                text-align: justify;
                gap: 8px;
                font-weight: 400;
                
                line-height: 19px;
                >img{
                    border: 1px solid #3E3B47;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                }
            }
        }
        >p{
            /* Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram. */
        display: flex;
        text-align: justify;
        font-size: 16px;
        line-height: 21px;

        }
    }
`


