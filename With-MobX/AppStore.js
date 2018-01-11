import { computed, observable } from 'mobx';

export class AppStore {
  @observable title = "Oceny obiadów"
  @observable rate = {
    klasyk: '5',
    carbonara: '3',
    sezam: '4',
    rosol: '2',
    pomidorowa: '4',
    kurczak: '5',
  }

  @computed get newRate() {
    return this.selected = this.rate;
  };
}

export default new AppStore