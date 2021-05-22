/* eslint-disable */
import { VueConstructor } from 'vue';
import XDragList from './XDragList.vue';

(<any>XDragList).install = (Vue: VueConstructor) => {
	Vue.component(XDragList.entryName, XDragList);
};

export default XDragList;
