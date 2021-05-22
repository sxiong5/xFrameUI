/* eslint-disable */
import { VueConstructor } from 'vue';
import DragList from './DragList.vue';

(<any>DragList).install = (Vue: VueConstructor) => {
	Vue.component(DragList.entryName, DragList);
};

export default DragList;
