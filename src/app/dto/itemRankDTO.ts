import { AvaliacaoMediaDTO } from './avaliacaoMediaDTO';
import { InstituicaoDTO } from './instituicaoDTO';

export class ItemRankDTO  {

    instituicao: InstituicaoDTO;
    avaliacoes: Array<AvaliacaoMediaDTO>;
    mediaGeral: number;

}