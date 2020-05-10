import {Injectable} from '@angular/core';
import {IState} from '../../typings/api';
import {BRAZIL_STATE_DATA} from './brazil-states';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
  ) { }

  private getFlagByState(state: string){
    return `assets/images/flags/${state.toUpperCase()}.png`;
  }

  private setAdditionalInfoByState(stateUF: string){
    return {
      flag: this.getFlagByState(stateUF)
    };
  }

  setAdditionalInfoStates(states: IState[]){
    return states.map(state => {
      return {
        ...state,
        ...this.setAdditionalInfoByState(state.uf)
      };
    });
  }
}
