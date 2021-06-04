import { VueConstructor } from 'vue';
import DragItem from './DragItem.vue';

(<any>DragItem).install = (Vue: VueConstructor) => {
	Vue.component(DragItem.entryName, DragItem);
};

export default DragItem;
