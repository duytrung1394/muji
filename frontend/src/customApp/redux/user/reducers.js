import {combineReducers} from "redux";
import Entity from './entity/reducer';
import List from './list/reducer';

export default combineReducers({
  Entity,
  List,
});