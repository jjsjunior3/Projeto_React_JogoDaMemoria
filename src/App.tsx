import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { InfoItem } from './components/infoItem';
import { Button } from './components/Button';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';


const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  const resetAndCreateGrid = () => {
    // passo 1 - resetando o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    //passo 2 - criando o grid
      //2.1 - grid vazio
    let tmpGrid: GridItemType[] = [];
    for(let i = 0; i < (items.length * 2); i++) tmpGrid.push({
        item: null, show: false, permanentShown: false
      });
    // 2.2 - preencher o grid
      

    // 2.3 - jogar no state
    setGridItems(tmpGrid);

    // passo 3 - começar o jogo
    setPlaying(true);
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </C.Info>
      <C.GridArea>
        <C.Grid>

        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;