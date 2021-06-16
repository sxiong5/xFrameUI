/* eslint-disable */
import { VueConstructor } from 'vue';
import Folding from './Folding.vue';

(<any>Folding).install = (Vue: VueConstructor) => {
	Vue.component(Folding.entryName, Folding);
};

export default Folding;
