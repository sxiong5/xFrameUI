/* eslint-disable */
import { VueConstructor } from 'vue';
import Button from './Button.vue';

(<any>Button).install = (Vue: VueConstructor) => {
	Vue.component(Button.entryName, Button);
};

export default Button;
