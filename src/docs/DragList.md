# DragList

---

<br/>
<br/>

### Basic Usage

:::demo The component doesn't contain any css styles other than those required, and the user can customize the styles by setting `class`.

```html
<template>
	<x-drag-list v-model="list" class="drag-list">
		<x-drag-item v-for="(item, index) in list" :key="item" :index="index" class="drag-list-item">
			{{item}}
		</x-drag-item>
	</x-drag-list>
</template>

<script>
	export default {
		data: () => ({
			list: ['01', '02', '03', '04', '05']
		})
	};
</script>

<style>
	.drag-list {
		padding: 10px 0;
		background-color: #f3f3f3;
		border: 1px solid #efefef;
	}
	.drag-list-item {
		background: #fff;
		padding: 15px 10px;
		text-align: left !important;
	}
	.drag-list-item + .drag-list-item {
		border-top: 1px solid #eee;
	}
</style>
```

:::
<br/>
<br/>

### DragList Attributes

| Attribute     | Desctiption                         | Type    | Accepted Values | Default Value |
| ------------- | ----------------------------------- | ------- | --------------- | ------------- |
| v-model/value | binding value                       | Array   | --              | --            |
| append-to     | the parent node of drag item        | String  | CSS Selectors   | '#app'        |
| active-class  | the class name of drag item         | String  | --              | --            |
| axis          | the main axis of the drag derection | String  | 'x', 'y'        | 'y'           |
| lock-axis     | lock the axis                       | boolean | --              | false         |

<br/>

### DragItem Attributes

| Attribute | Desctiption       | Type   | Accepted Values | Default Value |
| --------- | ----------------- | ------ | --------------- | ------------- |
| index     | the index of item | Number | --              | --            |
