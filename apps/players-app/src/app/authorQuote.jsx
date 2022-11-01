import { Blockquote } from '@mantine/core';

export function AuthorQuote() {
  return (
    <div style={{backgroundColor: "white"}}>
      <Blockquote color="dark" cite="– Jakub Fałowski">
        Nasza witryna umożliwia zaawansowane analizy statystyk piłkarskich.
        Moduł piłkarzy pozwala na porównanie ocen piłkarzy z trzech źródeł (Fifa i Football Manager 21 oraz danych rzeczywistych z sezonu 2021/2022 Premier League).
        Podstrona drużyn pomaga w próbach przewidywań wyników spotkań polskiej ekstraklasy na termin tydzień w przód względem dzisiejszej daty.
      </Blockquote>
    </div>
  );
}

export default AuthorQuote;